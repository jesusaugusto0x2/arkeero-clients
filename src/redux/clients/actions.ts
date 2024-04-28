import { Client } from "@/models";
import { createAction } from "@reduxjs/toolkit";

const setClients = createAction<Client[]>("CLIENTS/SET_CLIENTS_LIST");

export const ClientsActions = {
  setClients,
};
