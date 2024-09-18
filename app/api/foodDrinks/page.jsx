import React from "react";

const FoodDrinks = () => {
  const newsDetails = [
    {
      image: "/News1.png",
      title:
        "Adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div>
      <div className="bg-[#f6f6e8] my-10">
        <div className="container mx-auto">
          <div className="flex py-[40px] md:flex-row flex-col justify-between items-center">
            <div className=" md:space-y-4">
              <h2 className="text-[20px]">Rubber plant get 30% off</h2>
              <h2 className="text-[20px] md:text-[60px] leading-[60px] md:w-[300px]">
                Grow green and be safe
              </h2>
              <button className="bg-[#ad5c08] px-10 py-3 text-white">
                SHOP NOW
              </button>
            </div>
            <div>
              <img src="/foodTree.png" alt="tree" />
            </div>
            <div className="space-y-4">
              <div>
                <h2 className="text-xl">Feeding</h2>
                <p>
                  Feeding food refers to the process of providing nourishment.
                </p>
              </div>
              <div>
                <h2 className="text-xl">Light</h2>
                <p>
                  Light is a form of energy that makes it possible for us to
                  see.
                </p>
              </div>
              <div>
                <h2 className="text-xl">Care</h2>
                <p>
                  Care refers to the attention and effort given to maintain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default FoodDrinks;
