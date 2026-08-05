import Header from "./components/Header";
import User from "./components/User";
import UserForm from "./components/UserForm";
import UserInfo from "./components/UserInfo";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({
    name: 'Alex',
    surname: 'Surrin',
    age: 19,
    city: 'Vienna',
    hobby: 'Tennis',
    pet: 'Dog',
    job: 'Barista',
    height: 180,
    weight: 68,
  })
  return (
    <>
      <Header />
      <User name="Alex" age={19} city="Viena" isStudent/>
      <UserForm user={user} setUser={setUser} />
      <UserInfo user={user} />
      <Footer />
    </>
  );
}

export default App;