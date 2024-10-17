import React from "react";
import { useContext, useEffect, useState } from "react";
import { CircleDollarSign, Trash2, Trash } from "lucide-react";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
const UserWishList = () => {
  const [userWishlistProduct, setUserWishlistProduct] = useState([]);
  useEffect(() => {
    const carts = JSON.parse(localStorage.getItem("wishlist")) || [];
    setUserWishlistProduct(carts);
  }, []);

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
        const filterPrd = userWishlistProduct.filter(
          (item) => item.prdID !== id
        );
        setUserWishlistProduct(filterPrd);
        localStorage.setItem("wishlist", JSON.stringify(filterPrd));
        Swal.fire({
          title: "Deleted!",
          text: "Your product has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const handleAddProduct = (prd) => {
    const carts = JSON.parse(localStorage.getItem("carts")) || [];
    const filterPrd = userWishlistProduct.filter(
      (item) => item.prdID !== prd.prdID
    );
    setUserWishlistProduct(filterPrd);
    localStorage.setItem("wishlist", JSON.stringify(filterPrd));
    carts.push(prd);
    localStorage.setItem("carts", JSON.stringify(carts));
    toast.success("Product to Carts Success");
  };

  return (
    <div>
      <div className="bg-white md:px-8 md:py-2 overflow-auto">
        <h2 className="text-lg md:text-2xl mb-4">My Wishlist</h2>

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
                {userWishlistProduct.map((item) => (
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
                      <button
                        onClick={() => handleAddProduct(item)}
                        className="bg-blue-500 text-white px-3 py-1 rounded-md text-xs md:text-sm"
                      >
                        Add
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserWishList;
