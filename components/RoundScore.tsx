import styles from "./round-score.module.scss";
type Props = {
  roundScore: number;
};
const RoundScore = ({ roundScore }: Props) => {
  return (
    <div className={styles.RoundScore}>
      roundScore: <span>{roundScore}</span>
    </div>
  );
};

export default RoundScore;
