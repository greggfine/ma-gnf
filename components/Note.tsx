import styles from "./note.module.scss";

type Props = {
  name: string;
  string: number;
  handleClick(name: string, string: number): void;
  stringsClicked: boolean[];
};

const Note = ({ name, string, handleClick, stringsClicked }: Props) => {
  return (
    <div
      className={styles.Note}
      onClick={() => {
        if (stringsClicked[string] === false) {
          handleClick(name, string);
        }
      }}
    ></div>
  );
};

export default Note;
