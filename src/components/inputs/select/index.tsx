import { SelectHTMLAttributes, forwardRef } from "react";
import styles from "./index.module.scss";

type Option = {
  label: string;
  value: string | number;
};

type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  options: Option[];
  hasEmptyValue?: boolean;
};

export const Select = forwardRef<HTMLSelectElement, Props>(
  ({ hasEmptyValue, options, ...props }, ref) => (
    <select {...props} ref={ref} className={styles.Select}>
      {hasEmptyValue && <option value="-">-</option>}
      {options.map((opt, idx) => (
        <option key={`${opt.value}-${idx}`} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  )
);

Select.displayName = "Select";
