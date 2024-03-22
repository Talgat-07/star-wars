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
  url: string;
};

type InitialStateType = {
  people: Array<PeopleType> | false;
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
  reducers: {},
  extraReducers: (builder) => {
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
            url: "#",
          };
        });
        state.next = action.payload.next;
        state.previous = action.payload.previous;
        state.status = false;
      },
    );

    //rejected
    builder.addCase(getPeople.rejected, (state) => {
      state.status = true;
    });
  },
});

export default getPeopleSlice.reducer;
