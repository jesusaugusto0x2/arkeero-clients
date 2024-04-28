import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import ClientsReducer from "./clients";
import { clientApi } from "./services/client";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [clientApi.reducerPath]: clientApi.reducer,
      clients: ClientsReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([clientApi.middleware]),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const useAppDispatch: () => AppDispatch = useDispatch;
