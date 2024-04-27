import { FC } from "react";
import { Button } from "..";
import Image from "next/image";
import ChevronLeftSrc from "@/assets/icons/chevron-left.svg";
import ChevronRightSrc from "@/assets/icons/chevron-right.svg";
import cx from "classnames";
import styles from "./index.module.scss";

type Props = {
  className?: string;
  currentPage: number;
  totalPages: number;
  maxVisiblePages?: number;
  horizontalAlignment?: "start" | "center" | "end";
  onPageSelect: (page: number) => void;
};

export const Pagination: FC<Props> = ({
  className,
  currentPage,
  totalPages,
  maxVisiblePages,
  horizontalAlignment = "start",
  onPageSelect,
}) => {
  if (totalPages < 2) {
    return null;
  }

  const maxRenderPages = maxVisiblePages || totalPages;

  const halfVisiblePages = Math.floor(maxRenderPages / 2);

  let startPage = Math.max(0, currentPage - halfVisiblePages);

  if (totalPages - startPage < maxRenderPages) {
    startPage = Math.max(0, totalPages - maxRenderPages);
  }

  return (
    <div
      className={cx(
        styles.Pagination,
        className,
        styles[`horizontal-${horizontalAlignment}`]
      )}
    >
      <Button
        icon={
          <Image src={ChevronLeftSrc} alt="chev_left" width={14} height={14} />
        }
        variant="link"
        disabled={currentPage === 0}
        onClick={() => onPageSelect(Math.max(0, currentPage - 1))}
      />
      {startPage > 0 && (
        <>
          <span onClick={() => onPageSelect(0)}>1</span>
          {startPage > 1 && <span className={styles.ellipsis}>...</span>}
        </>
      )}
      {[...Array(maxRenderPages).keys()].map((key) => (
        <span
          className={cx({
            [styles.selected]: startPage + key === currentPage,
          })}
          key={startPage + key}
          onClick={() => onPageSelect(startPage + key)}
        >
          {startPage + key + 1}
        </span>
      ))}
      {startPage + maxRenderPages < totalPages && (
        <>
          <span className={styles.ellipsis}>...</span>
          <span onClick={() => onPageSelect(totalPages - 1)}>{totalPages}</span>
        </>
      )}
      <Button
        icon={
          <Image
            src={ChevronRightSrc}
            alt="chev_right"
            width={14}
            height={14}
          />
        }
        variant="link"
        disabled={currentPage === totalPages - 1}
        onClick={() => onPageSelect(Math.min(totalPages - 1, currentPage + 1))}
      />
    </div>
  );
};
