
import React, { Component } from 'react';
import { Switch, Route, NavLink } from "react-router-dom";
import axios from "axios";

import './App.css';
import HomePage from "./HomePage";
import NotFound from "./components/NotFound.js";
import SignupPage from './components/SignupPage.js';
import LoginPage from "./components/LoginPage.js";
// import SelectedImages from "./SelectedImages";
import DragAndDropZone from "./components/DragAndDrop";





class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    // React doesn't know at the start if we are logged-in or not
    // (but we can ask the server if we are through an API request)
    axios.get(
      "http://localhost:5555/api/checkuser",
      { withCredentials: true }, // FORCE axios to send cookies across domains
    )
    .then(response => {
      console.log("Check User", response.data);
      const { userDoc } = response.data;
      this.syncCurrentUser(userDoc);
    })
    .catch(err => {
      console.log("Check User ERROR", err);
      alert("Sorry! Something went wrong.");
    });
  }

  // this is the method for updating "currentUser"
  // (must be defined in App.js since it's the owner of "currentUser" now)
  syncCurrentUser(userDoc) {
    this.setState({ currentUser: userDoc });
  }

  logoutClick() {
    axios.delete(
      "http://localhost:5555/api/logout",
      { withCredentials: true }, // FORCE axios to send cookies across domains
    )
    .then(() => {
      // make "currentUser" empty again (like it was at the start)
      this.syncCurrentUser(null);
    })
    .catch(err => {
      console.log("Logout ERROR", err);
      alert("Sorry! Something went wrong.");
    });
  }

  render() {
    return (
      <div className="App">
        

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/drag-and-drop" component={DragAndDropZone} />
          {/* <Route path="/phone-details/:phoneId" component={PhoneDetails} /> */}
          {/* <Route path="/add-phone" component={AddPhone} /> */}
          <Route path="/signup-page" render={() =>
          <SignupPage currentUser={this.state.currentUser}
                onUserChange={userDoc => this.syncCurrentUser(userDoc)} />
          } /> 
          <Route path="/login-page" render={() =>
            <LoginPage currentUser={this.state.currentUser}
                onUserChange={userDoc => this.syncCurrentUser(userDoc)} />
          } /> 

          {/* 404 route LAST */}
          <Route component={NotFound} />
        </Switch>

        
      </div>

      
        
     
    );
  }
}

export default App;
