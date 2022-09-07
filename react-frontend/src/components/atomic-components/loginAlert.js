import "./loginAlert.css"
import React from "react";
// import {useNavigate} from 'react-router-dom';

export const loginAlert = () => {
    

    return alert ( 

        <div className="loginAlert">
            <h2>Welcome to Ramble!</h2>
            <button><a href="/home">Head to Home Page</a></button>
        </div>
    )
};