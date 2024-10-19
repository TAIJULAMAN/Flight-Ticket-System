import { Divider } from "@mui/material";
import Link from "next/link";

export default function RefundPolicy() {
  return (
    <div className="max-w-[690px] w-full mx-auto pb-[70px]">
      <div className=" pt-9">
        <div className="mt-6">
          <h2 className=" primary-text">Refund Policy</h2>
          <Divider sx={{ bgcolor: "#254FD4", marginTop: "8px" }} />
          <div className="mt-6">
            <div>
              <h3>General Refund Policy</h3>
              <ul>
                <li>
                  <h4 className="text-[16px]  font-semibold mt-3">Fully Refundable Tickets:</h4>
                  <p className="text-[16px] text-[#414141]">
                    Tickets classified as fully refundable will be eligible for a full refund if canceled prior to the
                    scheduled departure time. No cancellation fee will apply.
                  </p>
                </li>
                <li>
                  <h4 className="text-[16px]  font-semibold mt-3">Non-Refundable Tickets:</h4>
                  <p className="text-[16px] text-[#414141]">
                    Tickets classified as non-refundable will not be eligible for a full refund if canceled prior to the
                    scheduled departure time. No cancellation fee will apply.
                  </p>
                </li>
                <li>
                  <h4 className="text-[16px]  font-semibold mt-3">Partially Refundable Tickets:</h4>
                  <p className="text-[16px] text-[#414141]">
                    For tickets that are partially refundable, the refundable portion will be specified at the time of
                    purchase. Cancellation before the scheduled departure time will result in a refund of the specified
                    refundable amount, minus any applicable fees.
                  </p>
                </li>
              </ul>

              <h3 className=" font-semibold mt-3">Special Circumstances</h3>
              <ul>
                <li>
                  <h4 className="text-[16px]  font-semibold mt-3">Flight Cancellations by Airline:</h4>
                  <p className="text-[16px] text-[#414141]">
                    If US Bangla cancels a flight, passengers will be entitled to a full refund of the ticket price or
                    the option to be rescheduled on the next available flight without additional charges.
                  </p>
                </li>
                <li>
                  <h4 className="text-[16px]  font-semibold mt-3">Significant Schedule Changes:</h4>
                  <p className="text-[16px] text-[#414141]">
                    If there is a significant change to the flight schedule (defined as a change of more than 4 hours
                    from the original departure time), passengers may request a full refund.
                  </p>
                </li>
                <li>
                  <h4 className="text-[16px]  font-semibold mt-3">Denied Boarding:</h4>
                  <p className="text-[16px] text-[#414141]">
                    In cases of denied boarding due to overbooking, passengers will be eligible for compensation and a
                    refund of the ticket price or an alternative flight as per our denied boarding policy.
                  </p>
                </li>
              </ul>
              <h3 className=" font-semibold mt-3">Refund Request Process</h3>
              <ul>
                <li>
                  <h4 className="text-[16px] font-semibold mt-3">How to Request a Refund:</h4>
                  <p className="text-[16px] text-[#414141]">
                    Refund requests can be made online through our website, by contacting our customer service, or at
                    any of our ticketing offices. When requesting a refund, passengers must provide the booking
                    reference number and the passenger's name as per the ticket.
                  </p>
                </li>
                <li>
                  <h4 className="text-[16px] font-semibold mt-3">Processing Time:</h4>
                  <p className="text-[16px] text-[#414141]">
                    Refunds will be processed within 7-10 business days for credit card transactions. For other forms of
                    payment, refunds may take up to 20 business days.
                  </p>
                </li>
              </ul>

              <h3 className="text-[16px] font-semibold mt-3">Refund Fees and Charges</h3>
              <ul>
                <li>
                  <h4 className="text-[16px] font-semibold mt-3">Cancellation Fees:</h4>
                  <p className="text-[16px] text-[#414141]">
                    Refundable and partially refundable tickets may be subject to cancellation fees as specified at the
                    time of purchase.
                  </p>
                </li>
                <li>
                  <h4 className="text-[16px] font-semibold mt-3">Processing Time:</h4>
                  <p className="text-[16px] text-[#414141]">
                    Service charges and ancillary fees (such as seat selection, baggage fees, etc.) are non-refundable.
                  </p>
                </li>
                <li>
                  <h4 className="text-[16px] font-semibold mt-3">Non-Refundable Items:</h4>
                  <p className="text-[16px] text-[#414141]">
                    Tickets purchased as part of a package deal may be subject to the refund policies of the package
                    provider. Promotional tickets or tickets purchased under special discounts may have specific refund
                    conditions which will be communicated at the time of booking.
                  </p>
                </li>
              </ul>

              <h3 className="  font-semibold my-3">Contact Information</h3>
              <ul className="text-[16px] text-[#414141] list-disc list-inside ms-6">
                <li>Customer Service: 0132378634</li>
                <li>Email: trav@gmail.com</li>
                <li>Ticketing Office: 23/A, Banani, Dhaka 1453</li>
              </ul>
            </div>

            <div className="mt-10 flex items-center w-full justify-center">
              <Link
                href={"/booking/refund/request-form"}
                className="primary-btn max-w-sm mx-auto">
                Request Refund
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
