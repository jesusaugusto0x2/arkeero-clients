import { createReducer } from "@reduxjs/toolkit";
import { Client } from "@/models";
import { ClientsActions } from "./actions";

interface ClientState {
  clients: Client[];
}

const initialState: ClientState = {
  clients: [],
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
  reducer.addDefaultCase((state: ClientState) => state);
});

export default ClientsReducer;
