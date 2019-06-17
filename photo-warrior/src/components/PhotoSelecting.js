import React from "react";
import Gallery from "react-photo-gallery";
import axios from "axios";
import SelectedImage from "./SelectedImage";
import Downloader from "./galleryDefeated";
import {Redirect} from "react-router-dom";


class SelectingGallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectAll: false ,
      photoArray: null,
    };
    this.selectPhoto = this.selectPhoto.bind(this);
    this.toggleSelect = this.toggleSelect.bind(this);
  }
    componentDidMount() {
      this.getNext6();
    }

    getNext6() {
      axios.get(
        process.env.REACT_APP_SERVER_URL + "/api/photos",
        { withCredentials: true }, // FORCE axios to send cookies across domains
      )
        .then(response => {
          console.log("Photo List", response.data);
  
          const photoArray = response.data.map ((onePhoto)=>{
            return{
              src: onePhoto.url, 
              width: onePhoto.width, 
              height: onePhoto.height,
              _id: onePhoto._id,
            }
          }
            )
          // update our state array with the data from the API
          this.setState({ photoArray: photoArray });
        })
        .catch(err => {
          console.log("Photo List ERROR", err);
          alert("Sorry! Something went wrong.");
        });
    }

  
  
  selectPhoto(event, obj) {
    let photos = this.state.photoArray;
    photos[obj.index].selected = !photos[obj.index].selected;
    this.setState({ photoArray: obj });
    console.log (this.state)
  }

  toggleSelect() {
    let photos = this.state.photoArray.map((photo, index) => {
      return { ...photo, selected: !this.state.selectAll };
    });
    this.setState({ photoArray: photos, selectAll: !this.state.selectAll });
  }

  submitSelected() {
    const selectedIds = [];
    const seenIds = [];

    let photos = this.state.photoArray;
    photos.forEach(onePhoto => {
      if (onePhoto.selected) {
        selectedIds.push(onePhoto._id);
      }
      else {
        seenIds.push(onePhoto._id);
      }
    });

    console.log("submitting!!", { selectedIds, seenIds });
    axios.put(
      process.env.REACT_APP_SERVER_URL + "/api/photos",
      { selectedIds, seenIds },
      { withCredentials: true }, // FORCE axios to send cookies across domains
    )
    .then(response => {
      alert("Submission successful!");
      this.getNext6();
    })
    .catch(err => {
      console.log("Photo SUBMIT ERROR", err);
      alert("Sorry! Something went wrong.");
    });
  }

  showGallery() {
    const { photoArray } = this.state;

    if (!photoArray) {
      return (<h1>Loading...</h1>)
    }
    else if (photoArray.length === 0) {
      return (
        <div>
          <Redirect to="/gallery-defeated"/>
          
        </div>
      );
    }
    else {
      return (
        <Gallery
          photos={photoArray}
          onClick={this.selectPhoto}
          ImageComponent={SelectedImage}
          direction={"row"}
        />
      );
    }
  }

  render() {
    console.log (this.state)
    function columns(containerWidth) {
      let columns = 1;
      if (containerWidth >= 500) columns = 2;
      if (containerWidth >= 900) columns = 3;
      if (containerWidth >= 1500) columns = 4;
      return columns;
    }
    
    return (
      <div class="App-header">
        <h1>WHICH OF THESE PHOTOS SHOULD SURVIVE?</h1>
        <button class="buttons" onClick={() => this.submitSelected()}>SUBMIT SELECTIONS AND CONTINUE TO NEXT BATCH</button>

        {this.showGallery()}
        
      </div>
    );
  }
}
export default SelectingGallery;
