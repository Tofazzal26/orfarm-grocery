"use client";

import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const route = useRouter();
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    const formData = new FormData();
    if (image) {
      formData.append("image", image);
    } else {
      console.error("No image selected!");
      return;
    }
    try {
      const response = await axios.post(
        "https://api.imgbb.com/1/upload",
        formData,
        {
          params: {
            key: process.env.NEXT_PUBLIC_ImageBB_API_Key,
          },
        }
      );

      setImageUrl(response.data.data.url);
      console.log(response.data.data.url, "48");
    } catch (error) {
      console.error("Error uploading image:", error);
    }

    console.log(imageUrl);

    // try {
    //   const resp = await axios.post(`http://localhost:3000/api/User`, {
    //     name,
    //     email,
    //     password,
    //   });
    //   if (resp.data.status === 200) {
    //     const res = await signIn("credentials", {
    //       email,
    //       password,
    //       redirect: false,
    //     });
    //     if (res.status === 200) {
    //       route.push("/");
    //       toast.success("Register Success");
    //     }
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
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
                required
                className="md:py-[10px] py-2 mt-2 mb-4 px-3 w-full md:w-[400px] md:px-5 bg-[#f3f4f7] border-[1px]  outline-none rounded-none"
              />
            </div>
            <div className="mb-2">
              <label className="text-gray-500">Select Photo *</label>
              <br />
              <input
                onChange={handleImageChange}
                type="file"
                required
                className="file-input w-full bg-[#f3f4f7] text-gray-500 py-[10px] px-5"
              />
            </div>
            <div>
              <label className="text-gray-500">Email address *</label>
              <br />
              <input
                type="text"
                name="email"
                required
                className="md:py-[10px] py-2 mt-2 mb-4 px-3 w-full md:w-[400px] md:px-5 bg-[#f3f4f7] border-[1px]  outline-none rounded-none"
              />
            </div>
            <div className="relative">
              <label className="text-gray-500">Password *</label>
              <br />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
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
              Register
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
