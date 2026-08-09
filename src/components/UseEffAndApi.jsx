import { useState, useEffect } from "react";

function Posts(){
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
    useEffect(() => {
        async function  getPosts() {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await res.json();
            setPosts(data);
        }
        getPosts()
    }, []);

    return (
        <ul>{posts.map(post => <li key={post.id}>{post.title}</li>)}</ul>
    )
}

function Users(){
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getUsers(){
            try{
                const res = await fetch("https://jsonplaceholder.typicode.com/users");
                if (!res.ok){
                    throw new Error('Cannot upload fetch or something like this idk')
                }
                const data = await res.json();
                setUsers(data)
            }
            catch (error){
                setError(error);
            }
            finally{
                setLoading(false)
            }
        }
        getUsers()
    }, [])

    if (loading){
        return <h2>Loading...</h2>
    }
    if (error){
return <h2>Something went wrong</h2>
    }
        return (
            <ul>{users.map(user =>  <li key={user.id}>{user.name}</li>)}</ul>
        )
    
}