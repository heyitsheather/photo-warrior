import React, { Component } from "react";
import GlitchEffect from 'react-glitch-effect';
// import { Switch, Route, NavLink } from "react-router-dom";
// import LoginPage from "./LoginPage";


class HomePage extends Component {
  render() {
    return (
    <header className="App-header">
    <section class="container">
    <div class= "columns">
      <div class="left-column">
     
        <img class="title" src="images/photowarriorname.png" alt="warrior"/>
       
        <h2 class= "subtitle">Awaken the inner warrior and slay your galleries.
        Photo culling has never been easier.
        </h2>
        <div class="button-group" > 
        
        <div >
        < GlitchEffect onHover={true}>
        <a href="/login-page"><button class="buttons">LOG IN </button></a>
        </ GlitchEffect>
           </div> 

        <div class="control">

        < GlitchEffect onHover={true}>
        <a href="/signup-page"><button class="buttons">SIGN UP </button></a>
        </ GlitchEffect>

      </div> 
           </div>
           </div>
      {/* <hr class="spacer is-1-5"/> */}
      <div class= "right-column">
      
        <img class="warrior" src="images/pwlogowhite.png" alt="logo"/>  
       
        </div>
 
        {/* {/* <LoginPage currentUser={this.props.currentUser}
                onUserChange={this.props.onUserChange} /> */}
        {/* <p><NavLink to="/signup-page">Not a warrior yet?  SIGN UP.</NavLink></p> */}
      </div>
      </section>  
      
      </header>
    );
  }
}

export default HomePage;



