import "./HomePage.css";
import { Page } from "../pages/Page";
import React, { useEffect, useState } from "react";

export const Profile = () => {
    const [users, setUser] = useState([]);
    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos') //change this for backend url to get the user session
      .then(response => response.json())
      .then(json => setUser(json))
      .catch((err) => {
        console.log(err.message);
      })
  }, [])

    return (
        
        <div>
            <Page />
            {users.map((user) => {
                if(user.id === 1){
                    return (
                        <h1>{user.title}</h1>
                    )
                }
            })}

            {/* First card with profile picture and bio */}
            <div className='row'>
                {/* profile picture */}
                <div className='column'>
                    <div className='map-column'>
                        <img className="profile-pic" src={require("../images/kate.png")} alt="white_woman" width="250" />
                    </div>
                </div>

                {/* profile description */}
                <div className='column'>
                    <div className='map-column'>
                        <p className="description">Hi I'm Kate, I love walking, cycling. Apart from those I spend the rest of my time coding and doing magic 🪄.</p>   
                    </div>
                </div>  
            </div>

            <h1>Journeys I've done</h1>
            {users.map((user) => {
                if(user.id === 1){
                    return (
                        <p>{user.journeys}</p>
                    )
                }
            })}
        </div>
    )
}