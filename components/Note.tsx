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
    const synth = new Tone.Synth();
    synth.triggerAttackRelease(`${name}${octave}`, "4n");
    synth.toDestination();
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
