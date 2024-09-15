"use client";
import { useQuery } from "@tanstack/react-query";
import { createContext, useState } from "react";
export const AuthProduct = createContext();

const ProductProvider = ({ children }) => {
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

  const productInfo = { allProduct, refetch, isLoading };
  return (
    <AuthProduct.Provider value={productInfo}>{children}</AuthProduct.Provider>
  );
};

export default ProductProvider;
