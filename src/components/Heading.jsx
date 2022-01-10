import React from "react";

function Heading(props) {
  return (
    <div className="title-background">
      <h1 className="main-title">
        THE GREAT <br />
        {props.answer}
        <br />
        GUESSING GAME
      </h1>
    </div>
  );
}

export default Heading;
