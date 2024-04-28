import React, { InputHTMLAttributes, forwardRef } from "react";
import styles from "./index.module.scss";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export const Switch = forwardRef<HTMLInputElement, Props>(
  ({ label, value, ...props }, ref) => {
    return (
      <div className={styles.SwitchWrapper}>
        {label && <label htmlFor={props.name}>{label}</label>}
        <input
          {...props}
          ref={ref}
          className={styles.Switch}
          type="checkbox"
          checked={value === "true"}
        />
      </div>
    );
  }
);

Switch.displayName = "Switch";
