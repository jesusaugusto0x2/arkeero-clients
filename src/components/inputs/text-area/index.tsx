import React, { TextareaHTMLAttributes, forwardRef } from "react";
import styles from "./index.module.scss";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?: string;
};

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ onChange, onBlur, name, error, ...props }, ref) => (
    <div className={styles.TextAreaWrapper}>
      <textarea
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

TextArea.displayName = "TextArea";
