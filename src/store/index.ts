import { configureStore } from "@reduxjs/toolkit";
import getCategoryReducer from "./features/getCategory";
import getFavoriteReducer from "./features/getFavorite";
import getPeopleReducer from "./features/getPeople";

const store = configureStore({
  reducer: {
    getCategory: getCategoryReducer,
    getFavorite: getFavoriteReducer,
    getPeople: getPeopleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
