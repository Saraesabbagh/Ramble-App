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
            
            <a href="/">Home</a>
            <a href="/mission">About us</a>
            <a href="/app">App</a>

            <button onClick={navigateToLogin} className="button"> Login </button>
            <button onClick={navigateToSignUp} className="button"> Sign Up </button>
        </div>
    )
};