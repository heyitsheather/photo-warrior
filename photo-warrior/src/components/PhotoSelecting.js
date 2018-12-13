import React from "react";
import Gallery from "react-photo-gallery";
import axios from "axios";
import SelectedImage from "./SelectedImage";

const photos = [

  
];

class SelectingGallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectAll: false ,
      // initial array is empty while we are waiting for the API results
      photoArray: [],
    };
    this.selectPhoto = this.selectPhoto.bind(this);
    this.toggleSelect = this.toggleSelect.bind(this);
  }
    componentDidMount() {
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

    submitSelectedPhoto(){
console.log ( this.state)
    }
  
  selectPhoto(event, obj) {
    let photos = this.state.photoArray;
    photos[obj.index].selected = !photos[obj.index].selected;
    console.log ("zzzzzzzzzzzzzzzzzzzzzzzž", this.state)
    this.setState({ photoArray: photos });
    
  }
  toggleSelect() {
    let photos = this.state.photoArray.map((photo, index) => {
      return { ...photo, selected: !this.state.selectAll };
    });
    this.setState({ photoArray: photos, selectAll: !this.state.selectAll });
  }
  render() {
    console.log (this.state)
    return (
      <div>
        {/* <p>
          <button className="toggle-select" onClick={this.toggleSelect}>
            toggle select all
          </button>
        </p> */}
        <h1>WHICH OF THESE PHOTOS SHOULD SURVIVE?</h1>
        <button onSubmit={() => this.submitSelectedPhoto(
          
          )}>SUBMIT SELECTIONS AND CONTINUE TO NEXT BATCH</button>
        <Gallery
          photos={this.state.photoArray}
          onClick={this.selectPhoto}
          ImageComponent={SelectedImage}
          direction={"column"}
        />
        
      </div>
    );
  }
}
export default SelectingGallery;
