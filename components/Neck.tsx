import styles from "./neck.module.scss";
import NoteGrid from "./NoteGrid";

type Props = {
  handleClick(name: string, string: number): void;
  numStringsSelected: number;
  stringsClicked: boolean[];
};
const Neck = ({ handleClick, numStringsSelected, stringsClicked }: Props) => {
  return (
    <div className={styles.Neck}>
      <NoteGrid
        handleClick={handleClick}
        stringsClicked={stringsClicked}
        numStringsSelected={numStringsSelected}
      />
    </div>
  );
};

export default Neck;
