import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface CountryState {
  name: string;
  code: string;
  states: State[];
}

interface State {
  name: string;
  code: string;
  cities: City[];
}

export interface City {
  name: string;
  population: number;
}

const countryFetch: {
  data: CountryState[];
} = {
  data: [],
};

const countrySlice = createSlice({
  name: "country",
  initialState: countryFetch,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const fetchCountries = createAsyncThunk(
  "country/fetchCountries", // name
  async () => {
    const data = await axios.get(`http://localhost:8000/countriesArray`);
    return data?.data;
  }
);

export const {} = countrySlice.actions;

export default countrySlice.reducer;
