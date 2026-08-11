import { useState, useRef, useEffect } from "react";

function Input(){

const inputRef = useRef(null);

return (
    <div>
        Name: <input type="text" ref={inputRef}/>
        <button onClick={() => inputRef.current.focus()}>Enter name</button>
    </div>
)

};
// function NameTracker(){

//     const [name, setName] = useState('');

//     const prevName = useRef('');

//     useEffect(() => {
//        prevName.current = name;
//     });

//     return (
//         <div>
//             <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
//             <button onClick={() => setName(prevName.current)}>Turn to prev name</button>
//             <p>Name: {name}</p>
//         </div>
//     )
// }