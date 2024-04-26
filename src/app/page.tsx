import styles from "./page.module.scss";
import { Header } from "@/components/header";
import { Button } from "@/components/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.Home}>
        <section>
          <h1>👋 Welcome!</h1>
          <h3>{"Now it's way much easier to look for your client data!"}</h3>
          <Link href="/clients">
            <Button text="Start" size="large" />
          </Link>
        </section>
      </main>
    </>
  );
}
