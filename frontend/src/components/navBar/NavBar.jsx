import React from 'react';
import logo from "../../assets/logo.png"
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className='navBar'>
            <img src={logo} className='logo' />
           <h1>Magic Ersatz</h1> 
           <NavLink to={`/ersatz-deck/card/ajouter`}>
           <p>Ajouter une carte</p>
           </NavLink>
        </div>
    );
};

export default NavBar;