"use client";
import { useQuery } from "@tanstack/react-query";
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

  const singleProductShow = (id) => {};

  const productInfo = { allProduct, refetch, isLoading, singleProductShow };
  return (
    <AuthProduct.Provider value={productInfo}>{children}</AuthProduct.Provider>
  );
};

export default ProductProvider;
