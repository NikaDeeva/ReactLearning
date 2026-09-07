export async function getPosts(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!res.ok){
        throw new Error('Something went wrong')
    }
    return res.json()
}

export async function getPost(id){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!res.ok){
        throw new Error('Something went wrong')
    }
    return res.json()
}

export async function createPost(post){
    
}