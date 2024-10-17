"use client";

import { AuthProduct } from "@/app/Services/ProductProvider/ProductProvider";
import { CircleDollarSign, Trash2, Trash } from "lucide-react";
import { useSession } from "next-auth/react";
import { useContext } from "react";

const UserProduct = () => {
  const session = useSession();
  const { UserAllProduct } = useContext(AuthProduct);
  const UserProduct = UserAllProduct.filter(
    (item) => item.email === session?.data?.user?.email
  );
  console.log(UserProduct);

  return (
    <div>
      <div className="bg-white md:px-8 md:py-2 overflow-auto">
        <h2 className="text-lg md:text-2xl mb-4">My Product</h2>

        <div className="relative overflow-auto">
          <div className="overflow-x-auto rounded-lg">
            <table className="min-w-full bg-white border mb-20">
              <thead>
                <tr className="bg-[#2B4DC994] text-center text-xs md:text-sm font-thin text-white">
                  <th className="p-0">
                    <span className="block py-2 px-3 border-r border-gray-300">
                      IMAGE
                    </span>
                  </th>
                  <th className="p-0">
                    <span className="block py-2 px-3 border-r border-gray-300">
                      TITLE
                    </span>
                  </th>
                  <th className="p-0">
                    <span className="block py-2 px-3 border-r border-gray-300">
                      CATEGORY
                    </span>
                  </th>
                  <th className="p-0">
                    <span className="block py-2 px-3 border-r border-gray-300">
                      QUANTITY
                    </span>
                  </th>
                  <th className="p-0">
                    <span className="block py-2 px-3 border-r border-gray-300">
                      PRICE
                    </span>
                  </th>
                  <th className="p-4 text-xs md:text-sm">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {UserProduct.map((item) => (
                  <tr
                    key={item?.prdID}
                    className="border-b text-xs md:text-sm text-center text-gray-800"
                  >
                    <td className="p-2 md:p-4">
                      <img src={item.image} alt="" className="w-[40px]" />
                    </td>
                    <td className="p-2 md:p-4">{item?.title}</td>
                    <td className="p-2 md:p-4">{item?.category}</td>
                    <td className="p-2 md:p-4">{item?.quantity}</td>
                    <td className="p-2 md:p-4">{item?.price}</td>
                    <td className="relative p-2 md:p-4 flex justify-center space-x-2">
                      <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-xs md:text-sm">
                        <CircleDollarSign size={20} />
                      </button>
                      <button className="bg-red-500 text-white px-3 py-1 rounded-md text-xs md:text-sm">
                        <Trash size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
                {/* <tr className="border-b text-xs md:text-sm text-center text-gray-800">
                  <td className="p-2 md:p-4">01</td>
                  <td className="p-2 md:p-4">className 1</td>
                  <td className="p-2 md:p-4">Beginner</td>
                  <td className="p-2 md:p-4">Beginner</td>
                  <td className="p-2 md:p-4">Beginner</td>
                  <td className="relative p-2 md:p-4 flex justify-center space-x-2">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-xs md:text-sm">
                      <CircleDollarSign size={20} />
                    </button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded-md text-xs md:text-sm">
                      <Trash size={20} />
                    </button>
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProduct;
