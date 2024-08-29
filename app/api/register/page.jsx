"use client";

import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log({ name, email, password });
  };

  return (
    <div className="flex justify-center items-center my-[20px] md:my-[100px]">
      <div className="border-2 rounded-md">
        <div className="md:px-[60px] px-[20px] pb-[20px] md:pb-14">
          <h1 className="text-center text-lg md:text-xl my-4 md:my-10 uppercase">
            Register
          </h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="text-gray-500">Username *</label>
              <br />
              <input
                type="text"
                name="name"
                className="md:py-[10px] py-2 mt-2 mb-4 px-3 w-full md:w-[400px] md:px-5 bg-[#f3f4f7] border-[1px]  outline-none rounded-none"
              />
            </div>
            <div>
              <label className="text-gray-500">Email address *</label>
              <br />
              <input
                type="text"
                name="email"
                className="md:py-[10px] py-2 mt-2 mb-4 px-3 w-full md:w-[400px] md:px-5 bg-[#f3f4f7] border-[1px]  outline-none rounded-none"
              />
            </div>
            <div className="relative">
              <label className="text-gray-500">Password *</label>
              <br />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="md:py-[10px] py-2 mt-2  px-3 w-full md:w-[400px] md:px-5 bg-[#f3f4f7] border-[1px]  outline-none rounded-none"
              />
              {showPassword ? (
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-[45px] right-[10px] cursor-pointer"
                >
                  <Eye size={20} className="text-gray-500" />
                </span>
              ) : (
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-[45px] right-[10px] cursor-pointer"
                >
                  <EyeOff size={20} className="text-gray-500" />
                </span>
              )}
            </div>
            <button className="bg-[#80b500] text-white text-lg w-full py-[10px] mt-4">
              Login
            </button>
          </form>
          <div>
            <h2 className="mt-4 text-gray-500">
              Do not Have An Account ?{" "}
              <Link href="/api/login" className="text-[#80b500]">
                Login
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
