import React, { Component } from "react";
import Dropzone from 'react-dropzone';
import request from 'superagent';
import axios from "axios";
// import { Link } from "react-router-dom";



const {
    REACT_APP_CLOUDINARY_UPLOAD_PRESET,
    REACT_APP_CLOUDINARY_UPLOAD_URL
} = process.env;

class DragAndDropZone extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uploadedFiles:[] 
    };
  }

  // React will call "componentDidMount()" automatically when PhoneList loads
  componentDidMount() {
    // retrieve the info from the API as soon as the component loads
    axios.get(
      "http://localhost:5555/api/phones",
      { withCredentials: true }, // FORCE axios to send cookies across domains
    )
      .then(response => {
        console.log("Phone List", response.data);
        // update our state array with the data from the API
        this.setState({ phoneArray: response.data });
      })
      .catch(err => {
        console.log("Phone List ERROR", err);
        alert("Sorry! Something went wrong.");
      });
  }

  onImageDrop(files, nope) {
    console.log("halp", files, nope)

    files.forEach((file, index) => {
      this.handleImageUpload(file, index);
    }); 
  }

  handleImageUpload(file, index) {
    let upload = request.post(REACT_APP_CLOUDINARY_UPLOAD_URL)
                     .field('upload_preset', REACT_APP_CLOUDINARY_UPLOAD_PRESET)
                     .field('file', file)
                     .field('folder', "photoWarrior");

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        const { uploadedFiles } = this.state;
        uploadedFiles[index] = {
          file,
          cloudinaryUrl: response.body.secure_url
        };
        this.setState({ uploadedFiles });
      }
    });
  }

  render() {
    return (
      <form>
        <div className="FileUpload">
          <Dropzone
            onDrop={this.onImageDrop.bind(this)}
            multiple={true}
            accept="image/*"
            >
            <div>DROP IMAGES HERE.</div>
          </Dropzone>
        </div>

        <div>
          {this.state.uploadedFiles.map(oneFile => {
            return oneFile.cloudinaryUrl === '' ? null :
              <div key={oneFile.cloudinaryUrl}>
                <p>{oneFile.file.name}</p>
                <img src={oneFile.cloudinaryUrl} />
              </div>
          })}
        </div>
      </form>
    )
  }
}

export default DragAndDropZone;       