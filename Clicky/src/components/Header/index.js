import React, { Component } from "react";
import "./header.css";

export default class Header extends Component {
  render() {
    return (
      <header className="header-sect">
        {/* <div className="container-fluid"> */}
        {/* <img alt="scooby" src="images/.jpg" /> */}
        <div className="dark-overlay">
          <div className="header-inner text-center container">
            <h1 class="display-4">Scooby Scooby Doo</h1>
            <p class="lead">If you like Scooby Doo Click here...but wait...</p>
          </div>
          {/* </div> */}
        </div>
      </header>
    );
  }
}
