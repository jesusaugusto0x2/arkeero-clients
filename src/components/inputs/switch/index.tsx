import React, { InputHTMLAttributes, forwardRef } from "react";
import styles from "./index.module.scss";

type Props = InputHTMLAttributes<HTMLInputElement>;

export const Switch = forwardRef<HTMLInputElement, Props>((props, ref) => (
  <div className={styles.SwitchWrapper}>
    <input {...props} ref={ref} className={styles.Switch} type="checkbox" />
  </div>
));

Switch.displayName = "Switch";
