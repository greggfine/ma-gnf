import styles from "./header.module.scss";
import RoundScore from "./RoundScore";
type Props = {
  roundScore: number;
};
const Header = ({ roundScore }: Props) => {
  return (
    <div className={styles.Header}>
      <RoundScore roundScore={roundScore} />
    </div>
  );
};

export default Header;
