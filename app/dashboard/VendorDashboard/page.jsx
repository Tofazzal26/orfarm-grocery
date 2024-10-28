import { DollarSign, Box, ShoppingBag, TrendingUp } from "lucide-react";
import VendorRevenueChart from "./VendorRevenueChart/page";

const VendorDashboard = () => {
  return (
    <div>
      {/* VendorStatistics code start */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-100">
        {/* Total Earnings */}
        <div className="flex items-center bg-white cursor-pointer shadow-md rounded-lg py-8 px-8 hover:bg-blue-50 transition duration-200">
          <div className="text-blue-500">
            <DollarSign className="w-10 h-10" />
          </div>
          <div className="ml-4">
            <h3 className="text-2xl font-semibold text-gray-800">5000</h3>
            <p className="text-gray-600">Total Earnings</p>
          </div>
        </div>

        {/* Total Products */}
        <div className="flex items-center bg-white shadow-md cursor-pointer rounded-lg py-8 px-8 hover:bg-orange-50 transition duration-200">
          <div className="text-orange-500">
            <Box className="w-10 h-10" />
          </div>
          <div className="ml-4">
            <h3 className="text-2xl font-semibold text-gray-800">120</h3>
            <p className="text-gray-600">Total Products</p>
          </div>
        </div>

        {/* Total Orders */}
        <div className="flex items-center bg-white shadow-md cursor-pointer rounded-lg py-8 px-8 hover:bg-red-50 transition duration-200">
          <div className="text-red-500">
            <ShoppingBag className="w-10 h-10" />
          </div>
          <div className="ml-4">
            <h3 className="text-2xl font-semibold text-gray-800">320</h3>
            <p className="text-gray-600">Total Orders</p>
          </div>
        </div>

        {/* Total Sales */}
        <div className="flex items-center bg-white shadow-md cursor-pointer rounded-lg py-8 px-8 hover:bg-green-50 transition duration-200">
          <div className="text-green-500">
            <TrendingUp className="w-10 h-10" />
          </div>
          <div className="ml-4">
            <h3 className="text-2xl font-semibold text-gray-800">200</h3>
            <p className="text-gray-600">Total Sales</p>
          </div>
        </div>
      </div>
      {/* VendorStatistics code end */}
      <div className=" w-[1500px] mx-auto">
        <VendorRevenueChart />
      </div>
    </div>
  );
};

export default VendorDashboard;
