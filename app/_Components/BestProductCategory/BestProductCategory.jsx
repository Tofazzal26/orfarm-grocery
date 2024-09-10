"use client";
import React, { useContext } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid"; // Import Swiper grid styles
import { FreeMode, Pagination, Grid } from "swiper/modules";
import { AuthProduct } from "@/app/Services/ProductProvider/ProductProvider";
import BestProductCard from "./BestProductCard";

const BestProductCategory = () => {
  const { allProduct } = useContext(AuthProduct);

  const featureProduct = allProduct.filter(
    (item) => parseFloat(item.rating) > 3 && item.productStatus === "NEW"
  );
  console.log(featureProduct);

  return (
    <div className="container mx-auto">
      <div className="my-4">
        <div className="grid  grid-cols-1 md:grid-cols-3">
          <div className="col-span-1">
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              grid={{
                rows: 3,
                fill: "row",
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                480: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
              }}
              modules={[FreeMode, Pagination, Grid]}
              className="mySwiper"
            >
              {featureProduct.map((item) => (
                <SwiperSlide key={item._id}>
                  <BestProductCard item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="col-span-1"></div>
          <div className="col-span-1"></div>
        </div>
      </div>
    </div>
  );
};

export default BestProductCategory;
