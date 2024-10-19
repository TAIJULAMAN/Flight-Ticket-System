"use client";
import PriceAlert2 from "@/views/b2c/PriceAlert/PriceAlert2";
import PriceAlert3 from "@/views/b2c/PriceAlert/PriceAlert3";
import PriceAlerts from "@/views/b2c/PriceAlert/PriceAlerts";

import React from "react";

function PriceAlert() {
  return (
    <div>
      <div className="mb-5">
        <PriceAlerts />
      </div>
      <div className="mb-5">
        <PriceAlert2 />
      </div>
      <div className="mb-5">
        <PriceAlert3 />
      </div>
    </div>
  );
}

export default PriceAlert;
