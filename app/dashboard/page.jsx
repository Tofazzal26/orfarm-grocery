"use client";
import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ShoppingCart,
  User,
  FileText,
  LogOut,
  Heart,
  ChevronRight,
} from "lucide-react";
import UserProduct from "./UserProduct/page";
import UserProfile from "./UserProfile/page";
import UserWishList from "./UserWishList/page";
import { AuthProduct } from "../Services/ProductProvider/ProductProvider";

const Sidebar = () => {
  const [selected, setSelected] = useState("my-product");
  const router = useRouter();
  const { userRole } = useContext(AuthProduct);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  console.log(userRole?.data);

  const NAV_ITEMS = [
    { id: "my-product", label: "My Product", icon: <ShoppingCart /> },
    { id: "my-wishlist", label: "My Wishlist", icon: <Heart /> },
    { id: "my-profile", label: "My Profile", icon: <User /> },
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
            <button className="md:text-[16px] bg-[#22c55e] md:px-4 px-[10px] py-[6px] md:py-2 rounded-md text-[14px] mt-2">
              Become a vendor
            </button>
          </div>
        </div>
      </div>
      <div className="flex h-[calc(100vh-83px)]">
        {/* Sidebar */}
        <div className="md:hidden flex z-50">
          <button
            className="px-2 py-2 bg-blue-500 text-white fixed top-[80px] rounded-r-md left-[-0px]"
            onClick={toggleDrawer}
          >
            <ChevronRight />
          </button>

          <div
            className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out p-5`}
          >
            <button className="p-4 text-white" onClick={toggleDrawer}>
              Close
            </button>

            {/* Navigation Menu */}
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
        </div>
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
        <div className="flex-grow px-6 py-4 mt-8 md:mt-0">
          <div className="text-2xl font-bold">
            {selected === "my-product" && <UserProduct />}
            {selected === "my-profile" && <UserProfile />}
            {selected === "my-wishlist" && <UserWishList />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
