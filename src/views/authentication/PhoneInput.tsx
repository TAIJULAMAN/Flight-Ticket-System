import React, { useEffect, useRef } from "react";

interface Option {
  id?: string;
  value: string;
  name?: string;
}

interface FormState {
  phone?: string;
  country?: string;
  [key: string]: any;
}

interface PhoneInputProps {
  formState: FormState;
  setFormState: React.Dispatch<React.SetStateAction<FormState>>;
}

const PhoneInput: React.FC<PhoneInputProps> = ({ formState = {}, setFormState }) => {
  const selectRef = useRef<HTMLSelectElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (formState.phone) {
      inputRef.current?.focus();
    }
  }, [formState.phone]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevState: FormState) => ({
      ...prevState,
      [name]: value,
      error: "",
    }));
  };

  const options: Option[] = [
    { id: "+880", value: "+880", name: "(+880)BD" },
    { id: "+91", value: "+91", name: "(+91)India" },
  ];

  return (
    <div className="flex w-full flex-col items-start">
      <div className="mt-1 relative rounded-md shadow-sm w-full flex justify-between">
        <select
          name="country"
          value={formState.country || ""}
          id="country"
          className="block whitespace-nowrap pl-10 p-3 border-[1.5px] rounded-l-[8px] border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          ref={selectRef}
          required
          onChange={handleChange}>
          {options.map((item) => (
            <option
              key={item.id ?? item.value}
              value={item.value}>
              {item.name}
            </option>
          ))}
        </select>

        <input
          type="text"
          name="phone"
          value={formState.phone || ""}
          className="block w-full p-3 border-[1.5px] rounded-r-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          ref={inputRef}
          autoComplete="tel"
          required
          placeholder="Enter your phone number"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default PhoneInput;
