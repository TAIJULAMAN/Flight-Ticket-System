import React, { ReactNode } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DatePickerProps {
  selectsRange?: boolean;
  isClearable?: boolean;
  disabled?: boolean;
  additionalClassName?: string;
  dateFormat?: string;
  isInvalid?: boolean;
  autoComplete?: string;
  showMonthDropdown?: boolean;
  showYearDropdown?: boolean;
  autoFocus?: boolean;
  placeholderText?: string;
  selected?: Date | null;
  startDate?: Date | null;
  endDate?: Date | null;
  onChange?: (date: Date | [Date | null, Date | null] | null) => void;
  children?: ReactNode;
  [key: string]: any; // For any additional props
}

const DatePicker: React.FC<DatePickerProps> = ({
  selectsRange = false,
  isClearable = false,
  disabled = false,
  additionalClassName = "",
  dateFormat = "MM/dd/yyyy",
  isInvalid = false,
  autoComplete = "off",
  showMonthDropdown = true,
  showYearDropdown = true,
  autoFocus = false,
  placeholderText = "",
  selected = null,
  startDate = null,
  endDate = null,
  onChange,
  children,
  ...restProps
}) => {
  const onChangeDate = (dates: Date | [Date | null, Date | null] | null) => {
    if (onChange) onChange(dates);
  };

  return (
    <ReactDatePicker
      wrapperClassName="w-full"
      className={`w-full rounded-lg border-borderColor focus:border-borderColor focus:ring-borderColor placeholder:text-inputPlaceholder ${
        disabled
          ? "cursor-not-allowed text-disableAccent !bg-disableInputBg placeholder:text-disableInputPlaceholder"
          : "cursor-pointer"
      } ${additionalClassName}`}
      selectsRange={selectsRange}
      preventOpenOnFocus
      isClearable={isClearable}
      disabled={disabled}
      dateFormat={dateFormat}
      autoComplete={autoComplete}
      showMonthDropdown={showMonthDropdown}
      showYearDropdown={showYearDropdown}
      autoFocus={autoFocus}
      placeholderText={placeholderText}
      selected={selected}
      startDate={startDate}
      endDate={endDate}
      onChange={onChangeDate}
      {...restProps}>
      {children}
    </ReactDatePicker>
  );
};

export default DatePicker;
