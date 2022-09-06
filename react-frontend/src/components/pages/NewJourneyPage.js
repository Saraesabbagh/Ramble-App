import { DropDownList } from "../atomic-components/DropDownList";
import { Page } from "../pages/Page";
import {useNavigate} from 'react-router-dom';
// import { Footer } from "../atomic-components/Footer";
import React from "react";


export const NewJourneyPage = () => {
    
    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate('/home');
      };

      const saveRoute = (event) => {
      event.preventDefault()
      const discipline = event.target.discipline
      const title = event.target.title
      const description= event.target.description
      const startTime = event.target.startTime
      const startPoint = event.target.startPoint
      const endPoint = event.targt.endPoint

      fetch('/api/save_route', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body:JSON.stringify({discipline: discipline.value, title: title.value, description: description.value, startTime: startTime.value, startPoint: startPoint.value, endPoint:endPoint.value })
      })
      .then(response => response.json())
      .catch((error) => {
        console.error("Error", error)
      })
    }

    const generateRoute = (event)=> {
        //use an api to generate coords, send them to backend, recieve a route back that can be displayed as an image.


        fetch('api/generate_route', {
            method: 'GET'
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

    return (
        <div>
            <Page />
            <div>
            <form onSubmit = {generateRoute}> 
            <h2>What journey would you like to add?</h2>
                <DropDownList name="discipline" items={disciplines}/>
                <input name="title" placeholder="Give your Journey a title" />
                <input name="description" type="text" placeholder="Give us a quick description of your Journey..." />
                <input name="startTime" placeholder="When will your journey start?" />
                <input name="startPoint" placeholder="Where will your journey start?" />
                <input name="endPoint" type="text" placeholder="Where will your journey end?" />
                <input className="button" type="submit" value="Generate Route" />
                <input onClick={saveRoute}className="button" type="submit" value="Save Route" />
                <input onClick={navigateToHome}className="button" type="submit" value="Go to Routes" />
            </form>
            </div>
           
        </div>
    )
}