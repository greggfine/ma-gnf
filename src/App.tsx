import "./App.scss";

import { useState, useEffect, createContext } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Neck from "../components/Neck";
import RandNote from "../components/RandNote";
import Timer from "../components/Timer";
const notes = ["e", "f", "f#", "g", "g#", "a", "a#", "b", "c", "c#", "d", "d#"];

interface ContextType {
  stringsClicked: boolean[];
  handleClick(name: string, string: number, e: any): void;
}

export const Context = createContext<ContextType>({
  stringsClicked: [],
  handleClick: () => {},
});

function App() {
  const roundTime = 10;
  const maxRounds = 3;
  const [round, setRound] = useState(1);
  const [roundScore, setRoundScore] = useState(0);
  const [numStringsSelected, setNumStringsSelected] = useState(0);
  const [randNote, setRandNote] = useState("");
  const [stringsClicked, setStringsClicked] = useState<boolean[]>(
    new Array(6).fill(false)
  );
  const [timeRemaining, setTimeRemaining] = useState(roundTime);

  const generateRandNote = (): void => {
    const randomNote = notes[Math.floor(Math.random() * notes.length)];
    setRandNote(randomNote);
  };

  useEffect(() => {
    // Remove classes from target elements
    const targetElements = document.querySelectorAll(".selectedNote");
    targetElements.forEach((element) => {
      element.textContent = "";
      element.classList.remove("selectedNote", "right", "wrong");
    });
    generateRandNote();
  }, [round]);

  useEffect(() => {
    if (timeRemaining > 0) {
      const timer = setTimeout(() => {
        setTimeRemaining((prev) => {
          return (prev = prev - 1);
        });
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    } else {
      initiateRound();
    }
  }, [timeRemaining]);

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

    if (numStringsSelected === 5) {
      initiateRound();
    }
  };
  const initiateRound = () => {
    setTimeout(() => {
      setTimeRemaining(roundTime);
      setRound((prevState) => prevState + 1);
      setStringsClicked(new Array(6).fill(false));
    }, 2000);
  };
  return (
    <>
      <Header roundScore={roundScore} round={round} />
      <main>
        <Timer timeRemaining={timeRemaining} />
        <Context.Provider value={{ stringsClicked, handleClick }}>
          <Neck />
        </Context.Provider>
        <div className="infoContainer">
          <RandNote randNote={randNote} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
