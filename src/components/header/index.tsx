import { FC } from "react";
import Image from "next/image";
import styles from "./index.module.scss";
import Link from "next/link";

export const Header: FC = () => (
  <header className={styles.Header}>
    <Link href="/" passHref>
      <Image
        src="/images/arkeero-logo.png"
        alt="arkeero-logo"
        width={132}
        height={42}
      />
    </Link>
  </header>
);
