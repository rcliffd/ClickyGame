import React from "react";
import "./nav.css";

function Nav(props) {
  return (
    <nav id="nav-sect">
      <div className="container py-3">
        <div className="row">
          <div className="col-md-4 text-center text-md-left">
            <h3 className="brand">ScoobyDoo</h3>
          </div>
          {/* Create an if/else/ternery statement to display the correst message */}
          {props.success ? (
            <div
              className="col-md-4 text-center"
              // style={{ props.alert }}
            >
              <h3> Correct </h3>
            </div>
          ) : (
            <div
              className="col-md-4 text-center"
              // style={{ props.success }}
            >
              <h3> Incorrectly </h3>
            </div>
          )}
          <div className="col-md-4 text-center text-md-right">
            <h3>
              Score: {props.score} | High Score: {props.highScore}
            </h3>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
