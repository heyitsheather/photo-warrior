import React, {Component} from 'react';
import {Redirect} from "react-router-dom";



// class PhotoUploads extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             model: "",
//             brand: "",
//             price: "",
//             image: "",
//             specs: ["","","",],
//             isSubmitSuccessful: false,
//         };
//     }

//     genericSync(event) {
//         const {name, value} = event.target;
//         this.setState({ [name]: value});
//     }

//     syncSpecs(event, index) {
//         const {specs} = this.state;

//         specs[index] = event.target.value;

//         this.setState({specs});
//     }
//    handleSubmit(event) {
//        event.preventDefault();


//        axios.post("http://localhost:5555/api/phones", this.state)
//        .then(response =>{
//            console.log("Add Phone", response.data);
//            this.setState({ isSubmitSuccessful: true});
//        })
//        .catch(err=>{
//            console.log("Add Phone ERROR", err);
//            alert("Sorry! Something went wrong.");
//        });
//    }
//     render() { 
//         if (this.state.isSubmitSuccessful) {
//             return <Redirect to="/phone-list" />
//         }
//         return ( 
//             <section className="AddPhone">
//             <h2>Add a Phone</h2>

//             <form onSubmit={event => this.handleSubmit(event)} >
//                 <label>
//                     Model: <input value={this.state.model}
//                     onChange={event => this.genericSync(event)}
//                      type="text" name="model" placeholder="iphone Xs" />
//                 </label>
//                 <label>
//                     Brand: <input value={this.state.model}
//                     onChange={event => this.genericSync(event)}
//                      type="text" name="brand" placeholder="apple" />
//                 </label>
//                 <label>
//                     Price: <input value={this.state.model}
//                     onChange={event => this.genericSync(event)}
//                      type="text" name="price" placeholder="999" />
//                 </label>
//                 <label>
//                     Image URL: <input value={this.state.model}
//                     onChange={event => this.genericSync(event)}
//                      type="url" name="image" placeholder="http://example.com" />
//                 </label>

               
//                     <h3>Specs:</h3>
//                     <p>3 Characters or more.</p>
//                     {this.state.specs.map((oneSpec, index)=>{
//                         return (
//                             <input key={index} type="text" value={oneSpec}
//                             onChange={event => this.syncSpecs(event, index)}/>
                        
//                         );
                        
//                     })} 

//                 <button>Save This Phone</button>
//             </form>
//             </section>
//          );
//     }
// }
 
// export default PhotoUploads;