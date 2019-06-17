import React, {Component} from 'react';
import { Link } from "react-router-dom";
// import DragAndDropZone from './DragAndDrop';




class UserDashboard extends Component {

    render() { 
        return ( 
            <div class="App-header">
         <button>LOGOUT</button>
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