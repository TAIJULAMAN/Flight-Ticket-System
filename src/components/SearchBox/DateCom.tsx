import { useState, forwardRef, useEffect } from "react";
import Datepicker from "react-tailwindcss-datepicker";

// Custom input component for date picker
const CustomInput = forwardRef(
  ({ value, openCalendar, setDatesArr }: any, ref: any) => {
    const [startDate, setStartDate] = useState<null>(null);
    const [endDate, setEndDate] = useState<null>(null);

    return (
      <div
        onClick={openCalendar}
        ref={ref}
        className="flex z-50 justify-between cursor-pointer   gap-5 w-full"
      >
        <div className="w-full">
          <p className="text-xs">Departure</p>
          {/* <p className="text-lg font-[500] text-[#1D3FAA]">{startDate ?("MM/DD/YYYY") : ""}</p> */}
        </div>
        <div className="w-full">
          <p className="text-xs">Return</p>
          {/* <p className="text-lg font-[500] text-[#1D3FAA]">{endDate("MM/DD/YYYY") : ""}</p> */}
        </div>
      </div>
    );
  }
);

export default function DateCom({ setDatesArr, isOne }: any) {
  const [dateValue, setDateValue] = useState<any>({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const handleValueChange = (newDateValue: any) => {
    setDateValue(newDateValue);

    if (setDatesArr) {
      setDatesArr({
        startDate: newDateValue.startDate,
        endDate: newDateValue.endDate,
      });
    }
  };

  useEffect(() => {
    console.log(isOne);
    setDateValue((prevDateValue: any) => ({
      startDate: new Date(),
      endDate: null,
    }));
  }, [isOne]);

  return (
    <div className="w-full relative z-[9000]">
      <div className="grid grid-cols-2 items-center justify-between w-full">
        <p className="text-xs">Departure</p>
        {isOne ? null : <p className="text-xs">Return</p>}
      </div>
      <Datepicker
        inputClassName={
          "outline-none text-lg font-[500] placeholder:text-[#1D3FAA]  text-[#1D3FAA] overflow-hidden  flex justify-between rounded-lg w-full"
        }
        value={dateValue}
        readOnly
        asSingle={isOne ? true : false}
        toggleClassName={"hidden"}
        popoverDirection="down"
        containerClassName={"border-none"}
        displayFormat="MM/DD/YYYY"
        onChange={handleValueChange}
        useRange={isOne ? false : true}
        separator="    "
        primaryColor={"blue"}
      />
    </div>
  );
}
