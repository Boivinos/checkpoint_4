import NavBar from "./components/navBar/NavBar"
import Footer from "./components/navBar/Footer"
import Router from "./navigation/Router"
import "./imports.scss"
import UserContext from "./components/context/UserContext"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const [user, setUser] = useState();
  const { href } = window.location;
const navigate = useNavigate()
  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem("user"));
     if (storage) {
      setUser(storage)
     } else {
      navigate("/")
     }
   
  }, [href]);

  return (
    <>
    <UserContext.Provider value={{ user, setUser }}>
    <NavBar/>
    <Router/>
    <Footer/>
    </UserContext.Provider>
    </>
  )
}

export default App
