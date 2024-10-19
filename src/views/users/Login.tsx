"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInputs {
  email: string;
  password: string;
}

const Login: React.FC = () => {
const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();

  const handleLogin: SubmitHandler<IFormInputs> = (data) => {
    console.log(data);
  };

  return (
    <div className=" flex min-h-[80vh] items-center justify-center light-bg">
      <div className="w-full max-w-xl mx-auto bg-white p-8  rounded-sm">
        <form onSubmit={handleSubmit(handleLogin)}>
          <h1 className="text-xl font-bold text-center">Welcome to Travo</h1>
        </form>
      </div>
    </div>
  );
};

export default Login;
