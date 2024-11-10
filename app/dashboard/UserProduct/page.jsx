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

import { Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm/page";

const UserProduct = () => {
  const session = useSession();
  const { setTotalPrice, totalPrice } = useContext(AuthProduct);
  const [userProduct, setUserProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 4;
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
    setTotalPrice(carts);
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

  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLIC_API_KEY
  );

  const totalProductPrice = userProduct.reduce(
    (before, prev) => parseInt(before) + parseInt(prev.price),
    0
  );

  // console.log(userProduct);

  // console.log(paginationData.length);

  return (
    <div>
      <div className="bg-white md:px-8 md:py-2 overflow-auto">
        <div>
          <div className="flex justify-between items-center">
            <h2 className="text-lg md:text-2xl my-4">My Product</h2>
            <h2 className="text-lg md:text-2xl my-4">
              Total Price: {totalProductPrice}$
            </h2>
            <div>
              {paginationData?.length === 0 ? (
                <button className="bg-[#8498e0] px-4 text-white text-base py-[8px] rounded-md">
                  Pay
                </button>
              ) : (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="bg-none">
                      <button className="bg-[#8498e0] px-4 text-white text-base py-[8px] rounded-md">
                        Pay
                      </button>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px]">
                    <div className="p-4">
                      <Elements stripe={stripePromise}>
                        <CheckoutForm></CheckoutForm>
                      </Elements>
                    </div>
                  </DialogContent>
                </Dialog>
              )}
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-lg">
            <table className="w-full bg-white border mb-4">
              <thead>
                <tr className="bg-[#2B4DC994] text-center text-xs md:text-sm font-thin text-white">
                  <th className="p-0">
                    <span className="block py-2 px-3 border-r border-gray-300">
                      IMAGE
                    </span>
                  </th>
                  <th className="p-0 hidden md:table-cell">
                    <span className="block py-2 px-3 border-r border-gray-300">
                      TITLE
                    </span>
                  </th>
                  <th className="p-0 hidden md:table-cell">
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
                    <td className="p-2 md:p-4 hidden md:table-cell">
                      {item?.title}
                    </td>
                    <td className="p-2 md:p-4 hidden md:table-cell">
                      {item?.category}
                    </td>
                    <td className="p-2 md:p-4">{item?.quantity}</td>
                    <td className="p-2 md:p-4">${item?.price}</td>
                    <td className="relative p-2 md:p-4">
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

            {paginationData?.length === 0 && (
              <>
                <div className="flex items-center flex-col">
                  <img
                    src="/no-found.png"
                    alt=""
                    className="xl:w-[300px] xl:h-[300px]"
                  />
                  <h2>No Product</h2>
                </div>
              </>
            )}
            <div className="flex md:justify-between md:flex-row flex-col items-center">
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
                  className={`bg-green-500 px-[7px] py-[12px] text-white pt-1 flex items-center ml-[4px] justify-center rounded-md ${currentPage === totalPages ? "bg-green-400" : ""}`}
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
