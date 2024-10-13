"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AuthProduct } from "@/app/Services/ProductProvider/ProductProvider";
import ProductCard from "@/app/_Components/OurProduct/ProductCard";
import { useContext, useState } from "react";

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(6);

  const [price, setPrice] = useState(60);
  const [status, setStatus] = useState({
    NEW: false,
    IN_STOCK: false,
  });

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleStatusChange = (e) => {
    const { name, checked } = e.target;
    setStatus((prevStatus) => ({
      ...prevStatus,
      [name]: checked,
    }));
  };

  const NewStatus = status.NEW === true && "NEW";
  const StockStatus = status.IN_STOCK === true && "In Stock";

  const {
    refetch,
    isLoading,
    data: { data: allProduct = [], totalCount = 0 } = {},
  } = useQuery({
    queryKey: [
      "allProduct",
      currentPage,
      itemPerPage,
      price,
      NewStatus,
      StockStatus,
    ],
    queryFn: async () => {
      const resp = await axios.get(
        `http://localhost:3000/api/AllProduct?page=${
          currentPage - 1
        }&size=${itemPerPage}&price=${price}&New=${NewStatus}&Stock=${StockStatus}`
      );
      return resp?.data;
    },
  });

  const totalProductCount = allProduct.length;
  const numberOfPage = Math.ceil(totalCount / itemPerPage);
  const pages = [];
  for (let index = 1; index <= numberOfPage; index++) {
    pages.push(index);
  }

  const handleNextPage = () => {
    if (currentPage < numberOfPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleCurrentPage = (crnPage) => {
    setCurrentPage(crnPage);
  };

  return (
    <div className="container mx-auto">
      <div className="flex  gap-[70px] my-[50px]">
        <div className="w-[280px]">
          <div>
            <h1 className="text-lg uppercase mb-4">Filter by price</h1>
            <div className="w-full">
              <div className="flex justify-between mb-2">
                <span>0</span>
                <span>{price}</span>
                <span>150</span>
              </div>
              <input
                type="range"
                min={0}
                max={150}
                value={price}
                className="range w-full"
                step={5}
                onChange={handlePriceChange}
              />
              <div className="flex w-full justify-between px-2 text-xs">
                <span>0</span>
                <span>20</span>
                <span>40</span>
                <span>60</span>
                <span>80</span>
                <span>100</span>
                <span>120</span>
                <span>150</span>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full">
              <h3 className="mb-4 text-lg font-semibold uppercase mt-8">
                Product Status
              </h3>
              <div className="flex items-center space-x-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="NEW"
                    className="checkbox checkbox-error"
                    checked={status.NEW}
                    onChange={handleStatusChange}
                  />
                  <span>NEW</span>
                </label>

                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="IN_STOCK"
                    className="checkbox checkbox-error"
                    checked={status.IN_STOCK}
                    onChange={handleStatusChange}
                  />
                  <span>In Stock</span>
                </label>
              </div>

              <div className="mt-4">
                <p className="text-sm">Selected Status:</p>
                <ul>
                  {status.NEW && <li>NEW</li>}
                  {status.OLD && <li>OLD</li>}
                  {status.IN_STOCK && <li>In Stock</li>}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <img src="/Banner2.gif" alt="" />
          </div>
        </div>
        <div className="">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
            {allProduct.map((item) => (
              <ProductCard item={item} key={item._id} />
            ))}
          </div>

          <div className="space-x-2 mt-8">
            <button
              onClick={handlePrevPage}
              className="bg-[#80b500] px-4 py-2 text-white rounded-md"
            >
              Prev
            </button>
            {pages.map((item, index) => (
              <button
                key={index + 1} // Adjust key to start from 1
                onClick={() => handleCurrentPage(index + 1)} // Start from page 1
                className={`border-[1px] text-base border-[#adcf5a] px-4 py-2 text-[#80b500] rounded-md ${
                  currentPage === index + 1 ? "bg-[#80b500] text-white" : ""
                }`}
              >
                {index + 1} {/* Display page numbers starting from 1 */}
              </button>
            ))}
            <button
              onClick={handleNextPage}
              className="bg-[#80b500] px-4 py-2 text-white rounded-md"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
