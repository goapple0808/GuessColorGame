import React from "react";
import GuessResult from "./GuessResult";

function GuessBoardSix(props) {
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
            className="col-lg-3 col-md-3 col-sm-3 col-3 one"
          ></button>
          <button
            style={props.diffColors[1]}
            onClick={() => {
              props.matchAnswer(props.diffColors[1].backgroundColor);
            }}
            disabled={props.buttonDisable}
            className="col-lg-3 col-md-3 col-sm-3 col-3 two"
          ></button>
          <button
            style={props.diffColors[2]}
            onClick={() => {
              props.matchAnswer(props.diffColors[2].backgroundColor);
            }}
            disabled={props.buttonDisable}
            className="col-lg-3 col-md-3 col-sm-3 col-3 three"
          ></button>
        </div>
        <div className="row">
          <button
            style={props.diffColors[3]}
            onClick={() => {
              props.matchAnswer(props.diffColors[3].backgroundColor);
            }}
            disabled={props.buttonDisable}
            className="col-lg-3 col-md-3 col-sm-3 col-3 four"
          ></button>
          <button
            style={props.diffColors[4]}
            onClick={() => {
              props.matchAnswer(props.diffColors[4].backgroundColor);
            }}
            disabled={props.buttonDisable}
            className="col-lg-3 col-md-3 col-sm-3 col-3 five"
          ></button>
          <button
            style={props.diffColors[5]}
            onClick={() => {
              props.matchAnswer(props.diffColors[5].backgroundColor);
            }}
            disabled={props.buttonDisable}
            className="col-lg-3 col-md-3 col-sm-3 col-3 six"
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

export default GuessBoardSix;
