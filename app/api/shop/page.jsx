"use client";

import { useState } from "react";

const Shop = () => {
  const [price, setPrice] = useState(40);
  const [status, setStatus] = useState({
    NEW: false,
    OLD: false,
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

  console.log(status);

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
                    name="OLD"
                    className="checkbox checkbox-error"
                    checked={status.OLD}
                    onChange={handleStatusChange}
                  />
                  <span>OLD</span>
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
          <h1>Product</h1>
        </div>
      </div>
    </div>
  );
};

export default Shop;
