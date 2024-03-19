import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { getImgPeople, getPeopleId } from "@services/gerPeopleData.ts";
import { PeopleT } from "types/people.ts";

// createAsyncThunk
export const getPeople = createAsyncThunk("people", async (url: string) => {
  const res = await axios(url);
  console.log(res.data);
  return res.data.results;
});

// initialState type
export type PeopleType = {
  id: string;
  img: string;
  name: string;
};

type InitialStateType = {
  people: Array<PeopleType> | false;
};

// initialState
const initialState: InitialStateType = {
  people: [],
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
      (state, action: PayloadAction<Array<PeopleT>>) => {
        state.people = action.payload.map((el) => {
          const id = getPeopleId(el.url);
          const img: string = getImgPeople(id);
          return {
            id,
            name: el.name,
            img,
          };
        });
      },
    );

    //rejected
    builder.addCase(getPeople.rejected, (state) => {
      state.people = false;
    });
  },
});

export default getPeopleSlice.reducer;
