import { FC, ReactElement } from "react";
import styles from "./index.module.scss";

type Props = {
  title: string;
  children: ReactElement | ReactElement[];
};

export const TabPane: FC<Props> = ({ children }) => (
  <div className={styles.tabPane} role="tabpanel">
    {children}
  </div>
);
