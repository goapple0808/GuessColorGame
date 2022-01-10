import React from "react";

function GuessResult(props) {
  console.log(props.resultAnime);
  return props.matchOrNot ? (
    <div className={props.resultAnime}>
      <p>Great job! You Guess the right color✅</p>
      <p>You have guess the color click new color to try again</p>
    </div>
  ) : (
    <div className={props.resultAnime}>
      <p>Too bad! Next time hope you success💪</p>
      <p>You have guess the color click new color to try again</p>
    </div>
  );
}

export default GuessResult;
