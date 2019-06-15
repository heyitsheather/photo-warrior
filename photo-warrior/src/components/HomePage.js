import React, { Component } from "react";
import GlitchEffect from 'react-glitch-effect';
import { Switch, Route, NavLink } from "react-router-dom";
import LoginPage from "./LoginPage";


class HomePage extends Component {
  render() {
    return (
    <header className="App-header">
    <section class="container">
    <div class= "columns">
      <div class="left-column">
     
        <img src="images/glitchtitle.gif" alt="warrior"/>
       
        <h2 class= "subtitle">Awaken the inner warrior and slay your galleries.
        Photo culling has never easier.
        </h2>
        <div class="button-group" > 
        
        <div >
       
        <a href="/login-page"><button class="buttons">LOG IN </button></a>
           </div> 
        <div class="control">
      
        <a href="/signup-page"><button class="buttons">SIGN UP </button></a>
       
      </div> 
           </div>
           </div>
      {/* <hr class="spacer is-1-5"/> */}
      <div class= "right-column">
      < GlitchEffect onHover={true}>
        <img src="images/pwlogowhite.png" alt="logo"/>  
        </GlitchEffect> 
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



