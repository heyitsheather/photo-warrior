import React, {Component} from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
// import DragAndDropZone from './DragAndDrop';




class UserDashboard extends Component {
    

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
            <div class="App-header">

         <div class="buttons">
        
        <Link to="/">
      <button  onClick={() => this.logoutClick()}>LOG OUT</button>
      </Link>

      </div>
            <h1>WELCOME WARRIOR</h1>
            
            <Link to="/drag-and-drop">
            <button class="buttons">UPLOAD A NEW GALLERY</button>
            </Link>

            <h2>YOUR GALLERIES:</h2>


          <Link to="/prepare-for-battle">
            <div id="photoDisplay">
                {/* <img src="https://source.unsplash.com/epcsn8Ed8kY" alt="cute puppy" className="photos" id="samplePhoto1" /> */}
                <h3>PARIS GALLERY</h3>
                </div>
                </Link>

                {/* <Link to="/choose-photos">
            <div id="photoDisplay">
                {/* <img src="https://source.unsplash.com/epcsn8Ed8kY" alt="cute puppy" className="photos" id="samplePhoto1" /> */}
                {/* <h3>GALLERY NAME</h3>
                </div> */}
                {/* </Link> */} 

           
        
      </div>

                 



               
        );
    }
}
 
export default UserDashboard;