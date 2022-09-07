import "./HomePage.css";
import { Page } from "./Page.js";
import React, { useEffect, useState } from "react";


export const HomePage = (props) => {
  const [journeys, setJourneys] = useState([]);
  console.log(props.user);
  
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
                <h1>Hi {props.firstName}!</h1>
                <h2>What would you like to do today?</h2>
                <button className="button">Filter</button>
            </div>
        </div>

      {journeys.map((journey) => {
        return (
        <div className="homeList">
          <div className='row'>
            {/* image card */}
            <div className='column'>
              <div className='map-column'>
                <img className="cyclegroup" src={require("../images/samplemap.png")} alt="map" width="250" />
              </div>
            </div>

            {/* description and button card */}
              <div className='column'>
                <div className='map-column'>
                <button className="button" href="/journey/id">Join now!</button>
                <p>{journey.discription}</p>
                </div>
              </div>

            {/* text card */}
                  <div className='column'>
                    <div className= 'text-column'>
                      <h3>{journey.title}</h3>
                      <p>{journey.discipline}</p>
                      <p>Date and Time: {journey.startTime}</p>
                      <p>Start location:{journey.startPoint} </p>
                      <p>End location: {journey.endPoint}</p>
                      <button className="button" href="/journey/id">Find out more</button>
                    </div>
            </div>
          </div>
        </div>
            )})}
            </div>
      )}