import React, { Component } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import LoginPage from "./LoginPage";

class HomePage extends Component {
  render() {
    return (
    <header className="App-header">
    <section class="container">
    <div class= "columns">
      <div class="left-column">
        <h1 class="title">A photo culling app for photographers</h1>
        <h2 class= "subtitle">Awaken the inner warrior and slay your galleries.
        Photo culling has never easier.
        </h2>
        <div class="buttons-grouped"> 
        <div class="control">
        <a class="button is-primary is-medium" href="/signup-page">Sign Up?</a> 
           </div> 
        <div class="control">
        <a class="button is-light is-medium" href="/login-page">Login</a>
           </div> 
           </div>
           </div>
      {/* <hr class="spacer is-1-5"/> */}
      <div class= "right-column">
        <img src="images/pwlogo.png" alt="logo"/>   
        </div>
 
        {/* <LoginPage currentUser={this.props.currentUser}
                onUserChange={this.props.onUserChange} />
        <p><NavLink to="/signup-page">Not a warrior yet?  SIGN UP.</NavLink></p> */}
      </div>
      </section>   
      </header>
    );
  }
}

export default HomePage;



