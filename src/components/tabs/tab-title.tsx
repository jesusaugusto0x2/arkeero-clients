import { FC, useCallback } from "react";
import styles from "./index.module.scss";
import cx from "classnames";

export type Props = {
  title: string;
  index: number;
  isActive?: boolean;
  setSelectedTab: (index: number) => void;
};

const a = "";

export const TabTitle: FC<Props> = (props) => {
  const { title, index, isActive, setSelectedTab } = props;

  const handleOnClick = useCallback(
    () => setSelectedTab(index),
    [setSelectedTab, index]
  );

  return (
    <li>
      <button
        className={cx(styles.tabButton, {
          [styles.isActive]: isActive,
        })}
        role="tab"
        onClick={handleOnClick}
      >
        {title}
      </button>
    </li>
  );
};
