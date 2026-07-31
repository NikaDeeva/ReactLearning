import { useState } from "react";

function Hobbies(){

    const [hobbies, setHobbies] = useState([
        {
            id: 1,
            name: 'Tennis'
        },
        {
            id: 2,
            name: 'Programming'
        },
        {
            id: 3,
            name: 'Reading'
        }
    ])

    function addHobbie(name){
       setHobbies([
        ...hobbies,
        {
            id: hobbies.length + 1,
            name: name
        }
       ])
    }


    return (
        <div>
        
                Enter new hobby
            
                    <input type="text" name="name" onChange={(e) => addHobbie(e.target.value) }/>
              
                
            
            <ul>{  hobbies.map( hobby => <li key={hobby.id}>{hobby.name}
                <button onClick={() => setHobbies(hobbies.filter(h => h.id !== hobby.id)) }>Delete</button>
            </li>)}</ul>
            
            <button onClick={() => setHobbies([])}>Remove all</button>
            {!hobbies.length && <h2>There are not hobbies yet</h2>}
        </div>
    )

}