import React from "react";

export default function Transaction() {
  const transactionData = [
    { serial: 1, flight: "DAC to BKK", date: "12/03/2024", payment: "BDT 25,000", media: "bKash", status: "Completed" },
    { serial: 2, flight: "DAC to DXB", date: "07/06/2024", payment: "BDT 40,000", media: "Nagad", status: "Cancelled" },
    { serial: 3, flight: "DAC to SIN", date: "18/09/2024", payment: "BDT 35,000", media: "Rocket", status: "Pending" },
    {
      serial: 4,
      flight: "BKK to DAC",
      date: "03/11/2024",
      payment: "BDT 30,000",
      media: "Bank Transfer",
      status: "Completed",
    },
    { serial: 5, flight: "DXB to DAC", date: "25/04/2024", payment: "BDT 45,000", media: "bKash", status: "Cancelled" },
    { serial: 6, flight: "SIN to DAC", date: "10/10/2024", payment: "BDT 38,000", media: "Nagad", status: "Pending" },
    { serial: 7, flight: "DXB to DAC", date: "25/04/2024", payment: "BDT 45,000", media: "bKash", status: "Cancelled" },
    { serial: 8, flight: "SIN to DAC", date: "10/10/2024", payment: "BDT 38,000", media: "Nagad", status: "Pending" },
  ];

  const getStatusClass = (status: any) => {
    if (status === "Completed") return "text-primary font-bold";
    if (status === "Cancelled") return "text-red-600 font-bold";
    if (status === "Pending") return "text-green-600 font-bold";
    return "";
  };

  return (
    <div className="primary-shadow bg-white rounded-lg p-5">
      <h1 className="px-2 font-[500] text-[28px]">Transaction</h1>
      <div className="  mt-6 min-w-full relative overflow-x-auto">
        <table className="overflow-auto border-0  m-0  min-w-full ">
          <thead className="rounded-md overflow-hidden border-none  font-[400] text-center">
            <tr className="border-none bg-[#D5DFFF]  rounded-md text-[16px] font-[400]">
              <th
                scope="col"
                className="px-6 py-3 text-center bg-[#D5DFFF] font-[400] rounded-s-md text-[#000000]  tracking-wider">
                Serial
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center text-[#000000] font-[400]  tracking-wider">
                Flight
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center text-[#000000] font-[400]  tracking-wider">
                Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center text-[#000000] font-[400]  tracking-wider">
                Payment
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center text-[#000000] font-[400]  tracking-wider">
                Media
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center text-[#000000] font-[400] bg-[#D5DFFF] rounded-e-md  tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {transactionData.length > 0 &&
              transactionData.map((data, index) => (
                <tr
                  key={index}
                  className={`bg-white text-[16px] `}>
                  <td className="px-6 py-4 whitespace-nowrap font-[400] text-center">{index + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap font-[400] text-center">{data.flight}</td>
                  <td className="px-6 py-4 whitespace-nowrap font-[400] text-center">{data.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap font-[400] text-center">{data.payment}</td>
                  <td className="px-6 py-4 whitespace-nowrap font-[400] text-center">{data.media}</td>
                  <td className={`px-6 py-4 whitespace-nowrap font-[400] text-center ${getStatusClass(data.status)}`}>
                    {data.status}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
