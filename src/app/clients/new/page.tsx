import { Header } from "@/components/header";
import { NewClient } from "@/containers/new-client";
import styles from "./page.module.scss";

export default async function NewClientPage() {
  return (
    <>
      <Header />
      <main className={styles.NewClient}>
        <NewClient />
      </main>
    </>
  );
}
