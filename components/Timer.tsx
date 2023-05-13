import { FC, ReactNode } from "react";
import styles from "./timer.module.scss";

interface Props {
  children: ReactNode;
}

const Timer: FC<Props> = ({ children }) => {
  return <h1>Time Remaining: {children}</h1>;
};

export default Timer;
