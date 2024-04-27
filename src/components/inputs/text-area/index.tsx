import React, { TextareaHTMLAttributes, forwardRef } from "react";
import styles from "./index.module.scss";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?: string;
  label?: string;
};

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ label, error, ...props }, ref) => (
    <div className={styles.TextAreaWrapper}>
      {label && <label htmlFor={props.name}>{label}</label>}
      <textarea {...props} ref={ref} />
      {error && <small className={styles.error}>{error}</small>}
    </div>
  )
);

TextArea.displayName = "TextArea";
