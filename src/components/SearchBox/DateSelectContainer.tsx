import { useState, useRef, useEffect } from "react";
import CustomCalendar from "./CustomCalendar";
import { format } from "date-fns";

interface DateSelectContainerProps {
  setDatesArr: (dates: [string, string]) => void;
  isOne: boolean;
  setIsOne: (value: boolean) => void;
}

const DateSelectContainer: React.FC<DateSelectContainerProps> = ({
  setDatesArr,
  isOne,
  setIsOne,
}) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const datesArray: [string, string] = [
      startDate ? format(startDate, "yyyy-MM-dd") : "",
      endDate ? format(endDate, "yyyy-MM-dd") : "",
    ];
    setDatesArr(datesArray);
  }, [startDate, endDate, setDatesArr]);

  const openCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node) &&
      calendarRef.current &&
      !calendarRef.current.contains(event.target as Node)
    ) {
      setIsCalendarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const style = {
    boxShadow: "0px 3.95px 15.82px 0px #143C7730",
  };

  return (
    <div
      ref={containerRef}
      className="relative transition-all duration-500 overflow-visible w-full"
    >
      <div
        onClick={openCalendar}
        className="grid grid-cols-2 z-50 justify-between cursor-pointer gap-1 w-full"
      >
        <div className="w-full">
          <p className="text-xs">Departure</p>
          <p className="text-lg font-[500] text-[#1D3FAA]">
            {startDate ? format(startDate, "MM/dd/yyyy") : "MM/DD/YYYY"}
          </p>
        </div>
        {!isOne && (
          <div className="w-full">
            <p className="text-xs">Return</p>
            <p className="text-lg font-[500] text-[#1D3FAA]">
              {endDate ? format(endDate, "MM/dd/yyyy") : "MM/DD/YYYY"}
            </p>
          </div>
        )}
      </div>

      {isCalendarOpen && (
        <div
          style={style}
          ref={calendarRef}
          className="absolute w-[600px] rounded-md bg-white z-40 mt-3.5 right-0"
        >
          <CustomCalendar
            startDate={startDate}
            endDate={endDate}
            isOne={isOne}
            setIsOne={setIsOne}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
          />
        </div>
      )}
    </div>
  );
};

export default DateSelectContainer;
