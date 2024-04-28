"use client";

import { FC, PropsWithChildren, ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useOutsideClick } from "@/hooks";
import { Button } from "..";
import styles from "./index.module.scss";

type Props = {
  visible: boolean;
  title?: string;
  buttonText?: string;
  cancelText?: string;
  onClose?: () => void;
  onButtonClick?: () => void;
};

export const Modal: FC<PropsWithChildren<Props>> = ({
  visible,
  title,
  children,
  buttonText = "Accept",
  cancelText = "Cancel",
  onClose,
  onButtonClick,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useOutsideClick(ref, () => onClose?.());

  useEffect(() => {
    if (!visible) {
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [visible]);

  if (!visible) {
    return null;
  }

  return createPortal(
    <div className={styles.FullWrapper} style={{ top: window.scrollY }}>
      <div className={styles.modal} ref={ref}>
        {title && <h2 className={styles.title}>{title}</h2>}
        {children}
        <div className={styles.footer}>
          <Button text={buttonText} onClick={onButtonClick} />
          {cancelText && (
            <Button variant="link" text={cancelText} onClick={onClose} />
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};
