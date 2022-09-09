import React from "react";
 import "./journeyRender.css";

export const JourneyRender = (props) => {
    
    return ( 
        <div className="journey-container">
            <h1>{props.journey.title}</h1>
            <p>Description: {props.journey.description}</p>
            <p>Excercise Type: {props.journey.discipline}</p>
            <p>Start at: {props.journey.startPoint}</p>
            <p>Finish at: {props.journey.endPoint}</p>
            <p>Duration: {props.journey.duration} Minutes</p>
            <p>Distance: {props.journey.distance} Miles </p>
            <p>Date: {props.journey.date}</p>
            <p>Time: {props.journey.startTime}</p>
            <img src={props.journey.img} alt="Journey Map"/>
        </div>
    )
}