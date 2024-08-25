"use client";
import * as React from "react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, ShoppingCart, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CalendarDays } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <div className="border-b-[1px] border-t-[1px] mt-12 py-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex gap-12 items-center">
              <div className="flex gap-2 items-center cursor-pointer">
                <Image src="/logo1.png" width={50} height={40} alt="logo" />
                <div>
                  <h2 className="text-2xl">Orfarm Grocery</h2>
                  <p className="text-sm text-gray-400">
                    Online Grocery Shopping Center
                  </p>
                </div>
              </div>
              <div>
                <Select>
                  <SelectTrigger className="w-[180px] h-[50px]">
                    <SelectValue placeholder="Select a Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Category</SelectLabel>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex items-center ml-8 gap-6">
              <div>
                <div className="relative">
                  <input
                    className="bg-[#f3f4f7] outline-none px-8 py-4 rounded-md w-[600px]"
                    type="text"
                    placeholder="Search for products..."
                  />
                  <div className="absolute right-6 cursor-pointer top-4">
                    <Search className="text-gray-600" />
                  </div>
                </div>
              </div>
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild className="rounded-full">
                    <Button variant="outline">
                      <UserRound className="text-gray-600" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Tofazzal</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Option 1</DropdownMenuItem>
                    <DropdownMenuItem>Option 2</DropdownMenuItem>
                    <DropdownMenuItem>Option 3</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* cart section */}
          </div>
          <div>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="link">
                  <h2 className="text-xl text-gray-600 mr-4">$0.00</h2>
                  <div>
                    <div className="bg-[#fff1ee] w-[45px] relative h-[45px] flex justify-center items-center rounded-full">
                      <ShoppingCart className="text-red-400" size={20} />
                      <span className="bg-red-600 top-[-2px] right-[-3px] absolute w-[18px] h-[18px] flex justify-center items-center rounded-full text-white">
                        0
                      </span>
                    </div>
                  </div>
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-1">
                  <h2>Content Here</h2>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
        <div className="mt-4">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Header;
