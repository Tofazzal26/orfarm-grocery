"use client";

import { Apple, CakeSlice, Cherry, Fish, Salad } from "lucide-react";
import { useState } from "react";
import ProductCard from "./ProductCard";

const OurProduct = () => {
  const [toggle, setToggle] = useState(0);

  return (
    <div>
      <div className="text-center mt-[100px]">
        <h1 className="text-[50px]">Our Products</h1>
        <p className="text-[18px] text-gray-600">
          A highly efficient slip-ring scanner for today's diagnostic
          requirements.
        </p>
      </div>
      <div>
        <div className="my-[50px] flex justify-center items-center">
          <button
            onClick={() => setToggle(0)}
            className={`text-[18px]    pb-3 justify-center w-[200px] ${
              toggle === 0 && "border-[#80b500] text-[#80b500] border-b-2"
            }`}
          >
            FOOD & DRINKS
          </button>
          <Apple className="text-gray-400 pb-3" size={32} />
          <button
            onClick={() => setToggle(1)}
            className={`text-[18px]   pb-3 justify-center w-[200px] ${
              toggle === 1 && "border-[#80b500] text-[#80b500] border-b-2"
            }`}
          >
            VEGETABLES
          </button>
          <Salad className="text-gray-400 pb-3 " size={32} />
          <button
            onClick={() => setToggle(2)}
            className={`text-[18px]    pb-3 justify-center w-[200px] ${
              toggle === 2 && "border-[#80b500] text-[#80b500] border-b-2"
            }`}
          >
            DRIED FOODS
          </button>
          <Cherry className="text-gray-400 pb-3" size={32} />
          <button
            onClick={() => setToggle(3)}
            className={`text-[18px]    pb-3 justify-center w-[200px] ${
              toggle === 3 && "border-[#80b500] text-[#80b500] border-b-2"
            }`}
          >
            BREAD & CAKE
          </button>
          <CakeSlice className="text-gray-400 pb-3" size={32} />
          <button
            onClick={() => setToggle(4)}
            className={`text-[18px]    pb-3 justify-center w-[200px] ${
              toggle === 4 && "border-[#80b500] text-[#80b500] border-b-2"
            }`}
          >
            FISH & MEAT
          </button>
          <Fish className="text-gray-400 pb-3" size={32} />
        </div>
        <div>
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default OurProduct;