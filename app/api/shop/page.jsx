"use client";

import { useState } from "react";

const Shop = () => {
  const [price, setPrice] = useState(40);

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
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
        </div>
        <div className="">
          <h1>Product</h1>
        </div>
      </div>
    </div>
  );
};

export default Shop;
