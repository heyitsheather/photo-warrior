import React, { Component } from "react";

import "./App.css";
import SelectedImages from "./SelectedImages";
import DragAndDropZone from "./DragAndDrop";



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>WELCOME WARRIOR</h1>
          <button>SIGN UP</button>
          <button>LOG IN</button>
        </header>
        <DragAndDropZone/>
      </div>

      
      
    );
  }
}


export default App;
