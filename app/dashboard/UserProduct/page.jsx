"use client";

import { AuthProduct } from "@/app/Services/ProductProvider/ProductProvider";
import {
  CircleDollarSign,
  Trash2,
  Trash,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { useSession } from "next-auth/react";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
const UserProduct = () => {
  const session = useSession();
  const [userProduct, setUserProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 3;
  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;
  const paginationData = userProduct.slice(startIndex, endIndex);
  const totalPages = Math.ceil(userProduct.length / itemPerPage);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  useEffect(() => {
    const carts = JSON.parse(localStorage.getItem("carts")) || [];
    setUserProduct(carts);
  }, []);
  const product = userProduct.filter(
    (item) => item.email === session?.data?.user?.email
  );

  const handleDeleteProduct = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete it?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const filterPrd = product.filter((item) => item.prdID !== id);
        setUserProduct(filterPrd);
        localStorage.setItem("carts", JSON.stringify(filterPrd));

        Swal.fire({
          title: "Deleted!",
          text: "Your product has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <div className="bg-white md:px-8 md:py-2 overflow-auto">
        <h2 className="text-lg md:text-2xl mb-4">My Product</h2>

        <div className="relative overflow-auto">
          <div className="overflow-x-auto rounded-lg">
            <table className="min-w-full bg-white border mb-4">
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
                {paginationData.map((item) => (
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
                    <td className="p-2 md:p-4">${item?.price}</td>
                    <td className="relative p-2 md:p-4 flex justify-center space-x-2">
                      <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-xs md:text-sm">
                        <CircleDollarSign size={20} />
                      </button>
                      <button
                        onClick={() => handleDeleteProduct(item?.prdID)}
                        className="bg-red-500 text-white px-3 py-1 rounded-md text-xs md:text-sm"
                      >
                        <Trash size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex justify-between items-center">
              <div>
                <h1></h1>
              </div>
              <div className="flex justify-center items-center">
                <button
                  onClick={handlePrevious}
                  className={`bg-green-500 px-[7px] py-[12px] text-white pt-1 flex items-center mr-[4px] justify-center rounded-md ${currentPage === 1 ? "bg-green-400" : ""}`}
                >
                  <ChevronLeft size={25} />
                </button>
                {pageNumbers.map((item) => (
                  <button
                    key={item}
                    onClick={() => setCurrentPage(item)}
                    className={`px-4 py-1 ${
                      currentPage === item
                        ? "bg-green-500 text-white"
                        : "bg-gray-300 text-black"
                    } rounded-md mx-1`}
                  >
                    {item}
                  </button>
                ))}
                <button
                  onClick={handleNext}
                  className="bg-green-500 px-[7px] py-[12px] text-white pt-1 flex items-center ml-[4px] justify-center rounded-md"
                >
                  <ChevronRight size={25} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProduct;
