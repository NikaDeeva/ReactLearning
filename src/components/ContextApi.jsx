import { useContext } from "react";

function  Profile() {
    const {user, setUser} = useContext(UserContext);
    return (
        <div>
            <p>{user.name}</p>
        <p>{user.age}</p>
        <button onClick={() => setUser({
            ...user,
            name: 'Maria',
        })}>Change name</button>
        </div>
        
    )
    
}

function ThemeButton() {
    const {theme, setTheme} = useContext(ThemeContext);

    function newTheme(){
        if (theme === 'light'){
            return 'dark';
        }
        else if (theme === 'dark'){
            return 'light'
        }
    }

    return (
        <div>
            <p>Theme: {theme}</p>
            <button onClick={() => setTheme(newTheme())}></button>
        </div>
    )
}