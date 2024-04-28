import React, { ComponentProps, FC, ReactElement, useState } from "react";
import { TabTitle } from "./tab-title";
import styles from "./index.module.scss";
import cx from "classnames";

type ChildElement = ReactElement<ComponentProps<typeof TabTitle>>;

type Props = {
  children: ChildElement[];
  defaultKey?: number;
  className?: string;
};

export const Tabs: FC<Props> = ({ children, defaultKey, className }) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(
    defaultKey || 0
  );

  return (
    <div className={cx(styles.Tabs, className)} role="tablist">
      <ul>
        {children.map((item, index) => (
          <TabTitle
            key={item.props.title}
            title={item.props.title}
            index={index}
            isActive={index === selectedTabIndex}
            setSelectedTab={setSelectedTabIndex}
          />
        ))}
      </ul>
      {children.map((child, idx) => (
        <div
          key={idx}
          style={{
            display: idx !== selectedTabIndex ? "none" : "block",
            position: "relative",
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};
