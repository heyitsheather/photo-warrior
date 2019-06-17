import React, { Component } from "react";
// import GlitchEffect from 'react-glitch-effect';
// import { Switch, Route, NavLink } from "react-router-dom";
// import LoginPage from "./LoginPage";


class HomePage extends Component {
  render() {
    return (
    <header className="App-header">

      <div class="landing" >
    
        <img class="warrior" src="images/whitelogo.png" alt="warrior"/>
        </div>

        <div class="button-group" > 
        <div >
        <a href="/login-page"><button class="buttons">LOG IN </button></a>
           </div> 

        <div class="control"/>
        <a href="/signup-page"><button class="buttons">SIGN UP </button></a>
      
      </div>
      </header>
    );
  }
}

export default HomePage;



