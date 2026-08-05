function UserInfo({ user }){
return (
    <div>
        <p>Name: {user.name}</p>
        <p>Surname: {user.surname}</p>
        <p>Age: {user.age}</p>
        <p>City: {user.city}</p>
        <p>Pet: {user.pet}</p>
        <p>Hobby {user.hobby}</p>
        <p>Job: {user.job}</p>
        <p>Height: {user.height}</p>
        <p>Weight: {user.weight}</p>
    </div>
)
}
export default UserInfo