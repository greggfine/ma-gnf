import { FC } from "react";
import styles from "./timer.module.scss";

interface Props {
  timeRemaining: number;
}

const Timer: FC<Props> = ({ timeRemaining }) => {
  return (
    <div className={styles.Timer}>
      <progress max="10" value={timeRemaining}></progress>
    </div>
  );
};

export default Timer;
