import styles from "./rand-note.module.scss";
type Props = {
  randNote: string;
};
const RandNote = ({ randNote }: Props) => {
  return (
    <div className={styles.RandNote}>
      <div className={styles.RandNote__note}>
        Note: <span className={styles.RandNote__noteName}>{randNote}</span>
      </div>
    </div>
  );
};

export default RandNote;
