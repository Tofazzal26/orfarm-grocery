import React from "react";
import ImageStyle from "./BakeryStyle/Bakery.module.css";
const BakeryCards = ({ item }) => {
  const { image, title, paragraph } = item || {};

  return (
    <div>
      <div className="cursor-pointer">
        <div className={`${ImageStyle.imageParent} ${ImageStyle.parentStyle}`}>
          <img
            src={image}
            alt=""
            className={`object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500 ${ImageStyle.imageStyle} ${ImageStyle.parentStyle}`}
          />
        </div>
        <div className="flex flex-col justify-between mt-4 space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl">{title}</h2>
            <p className="dark:text-gray-800">{paragraph}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BakeryCards;
