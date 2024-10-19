import { apiSlice } from "../slice/apiSlice";

const flightApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFlights: builder.query({
      query: ({ originLocationCode, destinationLocationCode, adults, departureDate, returnDate, max }) => ({
        url: `/flight/flightoffer-search?originLocationCode=${originLocationCode}&destinationLocationCode=${destinationLocationCode}&adults=${adults}&max=${max}&departureDate=${departureDate}&returnDate=${returnDate}`,
      }),
      providesTags: ["flight"],
    }),
    getflightStatus: builder.query({
      query: ({ carrierCode, flightNumber, scheduledDepartureDate }) => ({
        url: `/flight/flight-status?carrierCode=${carrierCode}&flightNumber=${flightNumber}&scheduledDepartureDate=${scheduledDepartureDate}`,
      }),
      providesTags: ["flight"],
    }),
  }),
});
export const { useGetFlightsQuery, useGetflightStatusQuery } = flightApi;
