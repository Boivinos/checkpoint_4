import React, {useContext} from 'react';
import logo from "../../assets/logo.png"
import { NavLink, useNavigate } from "react-router-dom";
import UserContext from '../context/UserContext';

const NavBar = () => {
    const navigate = useNavigate()
    const {user} = useContext(UserContext)
    const {setUser} = useContext(UserContext)

const handleDeco = () => {
    localStorage.clear()
    setUser(undefined)
navigate("/")
}

    return (
        <div className='navBar'>
            <div className="logoTitle">
            <img src={logo} className='logo' />
           <h1>Magic Ersatz</h1>  
           </div> 
           <div className="links">            
           {user?.isAdmin ?
           <NavLink to={`/ersatz-deck/`}>
           <p>Toutes les cartes</p>
           </NavLink>: user &&
           <NavLink to={`/ersatz-deck/mon-deck`}>
           <p>Mon Deck</p>
           </NavLink>}
           {user?.isAdmin ?
           <NavLink to={`/ersatz-deck/card/ajouter`}>
           <p>Ajouter</p>
           </NavLink>:""}
           {user && !user?.isAdmin &&
           <NavLink to={`/ersatz-deck/booster`}>
           <p>Booster</p>
           </NavLink>}
           
           <p onClick={()=> handleDeco()}>Se déconnecter</p>
           </div>         
        </div>
    );
};

export default NavBar;