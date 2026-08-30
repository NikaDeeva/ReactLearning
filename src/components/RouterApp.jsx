import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useParams,
    useNavigate,
    Outlet
} from "react-router-dom";
import { useState, useEffect } from "react";

function App(){
    return (
<BrowserRouter>
<Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/posts' element={<Posts />} />
    <Route path='/posts/:id' element={<Post />} />
</Routes>
</BrowserRouter>
    )

}

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Link to="/about">Go to about</Link>
        </div>
    
);
}

function About() {
    return (
        <div>
            <h1>About</h1>
            
            <Link to="/">Go to home</Link>
        </div>
    ) ;
}


function Posts(){
    
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    


    useEffect(() => {
          async function getPosts(){
           try{
            setError(null);
            setLoading(true);
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
            if (!res.ok){
                throw new Error('error')
            }
            const data = await res.json();
            setPosts(data);
           }
           catch (error){
            setError(error.message);
           }
           finally{
            setLoading(false);
           }
        }
        getPosts();
    }, []);

    return (
        <div> {loading ? <h2>Loading...</h2> : 
        error ? <h2>Error</h2> :   
        <ul>{posts.map(p => <li key={p.id}><Link to={`/posts/${p.id}`}>{p.title}</Link></li>)}</ul> }
          
        </div>
    )
}



function Post(){

    const [post, setPost] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const nav = useNavigate();
  
    const { id } = useParams();
    const numId = Number(id);

    useEffect(() => {
        async function getPost(){
           try{
            setError(null);
            setLoading(true);
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${numId}`);
            if (!res.ok){
                throw new Error('API doesn`t give response')
            }
            const data = await res.json();
            setPost(data);
           }
           catch (error){
            setError(error.message);
           }
           finally{
            setLoading(false);
           }
        }
        getPost();
    }, [numId]);

    if (loading){
        return <h2>Loading...</h2>
    }
    if (error){
        return <h2>{error}</h2>
    }
    return (
        <div><h2>{post.title}</h2>
        <button onClick={() => nav('/posts', { replace: true })}>Back to posts</button>
        </div>
        
    )
}

function App(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/dashboard' element={<Dashboard/>}>
            <Route index element={<DashboardHome />} />
            <Route path='profile' element={<Profile/>}></Route>
            <Route path='settings' element={<Settings/>}></Route>
            </Route>
        </Routes>
        </BrowserRouter>
    )
}

function Dashboard(){
return(
    <div>
        <h2>Dashboard</h2>
        <nav>
            <Link to='profile'>Profile</Link>
            <Link to='settings'>Settings</Link>
        </nav>
        <Outlet/>
    </div>
        
      
)
}
function DashboardHome(){
    return <h2>Welcome to Dashboard!</h2>
}
function Profile(){
return(
        <h2>Profile page</h2>
      
)
}
function Settings(){
return(
        <h2>Settings page</h2>
      
)
}