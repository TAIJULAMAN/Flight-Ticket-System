import FlightFilters from "@/views/flightSearch/FlightFilters";
import FlightList from "@/views/flightSearch/FlightList";
import FlightSearch from "@/views/flightSearch/FlightSearch";

export default function page() {
  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="second-container mx-auto mt-2">
        <FlightSearch />
        <div className="flex justify-between gap-[27px] mt-[60px]">
          <div className="w-[357px]">
            <FlightFilters />
          </div>
          <div className="w-[763px]">
            <FlightList />
          </div>
        </div>
      </div>
    </div>
  );
}
