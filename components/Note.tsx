import styles from "./note.module.scss";
import { FC, useRef, useContext } from "react";
import * as Tone from "tone";
import { Context } from "../src/App";

type Props = {
  name: string;
  octave: number;
  string: number;
};

const Note: FC<Props> = ({ name, octave, string }) => {
  const { stringsClicked, handleClick } = useContext(Context);
  const audioRef = useRef(null);
  const playNote = (name: string, octave: number) => {
    const sampler = new Tone.Sampler({
      urls: {
        e2: "e2.m4a",
        d3: "d3.m4a",
        e4: "e4.m4a",
        e5: "e5.m4a",
      },
      baseUrl: "/audio/guitar/",
      onload: () => {
        console.log("onload");
        sampler.triggerAttackRelease(`${name}${octave}`, "4n");
      },
    }).toDestination();
  };
  return (
    <div
      ref={audioRef}
      className={styles.Note}
      onClick={(e) => {
        if (stringsClicked[string] === false) {
          handleClick(name, string, e);
        }
        playNote(name, octave);
      }}
    ></div>
  );
};

export default Note;
