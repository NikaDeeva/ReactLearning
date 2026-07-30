import Header from "./components/Header";
import User from "./components/User";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <User name="Alex" age={19} city="Viena" isStudent/>
      <Footer />
    </>
  );
}

export default App;