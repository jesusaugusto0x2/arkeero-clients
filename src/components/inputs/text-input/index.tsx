import React, { InputHTMLAttributes, ReactNode, forwardRef } from "react";
import styles from "./index.module.scss";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: ReactNode;
  error?: string;
};

export const TextInput = forwardRef<HTMLInputElement, Props>(
  ({ label, error, ...props }, ref) => (
    <div className={styles.TextInputWrapper}>
      {label && <label htmlFor={props.name}>{label}</label>}
      <input {...props} ref={ref} />
      {error && <small className={styles.error}>{error}</small>}
    </div>
  )
);

TextInput.displayName = "TextInput";
