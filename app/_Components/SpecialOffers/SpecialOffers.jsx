"use client";

import React, { useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/grid";

import { FreeMode, Pagination, Grid } from "swiper/modules";
import ProductCard from "../OurProduct/ProductCard";

const SpecialOffers = () => {
  const {
    refetch,
    isLoading,
    data: allProduct = [],
  } = useQuery({
    queryKey: ["allProduct"],
    queryFn: async () => {
      const resp = await axios.get(`http://localhost:3000/api/AllProduct`);
      return resp?.data?.data;
    },
  });

  const Special_Offers = allProduct.filter(
    (item) => parseInt(item.discount) > 40 || item.Special_Offers === "OLD"
  );

  console.log(Special_Offers);

  return (
    <div className="mb-[100px]">
      <h1 className="text-center text-[50px] mb-[40px]">Special Offers</h1>
      <div className="container mx-auto">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
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
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          modules={[FreeMode, Pagination, Grid]}
          className="mySwiper"
        >
          {Special_Offers.map((item) => (
            <SwiperSlide key={item._id}>
              <ProductCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SpecialOffers;