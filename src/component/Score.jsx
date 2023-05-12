import React from "react";
import "./score.css";

function Score({ scoreDate, scoreValue }) {
  return (
    <div className="scoreContainer">
      <div>
        <span className="Orange">Date: </span> {scoreDate}{" "}
        <span className="Orange">Value: </span> {scoreValue}
      </div>
    </div>
  );
}

export default Score;
