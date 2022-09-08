import React from "react";


export const JourneyRender = (props) => {
    
    return ( 
        <div className="journey-container">
            <p>{props.journey.host_id}</p>
            <p>{props.journey.title}</p>
            <p>{props.journey.description}</p>
            <p>{props.journey.discipline}</p>
            <p>{props.journey.startTime}</p>
            <p>{props.journey.endPoint}</p>
            <p>{props.journey.duration} Minutes</p>
            <p>{props.journey.distance} Miles </p>
            <img src={props.journey.img} alt="Journey Map"/>
        </div>
    )
}