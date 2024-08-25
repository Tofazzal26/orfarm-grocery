"use client";
import React from "react";
import { Beef, CupSoda, Menu, Pizza, Soup, Cookie, Coffee } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import NavbarLink from "./NavbarLink";

const components = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
];

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <Select>
          <SelectTrigger className="w-[220px] py-6 px-4 bg-[#80b500] text-white rounded-full">
            <Menu size={18} />
            <SelectValue placeholder="ALL CATEGORIES" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center gap-2">
        <NavbarLink name={"HOME"} details={components} />
        <NavbarLink name={"SHOP"} details={components} />
        <button className="text-[18px] hover:bg-green-100 flex text-gray-700 items-center gap-2 px-[15px] py-[7px] uppercase rounded-md">
          <span>
            <Soup size={20} className="text-gray-500" />
          </span>
          Food & Drinks
        </button>
        <button className="text-[18px] hover:bg-green-100 flex text-gray-700 items-center gap-2 px-[15px] py-[7px] uppercase rounded-md">
          <span>
            <Cookie size={20} className="text-gray-500" />
          </span>{" "}
          Bakery
        </button>
        <button className="text-[18px] hover:bg-green-100 flex text-gray-700 items-center gap-2 px-[15px] py-[7px] uppercase rounded-md">
          <span>
            <Coffee size={20} className="text-gray-500" />
          </span>{" "}
          Beverages
        </button>
        <button className="text-[18px] hover:bg-green-100 px-[15px] text-gray-700 py-[7px] uppercase rounded-md">
          Blog
        </button>
        <button className="text-[18px] hover:bg-green-100 px-[15px] text-gray-700 py-[7px] uppercase rounded-md">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Navbar;
