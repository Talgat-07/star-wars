import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { PeopleType } from "@store/features/getPeople/getPeopleSlice.ts";

export const getCategory = createAsyncThunk(
  "category/getCategory",
  async (url: string) => {
    const res = await axios(url);
    return res.data;
  },
);

// initialState Type
export type CategoryT = {
  films: string;
  people: string;
  planets: string;
  species: string;
  starships: string;
  vehicles: string;
};

type CategoryType = {
  category: CategoryT | null;
  categoryData: Array<PeopleType>;
  status: boolean;
};

// initialState
const initialState: CategoryType = {
  category: null,
  categoryData: [],
  status: false,
};

const getCategorySlice = createSlice({
  name: "getCategory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getCategory.fulfilled,
      (state, action: PayloadAction<CategoryT>) => {
        state.category = action.payload;
        state.status = false;
        state.categoryData = Object.keys(action.payload).map((el) => ({
          url: `../${el}/?page=1`,
          id: `${Math.floor(Math.random() * (10000 - 1))}`,
          name: (el = el === "people" ? "character" : el),
          img: `https://starwars-visualguide.com/assets/img/categories/${el}.jpg`,
        }));
      },
    );
    builder.addCase(getCategory.rejected, (state) => {
      state.category = null;
      state.status = true;
    });
  },
});

export default getCategorySlice.reducer;
