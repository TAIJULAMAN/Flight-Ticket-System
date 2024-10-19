"use client";
import {
  Divider,
  TextField,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

export default function RefundRequest() {
  const [gen, setGen] = useState("10");

  const [selectedValue, setSelectedValue] = useState("10");

  const handleFlyer = (event: any) => {
    setSelectedValue(event.target.value);
  };

  const [formValues, setFormValues] = useState({
    title: "Mr",
    gender: "Male",
    fullName: "",
    surName: "",
    mobileNumber: "",
    email: "",
    passportNumber: "",
    passportExpiryDate: "",
    frequentFlyerNumber: "",
    reservationPNR: "",
    transactionID: "",
  });

  const handleChange = (e: any) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Add form submission logic here
  };

  const handleGen = (event: any) => {
    setGen(event.target.value);
  };
  return (
    <div className="max-w-[868px] pt-16 pb-[70px]  mx-auto w-full">
      <form
        className="primary-shadow rounded-lg px-6 pt-5 pb-10"
        onSubmit={handleSubmit}>
        <h1 className="text-[18px] text-[#222] mb-5">Request Refund</h1>
        <Divider sx={{ bgcolor: "#254FD4", marginBottom: "30px" }} />

        <div className="mb-5 grid lg:grid-cols-5 items-center gap-5">
          <div className="w-full">
            <FormControl fullWidth>
              <Select
                value={formValues.title}
                onChange={handleChange}
                name="title">
                <MenuItem value="Mr">Mr</MenuItem>
                <MenuItem value="Mrs">Mrs</MenuItem>
                <MenuItem value="Miss">Miss</MenuItem>
                <MenuItem value="Dr">Dr</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="w-full lg:col-span-2">
            <FormControl
              component="fieldset"
              fullWidth>
              <RadioGroup
                aria-label="gender"
                name="gender"
                value={gen}
                className="flex flex-row items-center gap-5 w-full"
                onChange={handleGen}>
                <FormControlLabel
                  value="10"
                  className="secondary-input"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="20"
                  className="secondary-input"
                  control={<Radio />}
                  label="Female"
                />
              </RadioGroup>
            </FormControl>
          </div>
        </div>

        <div className="flex items-center gap-5 justify-between">
          <div className="mb-5 w-full">
            <TextField
              fullWidth
              label="Full Name"
              name="fullName"
              value={formValues.fullName}
              onChange={handleChange}
            />
          </div>

          <div className="mb-5 w-full">
            <TextField
              fullWidth
              label="Sur Name"
              name="surName"
              value={formValues.surName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-5">
          <TextField
            fullWidth
            label="Mobile Number"
            name="mobileNumber"
            value={formValues.mobileNumber}
            onChange={handleChange}
          />
        </div>

        <div className="mb-5">
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center gap-5 justify-between">
          <div className="mb-5 w-full">
            <TextField
              fullWidth
              label="Passport Number"
              name="passportNumber"
              value={formValues.passportNumber}
              onChange={handleChange}
            />
          </div>

          <div className="mb-5 w-full">
            <TextField
              fullWidth
              label="Passport Expiry Date"
              name="passportExpiryDate"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={formValues.passportExpiryDate}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-5">
          <FormControl fullWidth>
            <Select
              id="demo-select-small"
              value={selectedValue}
              onChange={handleFlyer}>
              <MenuItem
                value={10}
                selected>
                NON-VEG
              </MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="mb-5">
          <TextField
            fullWidth
            label="Reservation PNR"
            name="reservationPNR"
            value={formValues.reservationPNR}
            onChange={handleChange}
          />
        </div>

        <div className="mb-5">
          <TextField
            fullWidth
            label="Transaction ID"
            name="transactionID"
            value={formValues.transactionID}
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center justify-center mt-10">
          <Link
            href={"/booking/refund/confirm"}
            className="primary-btn max-w-[616px] w-full mx-auto">
            {" "}
            Request Refund
          </Link>
        </div>
      </form>
    </div>
  );
}
