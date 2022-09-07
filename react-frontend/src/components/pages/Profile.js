import "./HomePage.css";
import { Page } from "../pages/Page";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"

export const Profile = () => {

    const location = useLocation()

//     const [user, setUser] = useState([]);
//     useEffect(() => {
//     fetch(`/api/profile/"63186b4e7988e0e5b49b1f10"/`) // backend url to get each user 
//       .then(json => setUser(json))
//       .then(data => console.log(data))
//       .catch((err) => {
//         console.log(err.message);
//       })
//   }, [])
  
    return (
        
        <div>
            <Page />
            <h1>Kate Evans</h1>
           
            {/* <h1>{user.firstName}</h1> */}
                    

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

            

            {/* <h1>Journeys I've done</h1>
            {user.map((user) => {
                if(user.id === 1){
                    return (
                        <p>{user.journeys}</p>
                    )
                }
            })} */}
        </div>
    )
}