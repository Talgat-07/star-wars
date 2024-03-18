import { configureStore } from "@reduxjs/toolkit";
import getPeopleReducer from "./features/getPeople";

const store = configureStore({
  reducer: {
    getPeople: getPeopleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
