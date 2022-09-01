import { Page } from "./Page.js"
import React from "react";
import '../../App.css'

export const NewUserPage = () => {
    const whenSubmit = (event) => {
        event.preventDefault()
        console.log('Form was submitted')
    }
    return (
        
        <div> 
            <Page />
            
            <form onSubmit = {whenSubmit}> 
            <h2>Please Sign Up here!</h2>
                <input label="First Name" placeholder="Write your first name" />
                <input label="Last Name" placeholder="Write your last name" />
                <input label="Email" type="email" placeholder="example@mail.com" />
                <input label="Password" type="password" placeholder="Write your password" />
                <input className= "button" type="submit" value="Sign up" /> 
            </form>
        </div>
   )
}