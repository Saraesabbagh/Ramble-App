import "./HomePage.css";
import { Page } from "./Page.js";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export const HomePage = (props) => {
  const [journeys, setJourneys] = useState([]);
  console.log(props.user);
  
  // Ask information to back-end to get all the journeys
  useEffect(() => {
    fetch('/api/all_routes') 
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
    

   return (
    <div> 
        <Page />
      
        <div className="homeHero"> 
            <div className="homeHeroTextBox">
                <h1>Hi {props.user.firstName}!</h1>
                <h2>What would you like to do today?</h2>
                <button onClick={navigateToNewJourney} className="button">ADD NEW JOURNEY</button>
            </div>
            
        </div>

      {journeys.map((journey) => {
        
        return (
        <div className="homeList">
          
          <div className='row'>
            {/* image card */}
            <div className='column'>
              <div className='map-column'>
                <img className="cyclegroup" src={journey.img} alt="map" width="500" />
              </div>
              <div className='map-column'>
                <button className="button" onClick={(event) => {
                    event.preventDefault();

                    const userId = props.user._id;

                    console.log('USER ID: ', userId);
                    console.log('JOURNEY ID: ', journey._id);
                    fetch('/api/addParticipant', {
                      // add url to post participants into database
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({
                        userId: userId,
                        journeyId: journey._id,
                      }), //send journey_id and partipant_id
                    })
                      .then((response) => response.json())
                      .then((data) => {
                        console.log(data);
                        if (data.message === 'Participant added!') {
                          window.alert('You joined!');
                          navigate('/home');
                        } else {
                          window.alert(data.message);
                        }
                      })
                      .catch((error) => {
                        console.error('Error', error);
                      });
                  }}>Join now!</button>
                <p>Description:</p>
                <p>{journey.description}</p>
                </div>
            </div>

            {/* description and button card */}
              

            {/* text card */}
                  <div className='column'>
                    <div className= 'text-column'>
                      <h2>{journey.title}</h2>
                      <p>Excercise Type: {journey.discipline}</p>
                      <p>Date: {journey.date}</p>
                      <p>Time: {journey.startTime}</p>
                      <p>Start location:{journey.startPoint} </p>
                      <p>End location: {journey.endPoint}</p>
                      <p>Distance: {journey.distance} Miles</p>
                      <p>Duration: {journey.duration} Minutes</p>
                    </div>
            </div>
          </div>
        </div>
        
            )})}

            </div>
            
      )}
      