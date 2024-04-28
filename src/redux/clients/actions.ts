import { Client } from "@/models";
import { createAction } from "@reduxjs/toolkit";

const setClients = createAction<Client[]>("CLIENTS/SET_CLIENTS_LIST");

const setCurrentPage = createAction<number>("CLIENTS/SET_CURRENT_PAGE");

export const ClientsActions = {
  setClients,
  setCurrentPage,
};
