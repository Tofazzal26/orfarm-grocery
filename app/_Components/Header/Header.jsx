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
import { Menu, Search, ShoppingCart, UserRound } from "lucide-react";
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
  const handleLocation = (local) => {
    console.log(local);
  };

  const handleSearch = (search) => {
    console.log(search.target.value);
  };

  return (
    <div className="px-2 md:px-0">
      <div className="border-b-[1px] border-t-[1px] mt-4 md:mt-8 py-3 md:py-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex gap-12 items-center">
                <div className="flex gap-2 items-center cursor-pointer">
                  <div className="md:hidden lg:hidden flex">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild className="border-none">
                        <Button variant="outline">
                          <Menu className="text-gray-600" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56">
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>HOME</DropdownMenuItem>
                        <DropdownMenuItem>SHOP</DropdownMenuItem>
                        <DropdownMenuItem>Food & DRINKS</DropdownMenuItem>
                        <DropdownMenuItem>BAKERY</DropdownMenuItem>
                        <DropdownMenuItem>BEVERAGES</DropdownMenuItem>
                        <DropdownMenuItem>BLOG</DropdownMenuItem>
                        <DropdownMenuItem>CONTACT</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <div className="md:flex hidden">
                    <Image
                      src="/logo1.png"
                      className="md:w-[50px] w-[30px]"
                      width={50}
                      height={40}
                      alt="logo"
                    />
                  </div>
                  <div>
                    <h2 className="md:text-2xl text-[16px]">Orfarm Grocery</h2>
                    <p className="text-sm text-gray-400 hidden md:flex">
                      Online Grocery Shopping Center
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex">
                  <Select onValueChange={handleLocation}>
                    <SelectTrigger className="w-[180px] h-[50px]">
                      <SelectValue placeholder="Select a Location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Location</SelectLabel>
                        <SelectItem value="California">California</SelectItem>
                        <SelectItem value="Florida">Florida</SelectItem>
                        <SelectItem value="New_York">New York</SelectItem>
                        <SelectItem value="Washington">Washington</SelectItem>
                        <SelectItem value="Alaska">Alaska</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="lg:flex items-center hidden ml-8 gap-6">
                <div>
                  <div className="relative">
                    <input
                      onChange={handleSearch}
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
                    <h2 className="text-xl text-gray-600 mr-4 hidden md:flex">
                      $0.00
                    </h2>
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
          <div className="mt-0 lg:mt-4">
            <Navbar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
