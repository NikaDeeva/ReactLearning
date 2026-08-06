import { useState, useEffect } from "react";

function Likes(){
    const [count, setCount] = useState(0);

    useEffect(() => 
        {console.log(`Change: ${count}`)}, [count])

    return (
        <div>
            Likes: {count}
            <button onClick={() => setCount(count + 1)}>Add</button>
        </div>
    )
}

function UserProfile(){

    const [user,setUser] = useState(null);

    


    useEffect(()=>{

        setTimeout(()=>{
            setUser({
                name:"Anna",
                age:20
            })
        },2000)

    },[])

    useEffect(() => {
        console.log('User changed')
    }, [user])


    if(user === null){
        return <h1>Loading...</h1>
    }


    return (
        <>
            <h2>Name: {user.name}</h2>
            <p>Age: {user.age}</p>
            <button onClick={() => setUser({
                name: 'Barbara',
                age: 22
            })}>Change user</button>
        </>
    )
}