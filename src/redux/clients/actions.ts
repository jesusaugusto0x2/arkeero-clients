import { Client, ClientInput } from "@/models";
import { createAction } from "@reduxjs/toolkit";

const setClients = createAction<Client[]>("CLIENTS/SET_CLIENTS_LIST");

const setCurrentPage = createAction<number>("CLIENTS/SET_CURRENT_PAGE");

const updateClientOneInput = createAction<ClientInput>(
  "CLIENTS/UPDATE_CLIENT_ONE_INPUT"
);

export const ClientsActions = {
  setClients,
  setCurrentPage,
  updateClientOneInput,
};
