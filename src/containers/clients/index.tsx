"use client";

import { ClientCard, TextInput, Pagination } from "@/components";
import { Client } from "@/models";
import { FC, useState, useMemo } from "react";
import { useDebounce } from "@/hooks";
import styles from "./index.module.scss";

const PAGE_SIZE = 4;

type Props = {
  clients: Client[];
};

export const Clients: FC<Props> = ({ clients }) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const debValue = useDebounce(searchValue);

  const filteredClients = useMemo(() => {
    const currentPage = page * PAGE_SIZE;

    return clients
      .filter((client) =>
        client.name.toLowerCase().includes(debValue.toLowerCase())
      )
      .slice(currentPage, currentPage + PAGE_SIZE);
  }, [clients, debValue, page]);

  const totalPages = useMemo(() => {
    const dataLength = !debValue ? clients.length : filteredClients.length;

    return Math.ceil(dataLength / PAGE_SIZE);
  }, [clients.length, filteredClients.length, debValue]);

  return (
    <section className={styles.Clients}>
      <div>
        <h1>Clients List</h1>
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
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={page}
        onPageSelect={(pageNum) => setPage(pageNum)}
        horizontalAlignment="center"
      />
    </section>
  );
};
