import { RootState } from "..";
import { createSelector } from "@reduxjs/toolkit";

const selectClientsState = (state: RootState) => state.clients;

const selectClientsList = createSelector(
  selectClientsState,
  ({ clients }) => clients
);

const selectTotalClientsCount = createSelector(
  selectClientsState,
  ({ clients }) => clients.length
);

const selectCurrentPage = createSelector(
  selectClientsState,
  ({ currentPage }) => currentPage
);

const selectClientOneInput = createSelector(
  selectClientsState,
  ({ clientOneInput }) => clientOneInput
);

const selectClientToEdit = createSelector(
  selectClientsState,
  ({ clientToEdit }) => clientToEdit
);

const selectSearchValue = createSelector(
  selectClientsState,
  ({ searchValue }) => searchValue
);

const selectFilteredClients = createSelector(
  selectClientsState,
  ({ clients, currentPage, pageSize, searchValue }) => {
    const offset = currentPage * pageSize;

    return clients
      .filter((client) =>
        client.name.toLowerCase().includes(searchValue.toLowerCase())
      )
      .slice(offset, offset + pageSize);
  }
);

const selectTotalPages = (search: string) =>
  createSelector(
    selectClientsState,
    selectFilteredClients,
    ({ clients, pageSize }, filteredClients) => {
      const length = !search ? clients.length : filteredClients.length;
      return Math.ceil(length / pageSize);
    }
  );

export const ClientSelectors = {
  selectClientsList,
  selectCurrentPage,
  selectClientOneInput,
  selectClientToEdit,
  selectTotalClientsCount,
  selectSearchValue,
  selectFilteredClients,
  selectTotalPages,
};
