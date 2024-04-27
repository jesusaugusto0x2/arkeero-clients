import { SelectHTMLAttributes, forwardRef } from "react";
import styles from "./index.module.scss";

type Option = {
  label: string;
  value: string | number;
};

type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  options: Option[];
  hasEmptyValue?: boolean;
  label?: string;
  error?: string;
};

export const Select = forwardRef<HTMLSelectElement, Props>(
  ({ label, error, hasEmptyValue, options, ...props }, ref) => (
    <div className={styles.SelectWrapper}>
      {label && <label htmlFor={props.name}>{label}</label>}
      <select {...props} ref={ref} className={styles.Select}>
        {hasEmptyValue && <option value="-">-</option>}
        {options.map((opt, idx) => (
          <option key={`${opt.value}-${idx}`} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <small className={styles.error}>{error}</small>}
    </div>
  )
);

Select.displayName = "Select";
