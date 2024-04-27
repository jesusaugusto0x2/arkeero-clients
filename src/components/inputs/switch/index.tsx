import React, { InputHTMLAttributes, forwardRef } from "react";
import styles from "./index.module.scss";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export const Switch = forwardRef<HTMLInputElement, Props>(
  ({ label, ...props }, ref) => (
    <div className={styles.SwitchWrapper}>
      {label && <label htmlFor={props.name}>{label}</label>}
      <input {...props} ref={ref} className={styles.Switch} type="checkbox" />
    </div>
  )
);

Switch.displayName = "Switch";
