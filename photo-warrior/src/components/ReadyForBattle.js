import React, {Component} from 'react';
import { Link } from "react-router-dom";


class ReadyForBattle extends Component {
    
    render() { 
        return ( 
            <div class="App-header">
                {/* <h1>GALLERY NAME</h1> */}
                <h1>READY FOR BATTLE?</h1>
                <div class="buttons-grouped">
                <Link to="/drag-and-drop"><button class="buttons">UPLOAD A NEW GALLERY </button></Link>
                <div class="control"></div>
                <Link to="/choose-photos"><button class="buttons">BRING IT ON</button></Link>
                </div>
            
            
            
            </div>
         );
    }
}
 
export default ReadyForBattle;