import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import { createSvgIcon } from "@mui/material";

const FlightLandIcon = createSvgIcon(
  <svg
    width="16"
    height="18"
    viewBox="0 0 16 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4.30553 10.7222C4.06155 10.7222 3.85718 10.6395 3.69242 10.4742C3.52766 10.3089 3.445 10.1045 3.44442 9.86108C3.44385 9.61767 3.52652 9.4133 3.69242 9.24797C3.85833 9.08264 4.0627 8.99997 4.30553 8.99997C4.54836 8.99997 4.75302 9.08264 4.9195 9.24797C5.08598 9.4133 5.16836 9.61767 5.16663 9.86108C5.16491 10.1045 5.08225 10.3091 4.91864 10.475C4.75503 10.641 4.55066 10.7233 4.30553 10.7222ZM7.74995 10.7222C7.50597 10.7222 7.3016 10.6395 7.13684 10.4742C6.97209 10.3089 6.88942 10.1045 6.88885 9.86108C6.88827 9.61767 6.97094 9.4133 7.13684 9.24797C7.30275 9.08264 7.50712 8.99997 7.74995 8.99997C7.99278 8.99997 8.19744 9.08264 8.36392 9.24797C8.5304 9.4133 8.61278 9.61767 8.61106 9.86108C8.60933 10.1045 8.52667 10.3091 8.36306 10.475C8.19945 10.641 7.99508 10.7233 7.74995 10.7222ZM11.1944 10.7222C10.9504 10.7222 10.746 10.6395 10.5813 10.4742C10.4165 10.3089 10.3338 10.1045 10.3333 9.86108C10.3327 9.61767 10.4154 9.4133 10.5813 9.24797C10.7472 9.08264 10.9515 8.99997 11.1944 8.99997C11.4372 8.99997 11.6419 9.08264 11.8083 9.24797C11.9748 9.4133 12.0572 9.61767 12.0555 9.86108C12.0538 10.1045 11.9711 10.3091 11.8075 10.475C11.6439 10.641 11.4395 10.7233 11.1944 10.7222ZM1.72221 17.611C1.2486 17.611 0.84331 17.4425 0.50633 17.1056C0.169351 16.7686 0.00057407 16.363 0 15.8888V3.83334C0 3.35973 0.168777 2.95444 0.50633 2.61746C0.843884 2.28048 1.24918 2.1117 1.72221 2.11113H2.58332V0.388916H4.30553V2.11113H11.1944V0.388916H12.9166V2.11113H13.7777C14.2513 2.11113 14.6569 2.2799 14.9944 2.61746C15.332 2.95501 15.5005 3.3603 15.4999 3.83334V15.8888C15.4999 16.3624 15.3314 16.768 14.9944 17.1056C14.6575 17.4431 14.2519 17.6116 13.7777 17.611H1.72221ZM1.72221 15.8888H13.7777V7.27776H1.72221V15.8888Z"
      fill="#254FD4"
    />
  </svg>,
  "FlightLandIcon"
);

// DateComponent function to render a date picker component
export default function CustomDatePicker() {
  // State to hold the selected date
  const [date, setDate] = useState(null);

  // Function to handle the change in date selection
  const handleDateChange = (newValue: any) => {
    setDate(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="relative w-full ">
        <DatePicker
          value={date}
          onChange={handleDateChange}
          sx={{
            width: "100%",
            border: "none",
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#979797",
              border: "none",
            },
            "& .MuiOutlinedInput-root": {
              "&:hover > fieldset": { borderColor: "none", border: "none" },
              "&.Mui-focused > fieldset": { borderColor: "none", border: "none" },
              height: "48px",
              borderRadius: "6px",
              border: "none",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "& .MuiOutlinedInput-root.Mui-focused:hover .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "& .MuiPickersPopper-root": {
              "& .MuiPaper-root": {
                border: "none",
                boxShadow: "none",
              },
            },
          }}
          slots={{ openPickerIcon: FlightLandIcon }}
        />
      </div>
    </LocalizationProvider>
  );
}
