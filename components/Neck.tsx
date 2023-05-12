import styles from "./neck.module.scss";
import NoteGrid from "./NoteGrid";
import Canvas from "./Canvas";

type Props = {
  handleClick(name: string, string: number, e: any): void;
  numStringsSelected: number;
  stringsClicked: boolean[];
};
const Neck = ({ handleClick, numStringsSelected, stringsClicked }: Props) => {
  return (
    <div className={styles.Neck}>
      <Canvas />
      <NoteGrid
        handleClick={handleClick}
        stringsClicked={stringsClicked}
        numStringsSelected={numStringsSelected}
      />
    </div>
  );
};

export default Neck;
