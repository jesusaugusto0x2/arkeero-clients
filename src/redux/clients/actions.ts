import { Client, ClientInput } from "@/models";
import { createAction } from "@reduxjs/toolkit";

const setClients = createAction<Client[]>("CLIENTS/SET_CLIENTS_LIST");

const setCurrentPage = createAction<number>("CLIENTS/SET_CURRENT_PAGE");

const updateClientOneInput = createAction<ClientInput>(
  "CLIENTS/UPDATE_CLIENT_ONE_INPUT"
);

const setClientToEdit = createAction<Client | null>(
  "CLIENTS/SET_CLIENT_TO_EDIT"
);

const updateClient = createAction<Client>("CLIENTS/UPDATE_CLIENT");

const setSearchValue = createAction<string>("CLIENTS/SET_SEARCH_VALUE");

export const ClientsActions = {
  setClients,
  setCurrentPage,
  updateClientOneInput,
  setClientToEdit,
  updateClient,
  setSearchValue,
};
