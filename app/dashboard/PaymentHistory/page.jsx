import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";
import React from "react";

const PaymentHistory = () => {
  const session = useSession();
  const email = session?.data?.user?.email;
  const { data: UserPaymentHistory = [] } = useQuery({
    queryKey: ["UserPaymentHistory"],
    queryFn: async () => {
      const resp = await axios.get(
        `http://localhost:3000/api/UserPaymentHistory/${email}`
      );
      return resp?.data?.data;
    },
  });

  return (
    <div>
      <div>
        <div className="bg-white md:px-8 md:py-2 overflow-auto">
          <h2 className="text-lg md:text-2xl my-4">My Payment History</h2>

          <div className="relative">
            <div className="rounded-lg">
            <table className="min-w-full bg-white border mb-20">
  <thead>
    <tr className="bg-[#2B4DC994] text-center text-xs md:text-sm font-thin text-white">
      <th className="p-0">
        <span className="block uppercase py-2 px-3 border-r border-gray-300">
          transaction_id
        </span>
      </th>
      <th className="p-0 hidden md:table-cell">
        <span className="block uppercase py-2 px-3 border-r border-gray-300">
          Payment_Date
        </span>
      </th>
      <th className="p-0 hidden md:table-cell">
        <span className="block uppercase py-2 px-3 border-r border-gray-300">
          Price
        </span>
      </th>
      <th className="p-0">
        <span className="block uppercase py-2 px-3 border-r border-gray-300">
          status
        </span>
      </th>
    </tr>
  </thead>
  <tbody>
    {UserPaymentHistory.map((item, idx) => (
      <tr
        key={idx}
        className="border-b text-xs md:text-sm text-center text-gray-800"
      >
        <td className="p-2 md:p-4">{item?.transaction}</td>
        <td className="p-2 md:p-4 hidden md:table-cell">
          {new Date(item?.date).toLocaleDateString("en-GB")}
        </td>
        <td className="p-2 md:p-4 hidden md:table-cell">{item?.price}$</td>
        <td className="p-2 md:p-4">
          {item?.status === "pending" ? (
            <span className="bg-orange-200 px-3 py-[7px] text-gray-800 rounded">
              {item?.status}
            </span>
          ) : (
            <span className="bg-green-500 px-3 py-[7px] text-white rounded">
              On The Way
            </span>
          )}
        </td>
      </tr>
    ))}
  </tbody>
</table>


              {UserPaymentHistory?.length === 0 && (
                <>
                  <div className="flex items-center flex-col xl:mb-4">
                    <img
                      src="/no-payment.png"
                      alt=""
                      className="xl:w-[300px] xl:h-[300px]"
                    />
                    <h2>No Payment History</h2>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
