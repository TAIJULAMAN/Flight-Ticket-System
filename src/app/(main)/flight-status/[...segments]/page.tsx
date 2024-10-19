import FlightStatusDetails from "@/views/flightStatus/FlightStatusDetails";
import React from "react";

export default function StatusResult({ params }: any) {
  return (
    <div className="mt-[45px]">
      <FlightStatusDetails params={params} />
    </div>
  );
}
