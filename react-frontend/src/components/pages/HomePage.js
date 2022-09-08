import "./HomePage.css";
import { DropDownList } from "../atomic-components/DropDownList";
import { Page } from "./Page.js";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";


export const HomePage = (props) => {
  const [journeys, setJourneys] = useState([]);
  console.log(props.user);
  
  // Ask information to back-end to get all the journeys
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/') //https://jsonplaceholder.typicode.com/todos/ ///api/all_routes
      .then(response => response.json())
      .then(json => setJourneys(json))
      .catch((err) => {
        console.log(err.message);
      })
  }, [])
  
  // Navigate to a page to create new journey
  const navigate = useNavigate();

  const navigateToNewJourney = () => {
    
    navigate('/journey/new')
  }
    
  // Data for dropdown list to do the filter button

  const disciplines = [
    "Walking",
    "Running",
    "Cycling"
]

   return (
    <div> 
        <Page />
      
        <div className="homeHero"> 
            <div className="homeHeroTextBox">
                <h1>Hi {props.user.firstName}!</h1>
                <h2>What would you like to do today?</h2>
                <button onClick={navigateToNewJourney} className="button">ADD NEW JOURNEY</button>
                <DropDownList name="discipline" items={disciplines}/>
            </div>
            
        </div>

      {journeys.map((journey) => {
        const sendDataToProfile = () => {
          navigate('/profile', {state:{id:1, name:journey.host_id}});
        }
        // const currentUserId = "Hello, I'm user id" //journey.host_id
        // const currentUserId = journey.host_id
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
                <p>{journey.description}</p>
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
                      <button onClick={() => {sendDataToProfile()}}>Host</button>
                      <button className="button" href="/journey/id">Find out more</button>
                    </div>
            </div>
          </div>
        </div>
        
            )})}

            </div>
            
      )}
      