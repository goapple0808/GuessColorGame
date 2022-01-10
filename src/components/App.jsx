import React, { useState } from "react";
import Heading from "./Heading";
import Navbar from "./Navbar";
import GuessBoardSix from "./GuessBoardSix";
import GuessBoardThree from "./GuessBoardThree";
let randomSix = [];
let red, green, blue;
let targetColorForSix = "";
let targetColorForThree = "";
function zeroTo255() {
  red = Math.floor(Math.random() * 256);
  green = Math.floor(Math.random() * 256);
  blue = Math.floor(Math.random() * 256);
}
function createRandomColor(red, green, blue) {
  let rgbFrontPart = "rgb(";
  let rgbBehindPart = ")";
  let completeColor =
    rgbFrontPart +
    red.toString() +
    "," +
    green.toString() +
    "," +
    blue.toString() +
    rgbBehindPart;
  return completeColor;
}
function chooseTargetForSix() {
  return Math.floor(Math.random() * 6);
}

function chooseTargetForThree() {
  return Math.floor(Math.random() * 3);
}
function createRandonSix() {
  randomSix = [];
  let targetIdx = chooseTargetForSix();
  for (let i = 0; i < 6; i++) {
    zeroTo255();
    if (i === targetIdx) {
      targetColorForSix = createRandomColor(red, green, blue);
    }
    randomSix.push({ backgroundColor: createRandomColor(red, green, blue) });
  }
}
function createRandonThree() {
  randomSix = [];
  let targetIdx = chooseTargetForThree();
  for (let i = 0; i < 3; i++) {
    zeroTo255();
    if (i === targetIdx) {
      targetColorForThree = createRandomColor(red, green, blue);
    }
    randomSix.push({ backgroundColor: createRandomColor(red, green, blue) });
  }
}
function App() {
  let [hardMode, setHardMode] = useState(true);
  let [sixDiffernetColor, setSixDiffColors] = useState([]);
  let [threeDifferentColor, setThreeDiffDolors] = useState([]);
  let [titleColor, setTitleColor] = useState("");
  let [matchOrNot, setMatchOrNot] = useState(false);
  let [haveGuessOrNot, setHaveGuessOrNot] = useState(false);
  let [buttonDisable, setButtonDisable] = useState(true);
  let [resultAnime, setResultAnime] = useState("");
  function clickHard() {
    setHardMode(true);
    setTitleColor(targetColorForSix);
    setButtonDisable(false);
  }
  function clickEasy() {
    setHardMode(false);
    setTitleColor(targetColorForThree);
    setButtonDisable(false);
  }
  function clickNewColor() {
    createRandonSix();
    setSixDiffColors(randomSix);
    createRandonThree();
    setThreeDiffDolors(randomSix);
    setMatchOrNot(false);
    setHaveGuessOrNot(false);
    setTitleColor("");
    setButtonDisable(true);
  }
  function matchColor(ourColor) {
    if (ourColor === titleColor) {
      setMatchOrNot(true);
      setResultAnime("guess-area-right");
      console.log("You guess the right color");
    } else if (ourColor !== titleColor) {
      setMatchOrNot(false);
      setResultAnime("guess-area-wrong");
      console.log("Too bad! Next time hope you sucess ❤");
    }
    setHaveGuessOrNot(true);
  }

  return (
    <div>
      <Heading answer={titleColor} hardOrNot={hardMode} />
      <Navbar
        changeModeHard={clickHard}
        changeModeEasy={clickEasy}
        clickNewColor={clickNewColor}
      />
      {hardMode ? (
        <GuessBoardSix
          guessOrNot={haveGuessOrNot}
          matchOrNot={matchOrNot}
          matchAnswer={matchColor}
          diffColors={sixDiffernetColor}
          buttonDisable={buttonDisable}
          resultAnime={resultAnime}
        />
      ) : (
        <GuessBoardThree
          guessOrNot={haveGuessOrNot}
          matchAnswer={matchColor}
          matchOrNot={matchOrNot}
          diffColors={threeDifferentColor}
          buttonDisable={buttonDisable}
          resultAnime={resultAnime}
        />
      )}
    </div>
  );
}

export default App;
