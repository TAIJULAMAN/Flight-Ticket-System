"use client";
import { useState, useEffect } from "react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isWithinInterval,
  isSameDay,
  differenceInCalendarDays,
} from "date-fns";

interface CustomCalendarProps {
  startDate?: Date | null | any;
  endDate: Date | null | any;
  isOne: boolean;
  setIsOne: (value: boolean) => void;
  setStartDate: (date: Date | null) => void;
  setEndDate: (date: Date | null) => void;
}

const CustomCalendar: React.FC<CustomCalendarProps> = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  isOne,
  setIsOne,
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [nextMonth, setNextMonth] = useState(addMonths(new Date(), 1));

  const handlePrevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
    setNextMonth(subMonths(nextMonth, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
    setNextMonth(addMonths(nextMonth, 1));
  };

  const handleDateClick = (date: Date) => {
    if (isOne) {
      setStartDate(date);
      setEndDate(null);
    } else {
      if (!startDate || (startDate && endDate)) {
        setStartDate(date);
        setEndDate(null);
      } else if (startDate && !endDate) {
        if (date < startDate) {
          setEndDate(startDate);
          setStartDate(date);
        } else {
          setEndDate(date);
        }
      }
    }
  };

  useEffect(() => {
    if (isOne) {
      setEndDate(null);
    }
  }, [isOne]);

  const renderDays = (month: Date) => {
    const startDateOfMonth = startOfMonth(month);
    const endDateOfMonth = endOfMonth(month);

    const days = eachDayOfInterval({
      start: startDateOfMonth,
      end: endDateOfMonth,
    }).map((date) => {
      const isSelected = isSameDay(date, startDate) || isSameDay(date, endDate);
      const isInRange =
        startDate &&
        endDate &&
        isWithinInterval(date, { start: startDate, end: endDate });

      return (
        <div
          key={date.toString()}
          className={`w-8 h-8 flex items-center rounded-full justify-center cursor-pointer ${isSelected
            ? "bg-[#2C5FFF] text-white"
            : isInRange
              ? "bg-blue-200 rounded-s-full"
              : "hover:bg-[#2C5FFF] hover:text-white"
            }`}
          onClick={() => handleDateClick(date)}
        >
          {date.getDate()}
        </div>
      );
    });

    return days;
  };

  const getSelectedDaysCount = () => {
    if (startDate && endDate) {
      return differenceInCalendarDays(endDate, startDate) + 1;
    }
    return 0;
  };

  const style = {
    boxShadow: "0px 3.95px 15.82px 0px #143C7730",
  };

  return (
    <div className=" max-w-[596px] mx-auto">
      <div className="mb-[18px] pt-[37px] px-[33px] flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <input
            type="checkbox"
            id="way"
            className="h-4 w-4 cursor-pointer"
            checked={isOne}
            onChange={(e) => setIsOne(e.target.checked)}
          />
          <label htmlFor="way" className="text-base font-normal cursor-pointer">
            One Way
          </label>
        </div>
        {isOne ? null : (
          <div className="flex gap-1 items-center">
            <p className="text-base font-[400]">Days Count:</p>
            <input
              type="number"
              value={getSelectedDaysCount()}
              readOnly
              className="outline-none w-[60px] border border-gray-300 rounded-md px-5 py-1"
            />
          </div>
        )}
      </div>
      <div className="flex divide-x-2 p-4 justify-center w-full">
        <div className="mx-auto px-2 max-w-[283px] w-full">
          <div className="flex py-2 px-[15px] items-center bg-[#2C5FFF] text-white rounded-[9px] mb-4">
            <button
              className="p-1 rounded-full bg-white text-blue-800 flex items-center justify-center place-items-center"
              onClick={handlePrevMonth}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 12H5M5 12L12 19M5 12L12 5"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <div className="font-medium w-full flex items-center justify-center text-[20px]">
              {format(currentMonth, "MMMM yyyy")}
            </div>
          </div>
          <div className="px-5 text-xs py-7">
            <div className="grid grid-cols-7 gap-2 mb-3 text-center text-[#162F7F]">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="font-[600]">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid w-full grid-cols-7 text-sm font-[400] gap-x-5.5">
              {renderDays(currentMonth)}
            </div>
          </div>
        </div>

        {/* Second Calendar */}
        <div className="mx-auto px-2 max-w-[283px] w-full">
          <div className="flex justify-end py-2 px-[15px] items-center bg-[#2C5FFF] text-white rounded-[9px] mb-4">
            <div className="text-[20px] w-full flex items-center justify-center font-medium">
              {format(nextMonth, "MMMM yyyy")}
            </div>
            <button
              className="p-1 rounded-full bg-white text-blue-800 flex items-center justify-center place-items-center"
              onClick={handleNextMonth}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="px-5 text-xs py-7">
            <div className="grid grid-cols-7 gap-2 mb-3 text-center text-[#162F7F]">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="font-[600]">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid w-full grid-cols-7 text-sm font-[400] gap-x-5.5">
              {renderDays(nextMonth)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCalendar;
