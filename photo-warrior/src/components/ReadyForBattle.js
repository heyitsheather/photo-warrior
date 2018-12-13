import React, {Component} from 'react';
import { Link } from "react-router-dom";


class ReadyForBattle extends Component {
    
    render() { 
        return ( 
            <div>
                <h1>GALLERY NAME</h1>
                <h1>READY FOR BATTLE?</h1>
                <button>
                <Link to="/drag-and-drop">UPLOAD A NEW GALLERY</Link>
                </button>
                <button>
                <Link to="/choose-photos">BRING IT ON</Link>
                </button>
            
            
            
            </div>
         );
    }
}
 
export default ReadyForBattle;