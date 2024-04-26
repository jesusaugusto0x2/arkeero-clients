import styles from "./page.module.scss";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.Home}>
        <h1>Arkeero Clients</h1>
      </main>
    </>
  );
}
