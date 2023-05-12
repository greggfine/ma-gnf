import styles from "./header.module.scss";
import Round from "./Round";
import RoundScore from "./RoundScore";
type Props = {
  roundScore: number;
  round: number;
};
const Header = ({ roundScore, round }: Props) => {
  return (
    <div className={styles.Header}>
      <RoundScore roundScore={roundScore} />
      <Round round={round} />
    </div>
  );
};

export default Header;
