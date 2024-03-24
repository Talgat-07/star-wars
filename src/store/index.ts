import { configureStore } from "@reduxjs/toolkit";
import getPeopleReducer from "./features/getPeople";
import getCategoryReducer from "./features/getCategory";
import getFavoriteReducer from "./features/getFavorite";

const store = configureStore({
  reducer: {
    getPeople: getPeopleReducer,
    getCategory: getCategoryReducer,
    getFavorite: getFavoriteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
