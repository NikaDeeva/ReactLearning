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

    const [newHobby, setNewHobby] = useState("")

    // const [isWritten, setIsWritten] = useState(false)

    function addHobbie(name){
        name = name.trim()
        if (name === "") {
        alert('You need to fill the hobby input')
        return
       }
       const alreadyExists = hobbies.some(h => h.name === name)
       if (alreadyExists){
        alert('The hobby has already been written')
        return
       }
       setHobbies([
        ...hobbies,
        {
            id: hobbies.length + 1,
            name: name
        }
       ])
       setNewHobby("")
    }

     function handleChange(e){
      setNewHobby(e.target.value)
     }

    function handleSubmit(e) {
        e.preventDefault()
        addHobbie(newHobby)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}></form>
        
                Enter new hobby
            
                    <input type="text" name="name" value={newHobby} onChange={handleChange}/>
              <button type="submit">Add</button>
                
            
            <ul>{  hobbies.map( hobby => <li key={hobby.id}>{hobby.name}
                <button onClick={() => setHobbies(hobbies.filter(h => h.id !== hobby.id)) }>Delete</button>
            </li>)}</ul>
            
            <button onClick={() => setHobbies([])}>Remove all</button>
            {!hobbies.length && <h2>There are not hobbies yet</h2>}
        </div>
    )

}