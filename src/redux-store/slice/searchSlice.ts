import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Location {
  locationName: string;
  locationCode: string;
}

interface SearchState {
  originLocation: Location;
  destination: Location;
  adults: number;
  datesArr: string[];
  directFlightsOnly: boolean;
}

const initialState: SearchState = {
  originLocation: { locationName: "Dhaka", locationCode: "DBA" },
  destination: { locationName: "BD", locationCode: "DBA" },
  adults: 1,
  datesArr: [],
  directFlightsOnly: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setOriginLocation: (state, action: PayloadAction<Location>) => {
      state.originLocation = action.payload;
    },
    setDestination: (state, action: PayloadAction<Location>) => {
      state.destination = action.payload;
    },
    setAdults: (state, action: PayloadAction<number>) => {
      state.adults = action.payload;
    },
    setDatesArr: (state, action: PayloadAction<string[]>) => {
      state.datesArr = action.payload;
    },
    setDirectFlightsOnly: (state, action: PayloadAction<boolean>) => {
      state.directFlightsOnly = action.payload;
    },
  },
});

export const { setOriginLocation, setDestination, setAdults, setDatesArr, setDirectFlightsOnly } = searchSlice.actions;

export default searchSlice.reducer;
