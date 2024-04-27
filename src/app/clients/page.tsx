import { Header } from "@/components/header";
import { Client } from "@/models";
import { Clients } from "@/containers";
import styles from "./page.module.scss";

async function getData(): Promise<Client[]> {
  const resp = await fetch(`${process.env.BASE_URL}`, {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  });

  if (!resp.ok) {
    throw new Error(`Request failed with status ${resp.status}`);
  }

  return resp.json();
}

export default async function ClientsPage() {
  const data = await getData();

  return (
    <>
      <Header />
      <main className={styles.Clients}>
        <Clients clients={data} />
      </main>
    </>
  );
}
