import { Page } from "./Page.js"
import React from "react";
import '../../App.css'
import {useNavigate} from 'react-router-dom';


export const NewUserPage = () => {
    const navigate = useNavigate();
    const navigateToLogin = () => {
        // 👇️ navigate to do the login
        navigate('/session/new');
      };

    const whenSubmit = (event) => {
        event.preventDefault()
        const firstName = event.target.firstName
        const lastName = event.target.lastName
        const email = event.target.email
        const password = event.target.password
        
        fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({firstName: firstName.value, lastName: lastName.value, email: email.value, password: password.value})
            
        })
        .then(response => console.log("RESPONSE JSON:       ", response.json()))
    
        .catch((error) => {
            console.error("Error", error)
        })
        console.log('Form was submitted')
    }
    
    return (
        
        <div> 
            <Page />
            <div>
            <form onSubmit = {whenSubmit}> 
            <h2>Please SIGN UP here!</h2>
                <input name="firstName" placeholder="First name" />
                <input name="lastName" placeholder="Last name" />
                <input name="email" type="email" placeholder="example@mail.com" />
                <input name="password" type="password" placeholder="Password" />
                <input onClick={navigateToLogin} className="button" type="submit" value="Sign up" />
            </form>
            </div>
        </div>
   )
}