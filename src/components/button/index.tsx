import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import styles from "./index.module.scss";
import cx from "classnames";

type ButtonVariant = "primary" | "default" | "link";
type ButtonSize = "large" | "medium" | "small";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  text?: string;
  className?: string;
};

export const Button: FC<Props> = ({
  variant = "primary",
  size = "medium",
  icon,
  text,
  className,
  ...props
}) => (
  <button
    {...props}
    className={cx(styles.Button, styles[variant], styles[size], className)}
  >
    {text && <span>{text}</span>}
    {icon}
  </button>
);
