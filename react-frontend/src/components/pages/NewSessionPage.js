import { Page } from "./Page.js"
import React from "react";
import '../../App.css'

export const NewSessionPage = () => {
    const whenSubmit = (event) => {
        event.preventDefault()
        console.log('You logged in')
    }
    return (
        
        <div> 
            <Page />
            
            <form onSubmit = {whenSubmit}> 
            <h2>Please log in</h2>
                <input label="Email" type="email" placeholder="example@mail.com" />
                <input label="Password" type="password" placeholder="Write your password" />
                <input className= "button" type="submit" value="Log in" /> 
            </form>
        </div>
   )
}