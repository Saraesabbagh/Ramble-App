import { DropDownList } from "../atomic-components/DropDownList";
import { Page } from "../pages/Page";
import {useNavigate} from 'react-router-dom';
// import { Footer } from "../atomic-components/Footer";
import React, {useRef, useState } from "react";
import { usePlacesWidget } from "react-google-autocomplete";

const StartMapAPI = (props) => {
  const { ref, autocompleteRef } = usePlacesWidget({
    apiKey:"AIzaSyCVwRHHdtd6XynKpgTNl4SQOM4jT_pTaGk",
    options: {
      types: []
    },
    
    onPlaceSelected: (place) => {
      props.setStart_coordinates(place.geometry.location)
    }
  });
  return <input ref={ref} name="startPoint" placeholder="Where will your journey start?" />
}

const EndMapAPI = (props) => {
  const { ref, autocompleteRef } = usePlacesWidget({
    apiKey:"AIzaSyCVwRHHdtd6XynKpgTNl4SQOM4jT_pTaGk",
    options: {
      types: []
    },
    onPlaceSelected: (place) => {
      props.setEnd_coordinates(place.geometry.location)
    }
  });
  
  
  return <input ref={ ref } name="endPoint" type="text" placeholder="Where will your journey end?" />
}

export const NewJourneyPage = (props) => {
   
    const [start_coordinates, setStart_coordinates] = useState();
    const [end_coordinates, setEnd_coordinates] = useState();

    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate('/home');
      };

      const saveRoute = (event) => {
      event.preventDefault()

      const user_id = props.user._id

      const start_place = start_coordinates
      const end_place = end_coordinates
      const discipline = "cycling"
      const title = event.target.title
      const description = event.target.description
      const date = event.target.date
      const startTime = event.target.startTime
      const startPoint = event.target.startPoint
      const endPoint = event.target.endPoint
      console.log("Discipline", discipline.item)
      console.log(user_id)
      console.log(start_place)
      console.log(end_place)
      console.log(title)
      console.log(description)
      console.log(startTime)
      console.log(startPoint)
      console.log(endPoint)

      fetch('/api/save_route', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({host_id: user_id, title: title.value, description: description.value, date: date.value, startPoint: startPoint.value,endPoint: endPoint.value ,discipline: discipline, startTime: startTime.value, start_place: start_place, end_place: end_place})
      })
      .then(response => console.log(response.body))
      .catch((error) => {
        console.error("Error", error)
      })
    }
    
    const disciplines = [
        "Walking",
        "Running",
        "Cycling"
    ]

    // const render = (Status) => {
    //     return <h1>{Status}</h1>;
    // };

      //////////////////
      
 
   

   
    
    return (
        <div>
            <Page />
            <div>
            <form onSubmit = {saveRoute}> 
            <h2>What journey would you like to add?</h2>
                <DropDownList name="discipline" items={disciplines}/>
                <input name="title" placeholder="Give your Journey a title" />
                <input name="description" type="text" placeholder="Give us a quick description of your Journey..." />
                <input name="date" type="date" placeholder="Select the date for your journey" />
                <input name="startTime" placeholder="When will your journey start?" />
                <StartMapAPI setStart_coordinates={setStart_coordinates}/>
                <EndMapAPI setEnd_coordinates={setEnd_coordinates}/>
                <input className="button" type="submit" value="Generate Route" />
                <input onClick={navigateToHome}className="button" type="submit" value="Go to Routes" />
            </form>
            </div>
                
           
        </div>

// <input name="startPoint" placeholder="Where will your journey start?" />
    )
}
