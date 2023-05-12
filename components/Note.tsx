import styles from "./note.module.scss";

type Props = {
  name: string;
  string: number;
  handleClick(name: string, string: number): void;
  numStringsSelected: number;
  stringsClicked: boolean[];
};

const Note = ({
  name,
  string,
  numStringsSelected,
  handleClick,
  stringsClicked,
}: Props) => {
  return (
    <div
      className={styles.Note}
      onClick={() => {
        if (stringsClicked[string] === false) {
          handleClick(name, string);
        }
      }}
    >
      {name}
    </div>
  );
};

export default Note;
