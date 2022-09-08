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
    fetch("https://jsonplaceholder.typicode.com/todos/") //https://jsonplaceholder.typicode.com/todos/ ///api/all_routes
      .then((response) => response.json())
      .then((json) => setJourneys(json))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // Navigate to a page to create new journey
  const navigate = useNavigate();

  const navigateToNewJourney = () => {
    navigate("/journey/new");
  };

  //Add information about participants into the database
  // const whenSubmit = (event) => {
  //   event.preventDefault();
  //   // const userId = props.user._id
  //   // const journeyId = journey._id

  // fetch("/api/addParticipant", { // add url to post participants into database
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({userId: userId.value, journeyId: journeyId.value}) //send journey_id and partipant_id
  //   })
  //   .then((response) => (response.json()))
  //   .then((data) => {
  //     console.log(data);
  //     if(data.message === "You joined") {
  //       window.alert("You joined!");
  //       navigate('/home')
  //     } else {
  //     window.alert(data.message)
  //   }} )
  //   .catch((error) => {
  //     console.error("Error", error);
  //   });
  // };
  return (
    <div>
      <Page />

      <div className="homeHero">
        <div className="homeHeroTextBox">
          <h1>Hi {props.user.firstName}!</h1>
          <h2>What would you like to do today?</h2>
          <button onClick={navigateToNewJourney} className="button">
            ADD NEW JOURNEY
          </button>
        </div>
      </div>

      {journeys.map((journey) => {
        return (
          <div className="homeList">
            <div className="row">
              {/* image card */}
              <div className="column">
                <div className="map-column">
                  <img
                    className="cyclegroup"
                    src={require("../images/samplemap.png")}
                    alt="map"
                    width="250"
                  />
                </div>
              </div>

              {/* description and button card */}
              <div className="column">
                <div className="map-column">
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      const userId = props.user._id;

                      fetch("/api/addParticipant", {
                        // add url to post participants into database
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                          userId: userId,
                          journeyId: journey._id,
                        }), //send journey_id and partipant_id
                      })
                        .then((response) => response.json())
                        .then((data) => {
                          console.log(data);
                          if (data.message === "Participant added!") {
                            window.alert("You joined!");
                            navigate("/home");
                          } else {
                            window.alert(data.message);
                          }
                        })
                        .catch((error) => {
                          console.error("Error", error);
                        });
                    }}
                    className="button"
                  >
                    Join now!
                  </button>
                  <p>{journey.description}</p>
                </div>
              </div>

              {/* text card */}
              <div className="column">
                <div className="text-column">
                  <h3>{journey.title}</h3>
                  <p>{journey.discipline}</p>
                  <p>Date and Time: {journey.startTime}</p>
                  <p>Start location:{journey.startPoint} </p>
                  <p>End location: {journey.endPoint}</p>
                  <p>Number of participants: {journey.participants.length}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
