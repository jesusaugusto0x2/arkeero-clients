import { Header } from "@/components/header";
import { Clients } from "@/containers";
import { getClients } from "@/services/client";
import styles from "./page.module.scss";

export default async function ClientsPage() {
  return (
    <>
      <Header />
      <main className={styles.Clients}>
        <Clients />
      </main>
    </>
  );
}
