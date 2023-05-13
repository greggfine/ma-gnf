import styles from "./neck.module.scss";
import NoteGrid from "./NoteGrid";
import Canvas from "./Canvas";

const Neck = () => {
  return (
    <div className={styles.Neck}>
      <Canvas />
      <NoteGrid />
    </div>
  );
};

export default Neck;
