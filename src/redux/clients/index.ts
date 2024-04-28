import { createReducer } from "@reduxjs/toolkit";
import { Client } from "@/models";
import { ClientsActions } from "./actions";

const PAGE_SIZE = 4;

interface ClientState {
  clients: Client[];
  pageSize: number;
  currentPage: number;
}

const initialState: ClientState = {
  clients: [],
  pageSize: PAGE_SIZE,
  currentPage: 0,
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
  reducer.addDefaultCase((state: ClientState) => state);
});

export default ClientsReducer;
