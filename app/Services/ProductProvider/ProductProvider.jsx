"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { createContext, useState } from "react";
export const AuthProduct = createContext();

const ProductProvider = ({ children }) => {
  const [singleProduct, setSingleProduct] = useState([]);

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

  const singleProductShow = async (id) => {
    try {
      const resp = await axios.get(
        `http://localhost:3000/api/SingleProduct/${id}`
      );
      setSingleProduct(resp?.data?.data);
    } catch (error) {
      console.log("Server Error");
    }
  };

  console.log(singleProduct);

  const productInfo = {
    allProduct,
    refetch,
    isLoading,
    singleProductShow,
    singleProduct,
  };
  return (
    <AuthProduct.Provider value={productInfo}>{children}</AuthProduct.Provider>
  );
};

export default ProductProvider;
