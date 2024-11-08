import {
  CircleDollarSign,
  Trash2,
  Trash,
  ChevronRight,
  ChevronLeft,
  Truck,
  X,
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";
const OrderManagement = () => {
  const session = useSession();
  const email = session?.data?.user?.email;

  const { data: OrderManageMent = [] } = useQuery({
    queryKey: ["OrderManageMent"],
    queryFn: async () => {
      const resp = await axios.get(
        `http://localhost:3000/api/VendorDeliveryPayment/${email}`
      );
      return resp?.data?.data;
    },
  });
  console.log(OrderManageMent);

  return (
    <div>
      <div className="bg-white md:px-8 md:py-2 overflow-auto">
        <h2 className="text-lg md:text-2xl my-4">Order Management</h2>

        <div className="relative overflow-auto">
          <div className="overflow-x-auto rounded-lg">
            <table className="min-w-full bg-white border mb-4">
              <thead>
                <tr className="bg-[#2B4DC994] text-center text-xs md:text-sm font-thin text-white">
                  <th className="p-0">
                    <span className="block py-2 px-3 border-r border-gray-300 uppercase">
                      Transaction ID
                    </span>
                  </th>
                  <th className="p-0">
                    <span className="block py-2 px-3 border-r border-gray-300 uppercase">
                      Total Amount
                    </span>
                  </th>
                  <th className="p-0">
                    <span className="block py-2 px-3 border-r border-gray-300 uppercase">
                      Product Category
                    </span>
                  </th>
                  <th className="p-0">
                    <span className="block py-2 px-3 border-r border-gray-300 uppercase">
                      Status
                    </span>
                  </th>

                  <th className="p-4 text-xs md:text-sm">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {OrderManageMent.map((item, idx) => (
                  <tr
                    key={idx}
                    className="border-b text-xs md:text-sm text-center text-gray-800"
                  >
                    <td className="p-2 md:p-4">{item?.transaction}</td>
                    <td className="p-2 md:p-4">{item?.price}$</td>
                    <td className="p-2 md:p-4">{item?.category}</td>
                    <td className="p-2 md:p-4">
                      <button className="bg-green-500 px-2 py-[6px] text-sm text-white rounded-md">Payed</button>
                    </td>

                    <td className="relative p-2 md:p-4">
                      <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-xs md:text-sm">
                        <Truck size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderManagement;
