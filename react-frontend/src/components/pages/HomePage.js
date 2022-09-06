import "./HomePage.css";
import { Page } from "./Page.js";
import React, { useEffect, useState } from "react";


export const HomePage = () => {
  const [journeys, setJourneys] = useState([]);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos') //change this for backend url like '/api/signup'
      .then(response => response.json())
      .then(json => setJourneys(json))
      .catch((err) => {
        console.log(err.message);
      })
  }, [])
  
    
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
            {/* generate all the routes in the database */}
            {/* add a button with request to join */}
            {journeys.map((journey) => {
              return (
                <div>
                  <h3>Walk with kate{journey.title}</h3>
                  <p>Date and Time: {journey.startTime}</p>
                  <p>Location:{journey.startPoint} </p>
                  <p>Duration: {journey.likes.length}</p>
                  <p>Find out more about this Journey</p>
                  <p><a className="button" href="/journey/id">here</a></p>
                </div>
              )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
   )
}