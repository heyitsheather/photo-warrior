import React, { Component } from "react";


class NotFound extends Component {
  render() {
    return (
      <section className="App-header">

        <img class="fail-warrior" src="/images/pwfailwhite.png"/>
        <h2>404 NOT FOUND</h2>

        <p>Sorry, the page you are looking for doesn't exist.</p>
        
      </section>
    );
  }
}

export default NotFound;