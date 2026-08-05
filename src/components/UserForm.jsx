import { use, useState } from "react"

function UserForm({ user, setUser }){

    const [form, setForm] = useState({})

   function handleChange(e){
    const {name, value} = e.target;
    setForm({
        ...form,
        [name]: value,
    })
    
   }

    function handleSubmit(e){
     e.preventDefault()
     if (Object.keys(form).length === 0){
        alert('To change the data you must fill the fields')
        return
     }
     setUser({
        ...user,
        ...form,
     })
    
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name"  onChange={handleChange}/>
            <input type="text" name="surname"  onChange={handleChange}/>
            <input type="number" name="age" onChange={handleChange} />
            <input type="text" name="city"  onChange={handleChange}/>
            <input type="text" name="pet"  onChange={handleChange}/>
            <input type="text" name="job"  onChange={handleChange}/>
            <input type="text" name="hobby"  onChange={handleChange}/>
            <input type="text" name="height"  onChange={handleChange}/>
            <input type="text" name="weight"  onChange={handleChange}/>
            <button type="submit">Change Data</button>
        </form>
    )
}
export default UserForm