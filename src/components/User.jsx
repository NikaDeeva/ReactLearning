import { useState } from "react"

function User({ name, age, city, isStudent }){

    const [count, setCounter] = useState(0)

    return (<div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>City: {city}</p>
        <p>Student: {isStudent ? "Yes" : "No"}</p>
        <p>Likes: {count}</p>
        <button onClick={() => setCounter(count + 1)}>Like</button>
        <button onClick={() => setCounter(0)}>Reset</button>
    </div>)
}
    
