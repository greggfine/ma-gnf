import styles from "./note-grid.module.scss";
import Note from "./Note";
import { useState } from "react";
import notesData from "../src/data/notes.json";

const NoteGrid = () => {
  const [notes] = useState(notesData);
  return (
    <h1 className={styles.NoteGrid}>
      {notes.map(({ id, name, string, octave }) => {
        return <Note key={id} name={name} octave={octave} string={string} />;
      })}
    </h1>
  );
};

export default NoteGrid;
