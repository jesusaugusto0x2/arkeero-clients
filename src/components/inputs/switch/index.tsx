import React, { InputHTMLAttributes, ReactNode, forwardRef } from "react";
import styles from "./index.module.scss";
import cx from "classnames";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: ReactNode;
  variant?: "small" | "large";
  className?: string;
};

export const Switch = forwardRef<HTMLInputElement, Props>(
  ({ className, label, value, variant = "large", ...props }, ref) => {
    return (
      <div className={cx(styles.SwitchWrapper, className)}>
        {label && <label htmlFor={props.name}>{label}</label>}
        <input
          {...props}
          ref={ref}
          className={styles[variant]}
          type="checkbox"
          checked={value === "true"}
        />
      </div>
    );
  }
);

Switch.displayName = "Switch";
