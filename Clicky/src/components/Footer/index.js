import React, { Component } from "react";
import "./footer.css";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="bottom d-flex align-items-center">
          <span className="pr-2">Scooby Scooby Doo </span>
          <img alt="react" src="images/react.svg"></img>
        </div>
      </footer>
    );
  }
}
