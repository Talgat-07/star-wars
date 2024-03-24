import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PeopleType } from "@store/features/getPeople/getPeopleSlice.ts";
import { getDocs, collection, DocumentData } from "firebase/firestore";
import { db } from "../../../firebase.ts";

const arrCategory = [
  "films",
  "people",
  "planets",
  "species",
  "starships",
  "vehicles",
];
export const getFavorite = createAsyncThunk(
  "favorite/getFavorite",
  async () => {
    const result: Array<PeopleType> = [];
    await Promise.all(
      arrCategory.map(async (el) => {
        const docRef = await getDocs(collection(db, el));
        docRef.forEach((doc) => {
          const data = doc.data() as DocumentData;
          if (data.ifFavorite) {
            const people = data as PeopleType;
            result.push(people);
          }
        });
      }),
    );
    return result;
  },
);

type AppInitialStateType = {
  people: Array<PeopleType>;
};

const initialState: AppInitialStateType = {
  people: [],
};

const getFavoriteSlice = createSlice({
  name: "getFavorite",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFavorite.fulfilled, (state, action) => {
      state.people = action.payload;
    });
  },
});
export default getFavoriteSlice.reducer;
