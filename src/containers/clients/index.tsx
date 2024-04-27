import { ClientCard } from "@/components/client-card";
import { Client } from "@/models";
import { FC } from "react";
import styles from "./index.module.scss";

type Props = {
  clients: Client[];
};

export const Clients: FC<Props> = ({ clients }) => (
  <section className={styles.Clients}>
    <ul>
      {clients.map((client) => (
        <ClientCard
          key={client.id}
          accountType={client.accountType}
          status={client.status}
          description={client.description}
          name={client.name}
        />
      ))}
    </ul>
  </section>
);
