import { useState, useEffect } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useParams,
    useNavigate,
    Outlet
} from "react-router-dom";
function App(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/posts' element={<Posts/>}> </Route>
             <Route path='/posts/:id' element={<Post/>}></Route>
            <Route path='/dashboard' element={<Dashboard/>}>
            <Route index element={<DashboardHome />} />
            <Route path='profile' element={<Profile/>}></Route>
            <Route path='settings' element={<Settings/>}></Route>
            </Route>
        </Routes>
        </BrowserRouter>
    )
}

function Posts(){
    const [posts, setPosts] = useState([]);
     const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getPosts(){
            try{
                setError(null);
                setLoading(true)
                const res = await fetch('https://jsonplaceholder.typicode.com/posts');
                if (!res.ok){
                    throw new Error('No response');
                }

                const data = await res.json();
                setPosts(data);
            }
            catch (error){
                setError(error.message)
            }
            finally{
                setLoading(false)
            }

        }
        getPosts();
    }, []);

    return (
        <div>
            <Link to='/dashboard'>Go to dashboard</Link>
            <ul>{ loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : posts.map(p => {return <li key={p.id}>
                <Link to={`/posts/${p.id}`}>{p.title}</Link>
            </li>})}</ul>
        </div>
    )

}

function Post(){
    const [post, setPost] = useState({});
      const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const numId = Number(id);
    const navigate = useNavigate();

    useEffect(() => {
        async function getPost(){
            try{
                setError(null);
                setLoading(true);
const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${numId}`)
            if (!res.ok){
                throw new Error('Something went wrong')
            }
            const data = await res.json();
            setPost(data);
            }
            catch (error){
                setError(error.message)
            }
            finally {
                setLoading(false)
            }
            
        }
        getPost()
    }, [numId]);

    return (
        <div>
            <button onClick={() => navigate('/posts')}>Back to all posts</button>
            {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : <h2>{post.title}</h2>}
        </div>
    )

}

function Dashboard(){
    return (
        <div>
            <h2>Dashboard</h2>
            <nav>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='profile'>Profile</Link>
                <Link to='settings'>Settings</Link>
            </nav>
            <Outlet />
        </div>
    )
}

function Profile(){
    return <h2>Profile page</h2>
}
function Settings(){
    return <h2>Settings page</h2>
}

function DashboardHome(){
    return <h2>Welcome to Dashboard!</h2>
}