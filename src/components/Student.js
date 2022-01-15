import React from "react";
import Score from "./Score";

function Student(props) {
  return (
    <div className="student-box">
      <h2 className="name">{props.name}</h2>
      <div className="bio">
        <h4>Bio:</h4>
        <p>{props.bio}</p>
      </div>
      <h4>Scores:</h4>
      <Score scores={props.scores} />
    </div>
  );
}

export default Student;
