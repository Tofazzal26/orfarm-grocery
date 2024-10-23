import { ArrowUp, EllipsisVertical } from "lucide-react";
import React from "react";

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
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoard;
