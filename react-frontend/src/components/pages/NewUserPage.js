import { Page } from "./Page.js";
import React from "react";
import "../../App.css";
import { useNavigate } from "react-router-dom";

export const NewUserPage = () => {
  const navigate = useNavigate();
  // const navigateToLogin = () => {
  //   // 👇️ navigate to do the login
  //   navigate("/session/new");
  // };

  const whenSubmit = (event) => {
    console.log("First Name");
    event.preventDefault();
    
    const firstName = event.target.firstName;
    const lastName = event.target.lastName;
    const email = event.target.email;
    const password = event.target.password;
    fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.message === "User was registered successfully!") {
          window.alert("You have successfully signed up!");
          navigate("/session/new");
        } else {
          window.alert(json.message)
        }
      })
      .catch((error) => {
        console.error("Error", error);
      });
    console.log("Form was submitted");
  };

  return (
    <div>
      <Page />
      <div>
        <form onSubmit={whenSubmit}>
          <h2>Please Sign Up here!</h2>
          <input name="firstName" placeholder="Write your first name" />
          <input name="lastName" placeholder="Write your last name" />
          <input name="email" type="email" placeholder="example@mail.com" />
          <input
            name="password"
            type="password"
            placeholder="Write your password"
          />
          <input className="button" type="Submit" value="Sign up" />
        </form>
      </div>
    </div>
  );
};
