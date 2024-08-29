import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center items-center my-[100px]">
      <div className="border-2 rounded-md">
        <div className="px-[60px] pb-14">
          <h1 className="text-center text-xl my-10">LOGIN</h1>
          <form>
            <div>
              <label className="text-gray-500">
                Username or email address *
              </label>
              <br />
              <input
                type="text"
                className="md:py-[10px] py-2 mt-2 mb-4 px-3 w-[400px] md:px-5 bg-[#f3f4f7] border-[1px]  outline-none rounded-none"
              />
            </div>
            <div>
              <label className="text-gray-500">Password *</label>
              <br />
              <input
                type="text"
                className="md:py-[10px] py-2 mt-2 px-3 w-[400px] md:px-5 bg-[#f3f4f7] border-[1px]  outline-none rounded-none"
              />
            </div>
            <button className="bg-[#80b500] text-white text-lg w-full py-[10px] mt-4">
              Login
            </button>
          </form>
          <div>
            <h2 className="mt-4 text-gray-500">
              Do not Have An Account ?{" "}
              <Link href="/api/register" className="text-[#80b500]">
                Register
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
