import "./HomePage.css";
import { Page } from "./Page.js";
import React from "react";


export const HomePage = () => {
   return (
    <div> 
        <Page />
      
        <div className="homeHero"> 
            <div className="homeHeroTextBox">
                <h1>Hi name!</h1>
                <h2>What would you like to do today?</h2>
                <button className="button">Filter</button>
            </div>
        </div>
        <div className="homeList">
        <div className='row'>
            <div className='column'>
              <div className='map-column'>

              <img className="cyclegroup" src={require("../images/samplemap.png")} alt="map" width="250" />
             

              </div>
            </div>
            <div className='column'>
              <div className='text-column'>

              <h3>Walk with kate</h3>
                <p>Date and Time: </p>
                <p>Location: </p>
                <p>Duration: </p>
                <p>Find out more about this Journey
                <p><a className="button" href="/journey/id">here</a></p>
                </p>

                
              </div>
            </div>
          </div>
        </div>
    

    </div>
   )
   
}