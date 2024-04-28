"use client";

import { ClientCard, TextInput, Pagination, Button } from "@/components";
import { Client } from "@/models";
import { FC, useState, useMemo } from "react";
import { useDebounce } from "@/hooks";
import styles from "./index.module.scss";
import Link from "next/link";
import { useSelector } from "react-redux";
import { ClientSelectors } from "@/redux/clients/selectors";
import { ClientsActions } from "@/redux/clients/actions";
import { useAppDispatch } from "@/redux";
import { useGetClientsQuery } from "@/redux/services/client";

const PAGE_SIZE = 4;

export const Clients: FC = () => {
  const dispatch = useAppDispatch();

  const [searchValue, setSearchValue] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const debValue = useDebounce(searchValue);

  const clientList = useSelector(ClientSelectors.selectClientsList);

  const { data, isLoading, isError } = useGetClientsQuery(null);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>Error...</h2>;
  }

  // const filteredClients = useMemo(() => {
  //   const currentPage = page * PAGE_SIZE;

  //   return clientList
  //     .filter((client) =>
  //       client.name.toLowerCase().includes(debValue.toLowerCase())
  //     )
  //     .slice(currentPage, currentPage + PAGE_SIZE);
  // }, [clientList, debValue, page]);

  // const totalPages = useMemo(() => {
  //   const dataLength = !debValue ? clientList.length : filteredClients.length;

  //   return Math.ceil(dataLength / PAGE_SIZE);
  // }, [clientList.length, filteredClients.length, debValue]);

  return (
    <section className={styles.Clients}>
      <div>
        <div className={styles.titleHeader}>
          <h1>Clients List</h1>
          <Link href="/clients/new">
            <Button text="Add new client" />
          </Link>
        </div>
        <TextInput
          placeholder="Search clients by name"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <ul>
          {clientList.map((client) => (
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
      {/* <Pagination
        totalPages={totalPages}
        currentPage={page}
        onPageSelect={(pageNum) => setPage(pageNum)}
        horizontalAlignment="center"
      /> */}
    </section>
  );
};
