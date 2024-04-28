import { RootState } from "..";
import { createSelector } from "@reduxjs/toolkit";

const selectClientsState = (state: RootState) => state.clients;

const selectClientsList = createSelector(
  selectClientsState,
  ({ clients }) => clients
);

export const ClientSelectors = {
  selectClientsList,
};
