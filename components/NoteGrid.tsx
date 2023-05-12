import styles from "./note-grid.module.scss";
import Note from "./Note";
import { useState } from "react";
import notesData from "../src/data/notes.json";

type Props = {
  handleClick(name: string, string: number): void;
  stringsClicked: boolean[];
  numStringsSelected: number;
};
const NoteGrid = ({ handleClick, stringsClicked }: Props) => {
  const [notes] = useState(notesData);
  return (
    <h1 className={styles.NoteGrid}>
      {notes.map(({ id, name, string }) => {
        return (
          <Note
            key={id}
            name={name}
            string={string}
            handleClick={handleClick}
            stringsClicked={stringsClicked}
          />
        );
      })}
    </h1>
  );
};

export default NoteGrid;
