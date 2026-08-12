import { useState, useEffect } from "react";

function PostSearch(){
    
    const [posts, setPosts] = useState([]);
    const [searchedTitle, setSearchedTitle] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [totalPosts, setTotalPosts] = useState(0);

    const postsPerPage = 4;

     const totalPages = Math.ceil(totalPosts / postsPerPage)

    useEffect(() => {
        async function getPosts(){
            try{
                setError(null)
            setLoading(true)
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${postsPerPage}&title_like=${searchedTitle}`)
            if (!res.ok){
                throw new Error('API does not give response')
            }
             const total = Number(res.headers.get("X-Total-Count"));
             setTotalPosts(total);
            const data = await res.json();
            setPosts(data);
            return posts;
            }
            catch (error){
                setError(error);
            }
            finally{
                setLoading(false)
            }
            
        }
        getPosts()
    }, [page, searchedTitle]);

    if (error){
        return <h2>Error</h2>
    }
    if (loading){
        return <h2>Loading...</h2>
    }

    function getPages(){
         const pagesAr = [];

    if (page <= 2) {
        pagesAr.push(1);
        pagesAr.push(2);
        pagesAr.push(3);
        pagesAr.push('...');
        pagesAr.push(totalPages);
    }
    else if (page >= totalPages - 1) {
        pagesAr.push(1);
        pagesAr.push('...');
        pagesAr.push(totalPages - 2);
        pagesAr.push(totalPages - 1);
        pagesAr.push(totalPages)
    }
    else {
        pagesAr.push(1);
        pagesAr.push('...');
        pagesAr.push(page - 1);
        pagesAr.push(page);
        pagesAr.push(page + 1);
        pagesAr.push('...');
        pagesAr.push(totalPages)
    }

    return pagesAr;
    }

    return (
        <div>
            <input type="text" placeholder="Search any post" onChange={(e) => {
                setSearchedTitle(e.target.value);
            }}/>
            <ul>{getPosts().filter(p => p.title.includes(searchedTitle)).map(p => <li>{p.title}</li>)}</ul>
           <div>{getPages().map(pageNum => {
            if (typeof pageNum === "number"){
                return <button key={pageNum} onClick={() => setPage(pageNum)}>{pageNum}</button>
            }
            if (typeof pageNum === "string"){
                return <span>...</span>
            }
        })}</div>
        </div>
    )


}