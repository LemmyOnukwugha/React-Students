import React from "react";
import Score from "./Score";
import "./student.css";

function Student({ student, key }) {
  return (
    <div className="studentContainer" key={key + " student"}>
      <h4>Student {student.name}</h4>
      <div>
        <span className="Orange">Bio: </span> {student.bio}
      </div>
      <h4>Score</h4>
      {student.scores.map((score, idx) => {
        return <Score scoreDate={score.date} scoreValue={score.score} />;
      })}
      <hr />
    </div>
  );
}
export default Student;
