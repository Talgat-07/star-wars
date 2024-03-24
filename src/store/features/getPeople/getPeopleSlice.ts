import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { getImgPeople, getPeopleId } from "@services/gerPeopleData.ts";
import { HTTPS, SWAPI_PAGE, SWAPI_ROOT } from "@constants/api.ts";
import { addFireStoreFavorite } from "@services/addFireStoreFavorite.ts";
import { getFireStoreFavorite } from "@services/getFireStoreFavorite.ts";

// createAsyncThunk
export const getPeople = createAsyncThunk(
  "people",
  async ({ category, num }: { category: string; num: string }) => {
    const res = await axios(HTTPS + SWAPI_ROOT + category + SWAPI_PAGE + num);
    const people = res.data.results.map(async (el: PeopleType) => {
      const id = getPeopleId(el.url);
      const img = getImgPeople(id, category);
      const favorite = await getFireStoreFavorite({ c: category, id });
      const ifFavorite = favorite !== null ? favorite.ifFavorite : false;

      return {
        id,
        name: el.name,
        img,
        url: "#",
        ifFavorite,
        category,
      };
    });

    return Promise.all(people).then((resolvedPeople) => ({
      people: resolvedPeople,
      category,
      next: res.data.next,
      previous: res.data.previous,
    }));
  },
);

// initialState type
export type PeopleType = {
  id: string;
  img: string;
  name: string;
  url: string;
  ifFavorite: boolean;
  category: string;
};

type InitialStateType = {
  people: Array<PeopleType>;
  previous: string | null;
  next: string | null;
  status: boolean;
};

// initialState
const initialState: InitialStateType = {
  people: [],
  previous: null,
  next: null,
  status: false,
};

// Slice
const getPeopleSlice = createSlice({
  name: "getPeople",
  initialState,
  reducers: {
    favoriteFunc: (state, action: PayloadAction<string>) => {
      state.people = state.people.map((el) => {
        if (el.id === action.payload) {
          const item = {
            ...el,
            ifFavorite: !el.ifFavorite,
          };
          addFireStoreFavorite(item);
          return item;
        } else {
          return el;
        }
      });
    },
    unFavoriteFunc: () => {},
  },
  extraReducers: (builder) => {
    //fulfilled
    builder.addCase(getPeople.fulfilled, (state, action) => {
      state.people = action.payload.people;
      state.next = action.payload.next;
      state.previous = action.payload.previous;
      state.status = false;
    });

    //rejected
    builder.addCase(getPeople.rejected, (state) => {
      state.status = true;
    });
  },
});

export default getPeopleSlice.reducer;
export const { favoriteFunc } = getPeopleSlice.actions;
