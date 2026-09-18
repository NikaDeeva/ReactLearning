function Card({ children }){
return (
    <div className="children">
        {children}
    </div>
)
}

function UserCard(props){
return (
<div> <h2>Name: {props.name}</h2>
<p>Email: {props.email}</p>
<button>View profile</button>

</div>
)
}

function App(){
    return(
        <div>
        <Card>
            <h2>Hello</h2>
        </Card>
        <UserCard
    name="Alex"
    email="alex@gmail.com"
/>

<UserCard
    name="Maria"
    email="maria@gmail.com"
/> </div>
    )
}


import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function App() {
    const [theme, setTheme] = useState('light');

    return (
        <ThemeContext.Provider value={{ theme, setTheme}}>
            <Header />
            <Content />
        </ThemeContext.Provider>
    );
}

function Header() {
    return <ThemeButton />;
}

function ThemeButton() {
    const { theme, setTheme } = useContext(ThemeContext);

    function toggleTheme() {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    return (
        <button onClick={toggleTheme}>
            Change theme
        </button>
    );
}

function Content() {
    const { theme, setTheme } = useContext(ThemeContext);

    return <h2>Current theme: {theme}</h2>;
}