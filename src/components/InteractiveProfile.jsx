import { useState } from "react";

function Profile(){
    const [profile, setProfile] = useState({
        name: 'Alex',
        age: 19,
    })

    function sayHello(name){
        console.log(`Hello ${name}`)
    }

    return (
        <div>
            
            <p>Name: {profile.name}</p>
            <p>Age: {profile.age}</p>
            <button onClick={() => setProfile({
                ...profile,
                age: profile.age + 1,
            })}>Birthday</button>
            <label>Change name: 
                <input type="text" value={profile.name} onChange={(e) => setProfile({
                    ...profile,
                    name: e.target.value,
                })}/>
                <button onClick={() => sayHello(profile.name)}>Say hello!</button>
            </label>
        </div>
    )
}