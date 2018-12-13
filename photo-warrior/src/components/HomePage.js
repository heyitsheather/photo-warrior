import React, { Component } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import LoginPage from "./LoginPage";

class HomePage extends Component {
  render() {
    return (
      <header className="App-header">
        <h1>PHOTO WARRIOR</h1>
        <LoginPage />
        <p><NavLink to="/signup-page">Not a warrior yet?  SIGN UP.</NavLink></p>
          
      </header>
    );
  }
}

export default HomePage;
