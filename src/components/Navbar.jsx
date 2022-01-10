import React from "react";

function Navbar(props) {
  return (
    <ul className="nav nav-pills">
      <li className="nav-item p-2 mr-auto">
        <a
          className="nav-link"
          href="#"
          onClick={() => {
            props.clickNewColor();
          }}
        >
          NEW COLORS
        </a>
      </li>
      <li className="nav-item">
        <a
          onClick={() => {
            props.changeModeEasy();
          }}
          className="nav-link easy"
          href="#"
        >
          EASY
        </a>
      </li>
      <li className="nav-item hard">
        <a
          onClick={() => {
            props.changeModeHard();
          }}
          className="nav-link"
          href="#"
        >
          HARD
        </a>
      </li>
    </ul>
  );
}

export default Navbar;
