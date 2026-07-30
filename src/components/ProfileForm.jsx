import { useState } from "react";

function Profile(){

      const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [ profile, setProfile ] = useState({
        name: "",
        age: 0,
        city: "",
    });

    const [submittedProfile, setSubmittedProfile] = useState(null);

    function handleChange(event){
        const { name, value } = event.target
        setProfile({
            ...profile,
            [name]: value
        })
    };

    function handleSubmit(event){
        event.preventDefault()
        setSubmittedProfile(profile);
        console.log('Form submitted')
        console.log(`Name: ${profile.name}; Age: ${profile.age}; City: ${profile.city}`)
    };

   return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name='name' value={profile.name} onChange={handleChange} />
            <input type="number" name='age' value={profile.age} onChange={handleChange} />
            <input type="text" name='city' value={profile.city} onChange={handleChange} />
            <button>Submit</button>
        </form>
       {submittedProfile && (
                <div>
                    <h3>Submitted profile:</h3>

                    <p>Name: {submittedProfile.name}</p>
                    <p>Age: {submittedProfile.age}</p>
                    <p>City: {submittedProfile.city}</p>
                </div>
            )}
        </div>
    );
}
   export default Profile;