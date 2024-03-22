import { configureStore } from "@reduxjs/toolkit";
import getPeopleReducer from "./features/getPeople";
import getCategoryReducer from "./features/getCategory";

const store = configureStore({
  reducer: {
    getPeople: getPeopleReducer,
    getCategory: getCategoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
