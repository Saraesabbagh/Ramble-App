import "./IndexPage.css"
import { Page } from "./Page.js";
import React from "react";

export const IndexPage = () => {
 
   return (
    <div> 
      <Page />
      
        <div className="indexHero"> 
          <div className="indexHeroTextBox">
              <div className="indexHeroText">
                <h1>RAMBLE</h1>
                <h2>Find a Walking, running or cycling buddy in your area</h2>
              </div>
          </div>
        </div>
        <div className="indexWhyCard">
          <div className='row'>
            <div className='column'>
              <div className='text-column'>
                <h3>Join the community!</h3>
                <h4>Make a profile, find a route, join the group.</h4>
                <p>Find out more about our Mission 
                <p><a className="button" href="/mission">here</a></p>
                </p>

              </div>
            </div>
            <div className='column'>
              <div className='image-column'>
                <img className="cyclegroup" src={require("../images/cyclegroup.png")} alt="cycleGroup" width="350" />
              </div>
            </div>
          </div>
        </div>
        <div className="reviewCard">
          <h2>What People are saying about us </h2>
          <div className='row'>
            <div className='column'>
              <div className='review1-column'>
                <h3>Kate E.  <img className="cyclegroup" src={require("../images/kate.png")} alt="kate" width="60" /></h3>
                <h4>"I made such great friends on Ramble"</h4>
                <p>⭐⭐⭐⭐⭐</p>

              </div>
            </div>
            <div className='column'>
              <div className='review2-column'>
              <h3>Jordan G.  <img className="cyclegroup" src={require("../images/jordan.png")} alt="kate" width="60" /></h3>
                <h4>"Ramble helped me find people to enjoy cycling with finally!"</h4>
                <p>⭐⭐⭐⭐⭐</p>
              </div>
            </div>
          </div>
        </div>
        
    </div>
   )
   
}