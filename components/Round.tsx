import styles from "./round.module.scss";
type Props = {
  round: number;
};
const Round = ({ round }: Props) => {
  return <div className={styles.Round}>Round: {round}</div>;
};

export default Round;
