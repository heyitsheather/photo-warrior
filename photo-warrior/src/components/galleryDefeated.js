import React from 'react';
// import { render } from 'react-dom';
import DownloadLink from "react-download-link";
// import Axios from 'axios';

const element = document.createElement('div');
document.body.appendChild(element);

class Downloader extends React.Component {
  render() {

    return (
      <div class="App">
       
          <h1>CONGRATULATIONS!</h1>
          <h1>YOU HAVE DEFEATED THE GALLERY!</h1>
         

      
          <DownloadLink
            filename="myfile.txt"
            exportFile={() => Promise.resolve("My cached data")}>
            Save to disk
          </DownloadLink>
          </div>
    
    );
  }
}

export default Downloader;