import React, { InputHTMLAttributes, forwardRef } from "react";
import styles from "./index.module.scss";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  placeholder?: string;
  error?: string;
};

export const TextInput = forwardRef<HTMLInputElement, Props>(
  ({ onChange, onBlur, name, error, ...props }, ref) => (
    <div className={styles.TextInputWrapper}>
      <input
        {...props}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
      />
      {error && <small className={styles.error}>{error}</small>}
    </div>
  )
);

TextInput.displayName = "TextInput";
