import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { loginApi } from "./useLogin";


type FlightTimings = {
    qualifier: string;
    value: string;
  };
  
  type FlightPoint = {
    iataCode: string;
    departure?: {
      timings: FlightTimings[];
    };
    arrival?: {
      timings: FlightTimings[];
    };
  };
  
  type OperatingFlight = {
    carrierCode: string;
    flightNumber: number;
  };
  
  type Segment = {
    boardPointIataCode: string;
    offPointIataCode: string;
    scheduledSegmentDuration: string;
    partnership?: {
      operatingFlight: OperatingFlight;
    };
  };
  
  type Leg = {
    boardPointIataCode: string;
    offPointIataCode: string;
    aircraftEquipment: {
      aircraftType: string;
    };
    scheduledLegDuration: string;
  };
  
  type FlightDesignator = {
    carrierCode: string;
    flightNumber: number;
  };
  
  type DatedFlight = {
    scheduledDepartureDate: string;
    flightDesignator: FlightDesignator;
    flightPoints: FlightPoint[];
    segments: Segment[];
    legs: Leg[];
  };
  
  type FlightStatus ={
    flights : DatedFlight[]
  }


const initialState: FlightStatus = {flights:[]}



const statusSlice = createSlice({
  name: "flightStatus",
  initialState,
  reducers: {
   setDatedFlights : (state, action: PayloadAction<DatedFlight[]>) => {
    state.flights = action.payload;
  },
  },
});

export const { setDatedFlights } = statusSlice.actions;
export default statusSlice.reducer;