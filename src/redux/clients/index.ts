import { createReducer } from "@reduxjs/toolkit";
import { Client, ClientInput } from "@/models";
import { ClientsActions } from "./actions";
import { CLIENT_FORM_DEFAULT_VALUES } from "@/consts";

const PAGE_SIZE = 4;

interface ClientState {
  clients: Client[];
  pageSize: number;
  currentPage: number;
  clientOneInput: ClientInput;
  clientToEdit: Client | null;
  searchValue: string;
}

const initialState: ClientState = {
  clients: [],
  pageSize: PAGE_SIZE,
  currentPage: 0,
  clientOneInput: CLIENT_FORM_DEFAULT_VALUES,
  clientToEdit: null,
  searchValue: "",
};

const ClientsReducer = createReducer(initialState, (reducer) => {
  //
  reducer.addCase(
    ClientsActions.setClients,
    (state: ClientState, { payload }) => ({
      ...state,
      clients: payload,
    })
  );

  //
  reducer.addCase(
    ClientsActions.setCurrentPage,
    (state: ClientState, { payload }) => ({
      ...state,
      currentPage: payload,
    })
  );

  //
  reducer.addCase(
    ClientsActions.updateClientOneInput,
    (state: ClientState, { payload }) => ({
      ...state,
      clientOneInput: payload,
    })
  );

  //
  reducer.addCase(
    ClientsActions.setClientToEdit,
    (state: ClientState, { payload }) => ({ ...state, clientToEdit: payload })
  );

  //
  reducer.addCase(
    ClientsActions.updateClient,
    (state: ClientState, { payload }) => ({
      ...state,
      clients: state.clients.map((client) => {
        if (payload.id === client.id) {
          return payload;
        }

        return client;
      }),
      clientToEdit: null,
    })
  );

  //
  reducer.addCase(
    ClientsActions.setSearchValue,
    (state: ClientState, { payload }) => ({
      ...state,
      searchValue: payload,
      currentPage: 0,
    })
  );

  //
  reducer.addDefaultCase((state: ClientState) => state);
});

export default ClientsReducer;
