"use client";

import { ClientCard } from "@/components/client-card";
import { Client } from "@/models";
import { FC, useState } from "react";
import { TextInput } from "@/components/inputs";
import styles from "./index.module.scss";
import { useDebounce } from "@/hooks";

type Props = {
  clients: Client[];
};

export const Clients: FC<Props> = ({ clients }) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const debValue = useDebounce(searchValue);

  const filteredClients = clients.filter((client) =>
    client.name.toLowerCase().includes(debValue.toLowerCase())
  );

  return (
    <section className={styles.Clients}>
      <TextInput
        placeholder="Search clients by name"
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <ul>
        {filteredClients.map((client) => (
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
};
