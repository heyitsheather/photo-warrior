
import React, { Component } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import './App.css';
import HomePage from "./components/HomePage";
import NotFound from "./components/NotFound.js";
import SignupPage from './components/SignupPage.js';
import LoginPage from "./components/LoginPage.js";
// import SelectedImages from "./components/SelectedImages";
import DragAndDropZone from "./components/DragAndDrop";
import SelectingGallery from "./components/PhotoSelecting";
import UserDashboard from './components/UserDashboard';
import ReadyForBattle from './components/ReadyForBattle';
import ExportPhotos from './components/exportphotos';
import Downloader from './components/galleryDefeated';
import 'materialize-css/dist/css/materialize.min.css';






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
      process.env.REACT_APP_SERVER_URL + "/api/checkuser",
      { withCredentials: true }, // FORCE axios to send cookies across domains
    )
    .then(response => {
      console.log("Check User", response.data);
      const { userDoc } = response.data;
      this.syncCurrentUser(userDoc);
    })
    .catch(err => {
      console.log("Check User ERROR", err);
      // alert("Sorry! Something went wrong.");
    });
  }

  // this is the method for updating "currentUser"
  // (must be defined in App.js since it's the owner of "currentUser" now)
  syncCurrentUser(userDoc) {
    this.setState({ currentUser: userDoc });
  }

  logoutClick() {
    axios.delete(
      process.env.REACT_APP_SERVER_URL + "/api/logout",
      { withCredentials: true }, // FORCE axios to send cookies across domains
    )
    .then(() => {
      // make "currentUser" empty again (like it was at the start)
      this.syncCurrentUser(null);
    })
    .catch(err => {
      console.log("Logout ERROR", err);
      // alert("Sorry! Something went wrong.");
    });
  }

  render() {
    return (
      <div className="App">
       
        <Switch>
          <Route exact path="/" render={() =>
            <HomePage currentUser={this.state.currentUser}
              onUserChange={userDoc => this.syncCurrentUser(userDoc)} />
          } />
          <Route path="/drag-and-drop" render={()=>{
            return <DragAndDropZone currentUser={this.state.currentUser} />
          }} />
          <Route path="/choose-photos" component={SelectingGallery} />
          <Route path="/user-dashboard" component={UserDashboard} />
          <Route path="/prepare-for-battle" component={ReadyForBattle} />
          <Route path="/export-photos" component={ExportPhotos} />
          <Route path="/gallery-defeated" component={Downloader} />
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
