import { Header } from "@/components/header";
import styles from "./page.module.scss";

export default async function NewClientPage() {
  return (
    <>
      <Header />
      <main className={styles.NewClient}>
        <p>New clients page</p>
      </main>
    </>
  );
}
