import styles from "./note.module.scss";

type Props = {
  name: string;
  string: number;
  handleClick(name: string, string: number, e: any): void;
  stringsClicked: boolean[];
};

const Note = ({ name, string, handleClick, stringsClicked }: Props) => {
  return (
    <div
      className={styles.Note}
      onClick={(e) => {
        if (stringsClicked[string] === false) {
          handleClick(name, string, e);
        }
      }}
    ></div>
  );
};

export default Note;
