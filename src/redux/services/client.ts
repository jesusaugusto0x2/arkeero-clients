import { Client } from "@/models";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ClientsActions } from "../clients/actions";

export const clientApi = createApi({
  reducerPath: "clientApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getClients: builder.query<Client[], null>({
      query: () => "",
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(ClientsActions.setClients(data));
      },
    }),
  }),
});

export const { useGetClientsQuery } = clientApi;
