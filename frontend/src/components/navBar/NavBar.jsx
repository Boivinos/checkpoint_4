import React from 'react';
import logo from "../../assets/logo.png"

const NavBar = () => {
    return (
        <div className='navBar'>
            <img src={logo} className='logo' />
           <h1>Magic Ersatz</h1> 
        </div>
    );
};

export default NavBar;