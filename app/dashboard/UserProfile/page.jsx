import React from "react";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import { useSession } from "next-auth/react";
const UserProfile = () => {
  const session = useSession();

  return (
    <div className="mt-2 md:mt-[60px]">
      <div className=" w-[270px] md:w-[512px] mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {" "}
        {/* Card width responsive */}
        <div
          className="bg-cover bg-center h-40 sm:h-56"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1503264116251-35a269479413')`,
          }}
        ></div>
        <div className="p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-200 rounded-full overflow-hidden">
              <img
                className="object-cover w-full h-full"
                src={session?.data?.user?.image}
                alt="Profile"
              />
            </div>
            <div className="sm:ml-6 mt-4 sm:mt-0 text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
                {session?.data?.user?.name}
              </h2>
              <p className="text-gray-600 text-[18px] md:text-xl">
                {session?.data?.user?.email}
              </p>
            </div>
          </div>
          <p className="mt-2 sm:mt-6 text-gray-600 text-center md:text-xl text-[15px] sm:text-left">
            Experienced in React, Next.js, and building responsive eCommerce
            platforms. Passionate about UI design and development.
          </p>

          {/* Centered Social Icons */}
          <div className="mt-6 flex justify-center space-x-6 sm:space-x-8">
            {" "}
            {/* Centered and responsive spacing */}
            <a
              href="https://facebook.com"
              className="text-blue-600 hover:text-blue-800 transition transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={28} />
            </a>
            <a
              href="https://linkedin.com"
              className="text-blue-500 hover:text-blue-700 transition transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="https://twitter.com"
              className="text-blue-400 hover:text-blue-600 transition transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter size={28} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
