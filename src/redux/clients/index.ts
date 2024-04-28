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
}

const initialState: ClientState = {
  clients: [],
  pageSize: PAGE_SIZE,
  currentPage: 0,
  clientOneInput: CLIENT_FORM_DEFAULT_VALUES,
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
  reducer.addDefaultCase((state: ClientState) => state);
});

export default ClientsReducer;
