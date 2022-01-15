import React from "react";

function Score(props) {
  return (
    <div className="score-container">
      {props.scores.map((score) => {
            // <h4>Scores:</h4>
          <p>{score.date}: {score.score}</p>
        );
      })}
    </div>
  );
}

export default Score;
