"use client";

import {
  ClientCard,
  TextInput,
  Pagination,
  Button,
  Modal,
  ClientForm,
} from "@/components";
import { FC, useEffect, useState } from "react";
import { useDebounce } from "@/hooks";
import Link from "next/link";
import { useSelector } from "react-redux";
import { ClientSelectors } from "@/redux/clients/selectors";
import { ClientsActions } from "@/redux/clients/actions";
import { useAppDispatch } from "@/redux";
import { useGetClientsQuery } from "@/redux/services/client";
import { ClientUtils } from "@/utils";
import { Client } from "@/models";
import styles from "./index.module.scss";

export const Clients: FC = () => {
  const dispatch = useAppDispatch();

  const [localSearchValue, setLocalSearchValue] = useState<string>("");
  const debValue = useDebounce(localSearchValue);

  const totalClientsCount = useSelector(
    ClientSelectors.selectTotalClientsCount
  );
  const currentPage = useSelector(ClientSelectors.selectCurrentPage);
  const clientToEdit = useSelector(ClientSelectors.selectClientToEdit);
  const filteredClients = useSelector(ClientSelectors.selectFilteredClients);

  const { isLoading, isError } = useGetClientsQuery(null);

  useEffect(() => {
    dispatch(ClientsActions.setSearchValue(debValue));
  }, [debValue, dispatch]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>Error...</h2>;
  }

  // Calculate in local state to prevent selector issues
  const totalPages = debValue
    ? Math.ceil(filteredClients.length / 4)
    : Math.ceil(totalClientsCount / 4);

  return (
    <>
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
            onChange={(e) => setLocalSearchValue(e.target.value)}
          />
          <ul>
            {filteredClients.map((client) => (
              <ClientCard
                key={client.id}
                client={client}
                onEdit={(client) =>
                  dispatch(ClientsActions.setClientToEdit(client))
                }
                onStatusChange={(client) =>
                  dispatch(ClientsActions.updateClient(client))
                }
              />
            ))}
          </ul>
        </div>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageSelect={(pageNum) =>
            dispatch(ClientsActions.setCurrentPage(pageNum))
          }
          horizontalAlignment="center"
        />
      </section>
      {clientToEdit && (
        <Modal
          visible={clientToEdit !== null}
          title="Edit Client"
          buttonText="Close"
          onButtonClick={() => {
            dispatch(ClientsActions.setClientToEdit(null));
          }}
        >
          <ClientForm
            submitMode="client"
            defaultValues={ClientUtils.parseClientToInput(clientToEdit)}
            onSubmit={(data) => {
              const client: Client = {
                ...clientToEdit,
                ...ClientUtils.parseInputValuesToClient(data),
              };

              dispatch(ClientsActions.updateClient(client));
            }}
          />
        </Modal>
      )}
    </>
  );
};
