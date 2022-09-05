import "./Navbar.css"
import React from "react";
import {useNavigate} from 'react-router-dom';

export const Navbar = () => {
    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate('/session/new');
    }
    const navigateToSignUp = () => {
        navigate('/user/new');
    }

    return ( 

        <div className="topnav">
        <ul>
            <li> <a href="/">Home</a> </li>
            <li> <a href="/mission">About us</a> </li>
            <li> <a href="/app">App</a> </li>
            <span className="nav-button-span">
                <li><button onClick={navigateToLogin} className="nav-button"> Login</button></li>
                <li><button onClick={navigateToSignUp} className="nav-button"> Sign up </button></li>
            </span>    
        </ul>    

        </div>
    )
};