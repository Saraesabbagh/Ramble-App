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
                        user.title
                    )
                }
            })}
                
           
        </div>
    )
}