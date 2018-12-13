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
                     .field('folder', "user-" + this.props.currentUser.email);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        console.log("cloudinary----------", response.body)

        axios.post(
          process.env.REACT_APP_SERVER_URL + "/api/photos",
          { url: response.body.secure_url, width: response.body.width, height: response.body.height },
          { withCredentials: true }
        )
        .then(() => {
          const { uploadedFiles } = this.state;
          uploadedFiles[index] = {
            file,
            cloudinaryUrl: response.body.secure_url
          };
          this.setState({ uploadedFiles });
        })
        .catch(err => {
          console.log("Upload Image ERROR", err);
          alert("Sorry! Photos did not upload.");
        })};
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
            <div>DROP IMAGES HERE<br/>
            OR<br/>
            CLICK TO UPLOAD</div>
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