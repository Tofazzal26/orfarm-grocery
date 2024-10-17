"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ShoppingCart, User, FileText, LogOut } from "lucide-react";
import UserProduct from "./UserProduct/page";
import UserProfile from "./UserProfile/page";
import UserInVoiceHistory from "./UserInVoiceHistory/page";

const Sidebar = () => {
  const [selected, setSelected] = useState("my-product");
  const router = useRouter();

  const NAV_ITEMS = [
    { id: "my-product", label: "My Product", icon: <ShoppingCart /> },
    { id: "my-profile", label: "My Profile", icon: <User /> },
    { id: "invoice-history", label: "Invoice History", icon: <FileText /> },
    { id: "exit", label: "Exit", icon: <LogOut /> },
  ];

  const handleNavigation = (id) => {
    if (id === "exit") {
      router.push("/");
    } else {
      setSelected(id);
    }
  };

  return (
    <div className="">
      <div className="bg-[#1f2937] text-white py-4 border-b-[1px] border-gray-600">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 ml-4">
            {" "}
            <img src="/logo1.png" alt="logo" className="md:w-[50px] w-[30px]" />
            <h1 className="md:text-[25px] text-[16px] mt-2">Orfarm-Grocery</h1>
          </div>
          <div className="mr-4">
            <h1 className="md:text-[16px] text-[14px] mt-2">
              Tofazzal Hossain
            </h1>
          </div>
        </div>
      </div>
      <div className="flex h-[calc(100vh-83px)]">
        {/* Sidebar */}
        <div className="w-64 bg-gray-800 text-white h-full p-5 lg:block hidden">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li
                key={item.id}
                className={`p-4 flex items-center gap-3 cursor-pointer rounded-md ${
                  selected === item.id ? "bg-green-500" : "hover:bg-gray-700"
                }`}
                onClick={() => handleNavigation(item.id)}
              >
                {item.icon}
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Main content */}
        <div className="flex-grow px-6 py-4">
          <h1 className="text-2xl font-bold">
            {selected === "my-product" && <UserProduct />}
            {selected === "my-profile" && <UserProfile />}
            {selected === "invoice-history" && <UserInVoiceHistory />}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
