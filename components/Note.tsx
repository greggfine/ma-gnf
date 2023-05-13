import styles from "./note.module.scss";
import { FC, useEffect, useRef } from "react";
import * as Tone from "tone";

type Props = {
  name: string;
  octave: number;
  string: number;
  handleClick(name: string, string: number, e: any): void;
  stringsClicked: boolean[];
  numStringsSelected: number;
};

const Note: FC<Props> = ({
  name,
  octave,
  string,
  handleClick,
  stringsClicked,
  numStringsSelected,
}) => {
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
