import { use, useState } from "react";

function Profile(){
    const [profile, setProfile] = useState({
        name: 'Alex',
        age: 19,
        city: 'Vienna'
    })
    const [hobbies, setHobbies] = useState(['tennis', 'programming'])
    return (
        <div>
            <p>Name: {profile.name}</p>
            <p>Age: {profile.age}</p>
            <p>City: {profile.city}</p>
            <button onClick={() => setProfile({
                ...profile,
                age: profile.age + 1,
            })}>Birthday</button>
            <button onClick={() => setProfile({
                ...profile,
                city: 'Madrid',
            })}>Move to Madrid</button>
            <button onClick={() => setProfile({
                ...profile,
                name: 'Anna'
            })}>Change name</button>
            <button onClick={() => setHobbies([
                ...hobbies,
                'reading'
            ])}>Add Reading to hobbies</button>
            <button onClick={() => setHobbies(hobbies.filter(hobbies => hobbies !== 'reading'))}>Remove Reading</button>
        </div>
    )
}