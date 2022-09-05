import { DropDownList } from "../atomic-components/DropDownList";
import { Page } from "../pages/Page";
// import { Footer } from "../atomic-components/Footer";
import React from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { GeoCoordsApi } from "../../services/GetCoordsApi";
import { GetPlaceIdApi } from "../../services/GetPlaceIdApi";
import { GetMap } from "../atomic-components/getMap";

export const NewJourneyPage = () => {
    
const whenSubmit = (event) => {
        // event.preventDefault()
        // const startPoint = event.target.startPoint
        // // add endpoint      
       
        // GeoCoordsApi(startPoint);
        // console.log(startPoint)
      

    }
    
    const disciplines = [
        "Walking",
        "Running",
        "Cycling"
    ]

    const render = (Status) => {
        return <h1>{Status}</h1>;
    };

    return (
        <div>
            <Page />
            <div>
            <form onSubmit = {whenSubmit}> 
            <h2>What journey would you like to add?</h2>
                <DropDownList name="discipline" items={disciplines}/>
                <input name="title" placeholder="Give your Journey a title" />
                <input name="description" type="text" placeholder="Give us a quick description of your Journey..." />
                <input name="startTime" placeholder="When will your journey start?" />
                <input name="startPoint" placeholder="Where will your journey start?" />
                <input name="endPoint" type="text" placeholder="Where will your journey end?" />
                <input className="button" type="submit" value="Generate Route" />
            </form>
            </div>
            <Wrapper apiKey={"AIzaSyCVwRHHdtd6XynKpgTNl4SQOM4jT_pTaGk"} render={render} >
                
                <GetMap />
 
            </Wrapper>
        </div>
    )
}