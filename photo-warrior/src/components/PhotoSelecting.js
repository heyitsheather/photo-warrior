import React from "react";
import Gallery from "react-photo-gallery";
import axios from "axios";
import SelectedImage from "./SelectedImage";

const photos = [

  {
    src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
    width: 1,
    height: 1
  },
  {
    src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/PpOHJezOalU/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
    width: 4,
    height: 3
  }
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

  
  
  selectPhoto(event, obj) {
    let photos = this.state.photoArray;
    photos[obj.index].selected = !photos[obj.index].selected;
    this.setState({ photoArray: photos });
  }
  toggleSelect() {
    let photos = this.state.photoArray.map((photo, index) => {
      return { ...photo, selected: !this.state.selectAll };
    });
    this.setState({ photoArray: photos, selectAll: !this.state.selectAll });
  }
  render() {
    return (
      <div>
        {/* <p>
          <button className="toggle-select" onClick={this.toggleSelect}>
            toggle select all
          </button>
        </p> */}
        <h1>WHICH OF THESE PHOTOS SHOULD SURVIVE?</h1>
        <button>SUBMIT SELECTIONS AND CONTINUE TO NEXT BATCH</button>
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
