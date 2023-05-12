import styles from "./note-grid.module.scss";
import Note from "./Note";
import { useState } from "react";
import notesData from "../public/data/notes.json";

type Props = {
  handleClick(name: string, string: number): void;
  stringsClicked: boolean[];
  numStringsSelected: number;
};
const NoteGrid = ({
  handleClick,
  stringsClicked,
  numStringsSelected,
}: Props) => {
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
            numStringsSelected={numStringsSelected}
          />
        );
      })}
    </h1>
  );
};

export default NoteGrid;
