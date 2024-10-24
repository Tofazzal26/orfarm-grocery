import { ArrowDown, ArrowUp, EllipsisVertical } from "lucide-react";
import React from "react";
import BarChart from "./BarChart/page";
import RoundedChart from "./RoundedChart/page";
import LineChart from "./LineChart/page";

const AdminDashBoard = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-3 md:gap-6">
        <div className="col-span-4">
          <div className="text-base bg-white rounded-md md:h-[205px] h-[342px] shadow-Cards">
            <div className="p-6 flex md:flex-row flex-col justify-between">
              <div>
                <h1 className="text-[#696cff] text-[18px]">
                  Congratulations Tofazzal! 🎉
                </h1>
                <p className="text-[#767f88] text-[15px] md:w-[250px] my-4">
                  You have done 72% more sales today. Check your new badge in
                  your profile.
                </p>
                <button className="border-[#696cff] text-[#696cff] border-[1px] hover:text-white hover:bg-[#696cff] transition-all ease-in-out text-[13px] rounded-sm px-4 py-[3px]">
                  View Badges
                </button>
              </div>
              <div>
                <img
                  src="/man-with-laptop.png"
                  alt=""
                  className="md:mr-8 md:mt-0  ml-[12px]"
                />
              </div>
            </div>
          </div>
          <div className="text-base bg-white rounded-md shadow-Cards md:mt-6 mt-3">
            <div className="p-6">
              <div className="flex gap-4">
                <div>
                  <div className="flex justify-between ">
                    <h2 className="text-[18px] text-[#57626c]">
                      Total Revenue
                    </h2>
                    <EllipsisVertical size={20} className="text-gray-400" />
                  </div>
                  <BarChart />
                </div>
                <div className="flex-1 border-l-[1px] border-gray-300 space-y-5">
                  <div className="flex justify-center">
                    <button className="border-[#696cff] text-[#696cff] border-[1px] hover:text-white hover:bg-[#696cff] transition-all ease-in-out text-[18px] rounded-sm px-6 py-[6px]">
                      2024
                    </button>
                  </div>
                  <div className="flex justify-center">
                    <RoundedChart />
                  </div>
                  <h2 className="text-center text-[17px] text-[#57626c]">
                    62% Company Growth
                  </h2>
                  <div className="flex justify-center items-center">
                    <div className="flex items-center gap-[60px]">
                      <div className="flex items-center gap-2">
                        <div className="w-[40px] bg-[#e7e7ff] rounded-md">
                          <h2 className="text-[#696cfe] flex justify-center items-center text-[24px] py-2">
                            $
                          </h2>
                        </div>
                        <div>
                          <h2 className="text-sm text-gray-500">2023</h2>
                          <h2 className="text-gray-600">$32.5k</h2>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-[40px] bg-[#e7e7ff] rounded-md">
                          <img
                            src="/wallet-info.png"
                            alt=""
                            className="w-[38px]"
                          />
                        </div>
                        <div>
                          <h2 className="text-sm text-gray-500">2022</h2>
                          <h2 className="text-gray-600">$41.2k</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="flex md:flex-row flex-col md:items-center gap-3 md:gap-6">
            <div className="text-base bg-white rounded-md md:w-[220px] w-[290px]  h-[205px] shadow-Cards">
              <div className="p-6 space-y-3">
                <div className="flex justify-between">
                  <div>
                    <img src="/chart-success.png" alt="" className="w-[40px]" />
                  </div>
                  <div>
                    <EllipsisVertical size={20} className="text-gray-400" />
                  </div>
                </div>
                <div className="space-y-3">
                  <h2 className="text-[16px] text-[#767f88]">Profit</h2>
                  <h2 className="text-[28px] text-[#384551]">$12,628</h2>
                  <h2 className="text-[#74de3c] flex gap-2 items-center">
                    <ArrowUp size={18} /> +72.80%
                  </h2>
                </div>
              </div>
            </div>
            <div className="text-base bg-white rounded-md md:w-[220px] w-[290px] h-[205px] shadow-Cards">
              <div className="p-6 space-y-3">
                <div className="flex justify-between">
                  <div>
                    <img src="/wallet-info.png" alt="" className="w-[40px]" />
                  </div>
                  <div>
                    <EllipsisVertical size={20} className="text-gray-400" />
                  </div>
                </div>
                <div className="space-y-3">
                  <h2 className="text-[16px] text-[#767f88]">Sales</h2>
                  <h2 className="text-[28px] text-[#384551]">$4,679</h2>
                  <h2 className="text-[#74de3c] flex gap-2 items-center">
                    <ArrowUp size={18} /> +28.42%
                  </h2>
                </div>
              </div>
            </div>
          </div>
          {/* second row box  */}
          <div className="flex md:flex-row flex-col md:items-center gap-3 md:gap-6 mt-3 md:mt-6">
            <div className="text-base bg-white rounded-md md:w-[220px] w-[290px]  h-[205px] shadow-Cards">
              <div className="p-6 space-y-3">
                <div className="flex justify-between">
                  <div>
                    <img src="/paypal.png" alt="" className="w-[40px]" />
                  </div>
                  <div>
                    <EllipsisVertical size={20} className="text-gray-400" />
                  </div>
                </div>
                <div className="space-y-3">
                  <h2 className="text-[16px] text-[#767f88]">Payments</h2>
                  <h2 className="text-[28px] text-[#384551]">$2,456</h2>
                  <h2 className="text-[#e6381a] flex gap-2 items-center">
                    <ArrowDown size={18} /> -14.82%
                  </h2>
                </div>
              </div>
            </div>
            <div className="text-base bg-white rounded-md md:w-[220px] w-[290px] h-[205px] shadow-Cards">
              <div className="p-6 space-y-3">
                <div className="flex justify-between">
                  <div>
                    <img src="/cc-primary.png" alt="" className="w-[40px]" />
                  </div>
                  <div>
                    <EllipsisVertical size={20} className="text-gray-400" />
                  </div>
                </div>
                <div className="space-y-3">
                  <h2 className="text-[16px] text-[#767f88]">Transactions</h2>
                  <h2 className="text-[28px] text-[#384551]">$14,857</h2>
                  <h2 className="text-[#74de3c] flex gap-2 items-center">
                    <ArrowUp size={18} /> +28.14%
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-Cards w-[460px] rounded-md mt-3 md:mt-6">
            <div className="p-6">
              <div className="flex items-center gap-4 md:gap-8">
                <div className="h-[120px]">
                  <h2 className="text-gray-600 text-[20px]">Profile Report</h2>
                  <button className="text-[#ffb41c] bg-[#fff2d6] px-3 text-[16px] rounded-md">
                    YEAR 2022
                  </button>
                  <h2 className="text-[#74de3c] flex gap-2 items-center text-[16px]">
                    <ArrowUp size={18} /> -14.82%
                  </h2>
                  <h2 className="text-[#384551]">$84,686k</h2>
                </div>
                <div className="">
                  <LineChart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoard;
