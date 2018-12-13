import React, {Component} from 'react';
import { Link } from "react-router-dom";
import DragAndDropZone from './DragAndDrop';




class UserDashboard extends Component {

    render() { 
        return ( 
            <div>
        
            <h1>WELCOME WARRIOR</h1>
            <button>LOGOUT</button>
            
            <button>
            <Link to="/drag-and-drop">UPLOAD A NEW GALLERY</Link>
            </button>

            <h2>YOUR GALLERIES:</h2>


          <Link to="/prepare-for-battle">
            <div id="photoDisplay">
                {/* <img src="https://source.unsplash.com/epcsn8Ed8kY" alt="cute puppy" className="photos" id="samplePhoto1" /> */}
                <h3>GALLERY NAME</h3>
                </div>
                </Link>

                <Link to="/choose-photos">
            <div id="photoDisplay">
                {/* <img src="https://source.unsplash.com/epcsn8Ed8kY" alt="cute puppy" className="photos" id="samplePhoto1" /> */}
                <h3>GALLERY NAME</h3>
                </div>
                </Link>

           
        
      </div>

                 



               
        );
    }
}
 
export default UserDashboard;