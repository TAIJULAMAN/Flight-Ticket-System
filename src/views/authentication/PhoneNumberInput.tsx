import React, { useEffect, useRef } from "react";

interface Option {
  id?: string;
  value: string;
  name?: string;
  label?: string;
}

interface PhoneNumberInputProps {
  name: string;
  country_name: string;
  value: string;
  country_value: string;
  className?: string;
  autoComplete?: string;
  placeholder?: string;
  country_name_placeHolder?: string;
  required?: boolean;
  isFocused?: boolean;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
  error?: string;
  options?: Option[];
}

const PhoneNumberInput: React.FC<any> = ({
  name,
  country_name,
  value,
  country_value,
  className = "",
  autoComplete = "off",
  placeholder = "",
  required = false,
  isFocused = false,
  handleChange,
  error = "",
  options = [],
}) => {
  const selectRef = useRef<HTMLSelectElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isFocused) {
      inputRef.current?.focus();
    }
  }, [isFocused]);

  return (
    <div className="flex w-full  flex-col items-start">
      <div className="mt-1 relative rounded-md shadow-sm w-full flex justify-between">
        <select
          name={country_name}
          value={country_value}
          id={country_name}
          className={
            `block  whitespace-nowrap  pl-10 p-3  border-[1.5px] rounded-l-[8px] border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500` +
            className
          }
          ref={selectRef}
          required={required}
          onChange={(e) => handleChange(e)}>
          {options.map((item: any) => (
            <option
              key={item.id ?? item.value}
              value={item.id || item.value}>
              {item.name || item.label}
            </option>
          ))}
        </select>
        {error && <div className="mt-1 ml-4 text-red-600 text-sm">{error}</div>}

        <input
          type="text"
          name={name}
          value={value}
          className={
            `block w-full  p-3  border-[1.5px] rounded-r-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 ` +
            className
          }
          ref={inputRef}
          autoComplete={autoComplete}
          required={required}
          placeholder={placeholder}
          onChange={(e) => handleChange(e)}
        />
      </div>
      {error && <div className="mt-1 ml-4 text-red-600 text-sm">{error}</div>}
    </div>
  );
};

export default PhoneNumberInput;
