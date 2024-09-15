import React from "react";

const FoodDrinks = () => {
  return (
    <div>
      <div className="bg-[#f6f6e8]">
        <div className="container mx-auto">
          <div className="flex py-[40px] justify-between items-center">
            <div>
              <h2 className="text-[20px]">Rubber plant get 30% off</h2>
              <h2 className="text-[60px] leading-[60px] md:w-[300px]">
                Grow green and be safe
              </h2>
              <button className="bg-[#ad5c08] px-10 py-3 text-white">
                SHOP NOW
              </button>
            </div>
            <div>
              <img src="/foodTree.png" alt="tree" />
            </div>
            <div>
              <div>
                <h2>Feeding</h2>
                <p>
                  Lorem ipsum is simply dummy text of the printing industry.
                </p>
              </div>
              <div>
                <h2>Feeding</h2>
                <p>
                  Lorem ipsum is simply dummy text of the printing industry.
                </p>
              </div>
              <div>
                <h2>Feeding</h2>
                <p>
                  Lorem ipsum is simply dummy text of the printing industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDrinks;
