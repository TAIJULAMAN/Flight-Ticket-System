import { useState, forwardRef, useEffect } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";

// Custom input component for date picker
const CustomInput = forwardRef(({ value, openCalendar, setDatesArr }: any, ref: any) => {
  const [startDate, setStartDate] = useState<DateObject | null>(null);
  const [endDate, setEndDate] = useState<DateObject | null>(null);

  useEffect(() => {
    if (typeof value === "string" && value) {
      const dates = value.split(" ~ ").map((date: string) => new DateObject(date));
      setStartDate(dates[0] || null);
      setEndDate(dates[1] || null);
      setDatesArr(dates.map((date) => date.format("YYYY-MM-DD")));
    }
  }, [value]);

  return (
    <div
      onClick={openCalendar}
      ref={ref}
      className="flex z-50 justify-between cursor-pointer   gap-5 w-full">
      <div className="w-full">
        <p className="text-xs">Departure</p>
        <p className="text-lg font-[500] text-[#1D3FAA]">{startDate ? startDate.format("MM/DD/YYYY") : ""}</p>
      </div>
      <div className="w-full">
        <p className="text-xs">Return</p>
        <p className="text-lg font-[500] text-[#1D3FAA]">{endDate ? endDate.format("MM/DD/YYYY") : ""}</p>
      </div>
    </div>
  );
});

export default function DateSelect({ setDatesArr, isOne }: any) {
  const [dates, setDates] = useState<DateObject[]>([new DateObject(), new DateObject().add(1, "day")]);

  return (
    <div className="w-full relative z-[9000]">
      <DatePicker
        value={dates}
        onChange={(selectedDates: DateObject[]) => setDates(selectedDates)}
        range
        numberOfMonths={2}
        render={<CustomInput setDatesArr={setDatesArr} />}
        className="custom-calendar !z-50 relative bg-white w-full mt-1 "
      />
    </div>
  );
}
