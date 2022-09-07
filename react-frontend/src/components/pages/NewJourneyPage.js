import { DropDownList } from "../atomic-components/DropDownList";
import { Page } from "../pages/Page";
import {useNavigate} from 'react-router-dom';
// import { Footer } from "../atomic-components/Footer";
import React, {useRef, useState } from "react";
import { usePlacesWidget } from "react-google-autocomplete";



export const NewJourneyPage = () => {
   
    const [start_coordinates, setStart_coordinates] = useState();
    const [end_coordinates, setEnd_coordinates] = useState();

    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate('/home');
      };

      const saveRoute = (event) => {
      event.preventDefault()
      console.log("It worked", start_coordinates)
      
      const start_place = start_coordinates
      const end_place = end_coordinates
      const discipline = event.target.discipline
      const title = event.target.title
      const description = event.target.description
      const startTime = event.target.startTime
      const startPoint = event.target.startPoint
      const endPoint = event.target.endPoint
      console.log("Discipline", discipline)

      fetch('/api/save_route', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({title: title.value, description: description.value, startPoint: startPoint,endPoint: endPoint ,discipline: discipline, startTime: startTime.value, start_place: start_place, end_place: end_place})
      })
      .then(response => response.json())
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
    const StartMapAPI = () => {
        const { ref, autocompleteRef } = usePlacesWidget({
          apiKey:"AIzaSyCVwRHHdtd6XynKpgTNl4SQOM4jT_pTaGk",
          
          onPlaceSelected: (place) => {
            console.log(place);
            console.log(place.geometry.location)
            setStart_coordinates(place.geometry.location)
          }
        });
        
        
        return <input ref={ref} name="startPoint" placeholder="Where will your journey start?" />
      }
      //////////////////
      const EndMapAPI = () => {
        const { ref, autocompleteRef } = usePlacesWidget({
          apiKey:"AIzaSyCVwRHHdtd6XynKpgTNl4SQOM4jT_pTaGk",
          
          onPlaceSelected: (place) => {
            console.log(place);
            console.log(place.geometry.location)
            setEnd_coordinates(place.geometry.location)
          }
        });
        
        
        return <input ref={ ref } name="endPoint" type="text" placeholder="Where will your journey end?" />
      }
 
   

   
    
    return (
        <div>
            <Page />
            <div>
            <form onSubmit = {saveRoute}> 
            <h2>What journey would you like to add?</h2>
                <DropDownList name="discipline" items={disciplines}/>
                <input name="title" placeholder="Give your Journey a title" />
                <input name="description" type="text" placeholder="Give us a quick description of your Journey..." />
                <input name="startTime" placeholder="When will your journey start?" />
                <StartMapAPI/>
                <EndMapAPI/>
                <input className="button" type="submit" value="Generate Route" />
                <input onClick={navigateToHome}className="button" type="submit" value="Go to Routes" />
            </form>
            </div>
                
           
        </div>

// <input name="startPoint" placeholder="Where will your journey start?" />
    )
}