import "./Navbar.css"
import React from "react";

export const Navbar = () => {
    return ( 
        <div className="topnav">
            
            <a href="#home">Home</a>
            <a href="#mission">Mission</a>
            <a href="#app">App</a>
            <button className="button">Login</button>
            <button className="button">Sign up</button>
        </div>
    )
};