"use client";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { Eye, Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";
import Card from "./Card/card.module.css";
const ProductCard = () => {
  const [rating, setRating] = useState(3);

  return (
    <div>
      <div className={`max-w-xs border-[1px] ${Card.card} relative`}>
        <img
          src="https://i.ibb.co/nmjtJhp/4.png"
          alt=""
          className={`object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500 ${Card.cardImage}`}
        />
        <div className="absolute top-5 right-5">
          <span className="bg-[#80b500] text-white px-4 text-sm py-1 rounded-tl-[15px] rounded-tr-none rounded-bl-none rounded-br-[15px]">
            NEW
          </span>
        </div>
        <div className={Card.overlay}>
          <div className="flex justify-center items-center gap-2">
            <button className="w-[40px] bg-white h-[40px] rounded-full flex justify-center items-center">
              <Eye size={16} />
            </button>
            <button className="w-[40px] bg-white h-[40px] rounded-full flex justify-center items-center">
              <ShoppingCart size={16} />
            </button>
            <button className="w-[40px] bg-white h-[40px] rounded-full flex justify-center items-center">
              <Heart size={16} />
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-between p-6 items-center text-center">
          <div className="space-y-2 flex flex-col justify-center items-center">
            <Rating
              style={{ maxWidth: 100 }}
              value={rating}
              onChange={setRating}
              readOnly
              className=""
            />
            <h2 className="text-lg">Carrots Group Scol</h2>
            <div className="flex items-center gap-2">
              <h2 className="text-[23px] text-[#80b500]">$32.00</h2>
              <h2 className="text-[23px] text-[#b3d366]">
                <del>$42.00</del>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
