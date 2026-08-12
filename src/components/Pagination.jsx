import { useState, useEffect, use } from "react";

function Pagination() {
    const posts = [
        "Post 1",
        "Post 2",
        "Post 3",
        "Post 4",
        "Post 5",
        "Post 6",
        "Post 7",
        "Post 8",
        "Post 9",
        "Post 10"
    ];

    const [page, setPage] = useState(1);

    const postsPerPage = 3;

   const totalPages = Math.ceil(posts.length / postsPerPage)

   function toPrevPage(){
    if (page === 1){
        alert('This is the first page')
        return;
    }
    else {
        setPage(prev => prev - 1)
    }
   }

   function toNextPage(){
     if (page === totalPages){
        alert('This is the last page')
        return;
    }
    else {
        setPage(prev => prev + 1)
    }
   }

   return (
    <div> 
        <ul>{currentPosts.map(p => <li key={p}>{p}</li>)}</ul>
        <button onClick={() => toPrevPage()}>Previous</button>
        <button onClick={() => toNextPage()}>Next</button>
    </div>
   )
} 

function ApiWithPagination(){

      const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [totalPosts, setTotalPosts] = useState(0);

    const postsPerPage = 3;

     let start = (page - 1) * postsPerPage;

   let end = start + postsPerPage;

   const totalPages = Math.ceil(totalPosts / postsPerPage)

   useEffect(() => {
    async function getPosts() {
        try{
            setError(null);
            setLoading(true);
             const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${postsPerPage}`);
              if (!res.ok){
             throw new Error ('Something went wrong')
}
         const total = Number(res.headers.get("X-Total-Count"));
         setTotalPosts(total);
        const data = await res.json();
        setPosts(data);
        }
        catch (error){
         setError(error)
        }
        finally{
            setLoading(false)
        }

        
    }
    getPosts();
   }, [page]);

   if (error){
    return <h2>Error</h2>
   }
   if (loading){
    return <h2>Loading...</h2>
   }

   function toPrev(){
    if (page === 1){
        alert('This is the first page')
        return;
    }
    else {
        setPage(prev => prev - 1)
    }
   }

   function toNext(){
    if (page === totalPages){
        alert('This is the last page')
        return;
    }
    else {
        setPage(prev => prev + 1)
    }
   }

   const pages = Array.from(
    { length: totalPages },
    (_, index) => index + 1
);

   return (
    <div>
        <ul>{posts.map(p => <li key={p.id}>{p.title}</li>)}</ul>
        <button onClick={toPrev}>Previous</button>
        {pages.map(pageNumber => (
    <button
        key={pageNumber}
        onClick={() => setPage(pageNumber)}
    >
        {pageNumber}
    </button>
))}
        <button onClick={toNext}>Next</button>
    </div>
   )

}