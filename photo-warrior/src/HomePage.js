
import React, { Component } from "react";
import { Switch, Route, NavLink } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
        
        <header className="App-header">
          <h1>WELCOME WARRIOR</h1>
          
          <nav className="Home-Nav">
                <NavLink to="/signup-page">Sign Up</NavLink>
                <NavLink to="/login-page">Log In</NavLink>
          </nav>    
        </header>

         );
  }
}

export default HomePage;