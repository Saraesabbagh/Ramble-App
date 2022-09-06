import { Page } from "./Page.js";
import React from "react";
import "../../App.css";
import { useNavigate } from "react-router-dom";

export const NewSessionPage = () => {
    const navigate = useNavigate();

  const whenSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email;
    const password = event.target.password;
    

    fetch("/api/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email.value, password: password.value }),
    })
      .then((response) => {
        console.log(response);
        if(response.message === "Signin Succcesful!") {
        window.alert("Welcome to Ramble!");
        localStorage.setItem("session",response.user);
        console.log(localStorage.session);
        navigate("/home");
    } else {
        window.alert(response.message)
    }} )
      
        
      .catch((error) => {
        console.error("Error", error);
      });
  };
  return (
    <div>
      <Page />
      <form onSubmit={whenSubmit}>
        <h2>LOGIN</h2>
        <input name="email" type="email" placeholder="example@mail.com" />
        <input name="password" type="password" placeholder="Password" />
        <input

          className="button"
          type="submit"
          value="Log in"
        />
      </form>
    </div>
  );
};
