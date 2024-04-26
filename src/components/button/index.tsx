import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import styles from "./index.module.scss";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "default";
  icon?: ReactNode;
  text?: string;
  className?: string;
};

export const Button: FC<Props> = ({
  variant = "primary",
  icon,
  text,
  ...props
}) => (
  <button {...props} className={`${styles.Button} ${styles[variant]}`}>
    {text && <span>{text}</span>}
    {icon}
  </button>
);
