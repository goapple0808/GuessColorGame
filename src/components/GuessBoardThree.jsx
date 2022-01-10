import React, { useState } from "react";
import GuessResult from "./GuessResult";

function GuessBoardThree(props) {
  return !props.guessOrNot ? (
    <div className="guess-area">
      <div className="container">
        <div className="row">
          <button
            style={props.diffColors[0]}
            onClick={() => {
              props.matchAnswer(props.diffColors[0].backgroundColor);
            }}
            disabled={props.buttonDisable}
            className="col-lg-3 col-md-3 col-sm-3 col-3"
          ></button>
          <button
            style={props.diffColors[1]}
            onClick={() => {
              props.matchAnswer(props.diffColors[1].backgroundColor);
            }}
            disabled={props.buttonDisable}
            className="col-lg-3 col-md-3 col-sm-3 col-3"
          ></button>
          <button
            style={props.diffColors[2]}
            onClick={() => {
              props.matchAnswer(props.diffColors[2].backgroundColor);
            }}
            disabled={props.buttonDisable}
            className="col-lg-3 col-md-3 col-sm-3 col-3"
          ></button>
        </div>
      </div>
    </div>
  ) : (
    <GuessResult
      matchOrNot={props.matchOrNot}
      resultAnime={props.resultAnime}
    />
  );
}

export default GuessBoardThree;
