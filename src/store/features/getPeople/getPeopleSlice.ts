import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { getImgPeople, getPeopleId } from "@services/gerPeopleData.ts";
import { GerPeopleType } from "types/gerPeople.ts";

// createAsyncThunk
export const getPeople = createAsyncThunk("people", async (url: string) => {
  const res = await axios(url);
  return {
    people: res.data.results,
    next: res.data.next,
    previous: res.data.previous,
  };
});

// initialState type
export type PeopleType = {
  id: string;
  img: string;
  name: string;
};

type InitialStateType = {
  people: Array<PeopleType> | false;
  previous: string | null;
  next: string | null;
};

// initialState
const initialState: InitialStateType = {
  people: [],
  previous: null,
  next: null,
};

// Slice
const getPeopleSlice = createSlice({
  name: "getPeople",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //pending
    builder.addCase(getPeople.pending, () => {});

    //fulfilled
    builder.addCase(
      getPeople.fulfilled,
      (state, action: PayloadAction<GerPeopleType>) => {
        state.people = action.payload.people.map((el) => {
          const id = getPeopleId(el.url);
          const img: string = getImgPeople(id);
          return {
            id,
            name: el.name,
            img,
          };
        });
        state.next = action.payload.next;
        state.previous = action.payload.previous;
      },
    );

    //rejected
    builder.addCase(getPeople.rejected, (state) => {
      state.people = false;
    });
  },
});

export default getPeopleSlice.reducer;
