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
            setLoading(true);
          const url = searchedTitle
    ? `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${postsPerPage}&title_like=${searchedTitle}`
    : `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${postsPerPage}`;

            const res = await fetch(url);
            if (!res.ok){
                throw new Error('API does not give response')
            }
             const total = Number(res.headers.get("X-Total-Count"));
             setTotalPosts(total);
            const data = await res.json();
            setPosts(data);
            }
            catch (error){
                setError(error);
            }
            finally{
                setLoading(false)
            }
            
        }

        const timer = setTimeout(() => {
getPosts();
        }, 500);

        return () => clearTimeout(timer);
        
    }, [page, searchedTitle]);

    if (error){
        return <h2>Error</h2>
    }

    function getPages(){
         const pagesAr = [];

         if (totalPages <= 5){
            for (let i = 1; i <= totalPages; i++){
                pagesAr.push(i);
            }
         }

    else if (page <= 2) {
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

      function toPrev(){
        if (page === 1){
            alert('This is the first page');
            return;
        }
        else {setPage(prev => prev - 1)}
    }

    function toNext(){
        if (page === totalPages){
            alert('This is the last page');
            return;
        }
        else {setPage(prev => prev + 1)}
    }

    return (
        <div>
            <input type="text" placeholder="Search any post" onChange={(e) => {
                setSearchedTitle(e.target.value);
                setPage(1);
            }}/>
            {loading ? (<h2>Loading...</h2>) : (posts.length === 0 ? (<h2>No posts found</h2>) : (<ul>{posts.map(p => <li key={p.id}>{p.title}</li>)}</ul>))}
           <div>
            <button onClick={toPrev}>Previous</button>
            {getPages().map(pageNum => {
            if (typeof pageNum === "number"){
                return <button key={pageNum} onClick={() => setPage(pageNum)}>{pageNum}</button>
            }
            if (typeof pageNum === "string"){
                return <span>...</span>
            }
        })}
        <button onClick={toNext}>Next</button>
        </div>
        </div>
    )


};

// function Notes(){
//     const [text, setText] = useState('');

//     useEffect(() => {
//         const timer = setTimeout(() => {
// console.log(text);
//         }, 1000)
//         return () => {
//             clearTimeout(timer)
//         }
//     }, [text])

//     return (
//         <div>
//             <textarea  value={text}
//             onChange={(e) => setText(e.target.value)}/>
//         </div>
//     )
// }