import React, {Component} from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import { Nav, NavItem } from "react-materialize";
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

          
            <div className="dashboard"> 
              <nav className>
                <div className="container">
                  <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li> 
                    <Link to="/" onClick={() => this.logoutClick()}>LOG OUT
      </Link> 
      </li>
                    <li> 
                    <Link to="/drag-and-drop"> 
            UPLOAD A NEW GALLERY
            </Link>
             </li>
                  </ul>
                  </div>
                  </nav>
                  
              
        
         {/* <Link to="/">
      <button onClick={() => this.logoutClick()}>LOG OUT</button>
      </Link> */}
     
      {/* <Link to="/drag-and-drop"> 
            <button>UPLOAD A NEW GALLERY</button> 
            </Link> */}
            


     
            <h1>WELCOME WARRIOR</h1>
            
            {/* <Link to="/drag-and-drop">
            <button class="buttons">UPLOAD A NEW GALLERY</button>
            </Link> */}

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