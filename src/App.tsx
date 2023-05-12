import "./App.scss";

import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Neck from "../components/Neck";
const notes = ["e", "f", "f#", "g", "g#", "a", "a#", "b", "c", "c#", "d", "d#"];
function App() {
  const [isRightAnswer, setIsRightAnswer] = useState(false);
  const [roundScore, setRoundScore] = useState(0);
  const [numStringsSelected, setNumStringsSelected] = useState(0);
  const [randNote, setRandNote] = useState("");
  const [stringsClicked, setStringsClicked] = useState(
    new Array(6).fill(false)
  );

  const generateRandNote = (): void => {
    const randomNote = notes[Math.floor(Math.random() * notes.length)];
    setRandNote(randomNote);
  };
  useEffect(() => {
    generateRandNote();
  }, []);
  const handleClick = (name: string, string: number, e: any) => {
    // prevent a clicked string from being clicked again
    setStringsClicked((prevState) => {
      return prevState.map((isStringClicked, idx) => {
        return idx === string ? true : prevState[idx];
      });
    });

    setNumStringsSelected((prevState) => {
      return (prevState += 1);
    });
    setRoundScore((prevState) => {
      if (name === randNote) {
        e.target.textContent = name;
        e.target.classList.add("selectedNote", "right");
        return (prevState += 1);
      } else {
        e.target.textContent = name;
        e.target.classList.add("selectedNote", "wrong");
        return prevState;
      }
    });
  };
  return (
    <>
      <Header />
      <main>
        <Neck
          handleClick={handleClick}
          stringsClicked={stringsClicked}
          numStringsSelected={numStringsSelected}
        />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        Random Note: {randNote}
        <br />
        Num Strings Selected: {numStringsSelected}
        <br />
        Strings Clicked: {JSON.stringify(stringsClicked)}
        <br />
        Round Score: {roundScore}
      </main>
      <Footer />
    </>
  );
}

export default App;
