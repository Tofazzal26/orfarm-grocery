"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";
import { createContext, useState } from "react";
import toast from "react-hot-toast";
export const AuthProduct = createContext();

const ProductProvider = ({ children }) => {
  const [singleProduct, setSingleProduct] = useState([]);
  const session = useSession();

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

  const handleAddToCart = async (prd) => {
    const userEmail = session?.data?.user?.email;
    const updatedProduct = {
      ...prd,
      email: userEmail,
      prdID: prd._id,
      quantity: 1,
    };
    delete updatedProduct._id;
    delete updatedProduct.__v;

    try {
      const resp = await axios.post(
        `http://localhost:3000/api/AddToCartProduct`,
        updatedProduct
      );
      if (resp.data.success === true) {
        toast.success("Product Add Success");
      }
    } catch (error) {
      console.log(error);
      toast.error("Product Already Added");
    }
  };

  const handleWishList = async (prd) => {
    const userEmail = session?.data?.user?.email;
    const updatedProduct = {
      ...prd,
      email: userEmail,
      prdID: prd._id,
      quantity: 1,
    };
    delete updatedProduct._id;
    delete updatedProduct.__v;
    console.log(updatedProduct);
    try {
      const resp = await axios.post(
        `http://localhost:3000/api/AddWishList`,
        updatedProduct
      );
      if (resp.data.success === true) {
        toast.success("Product Add Success");
      }
    } catch (error) {
      console.log(error);
      toast.error("Already Added Wishlist");
    }
  };

  const productInfo = {
    allProduct,
    refetch,
    isLoading,
    singleProductShow,
    singleProduct,
    handleWishList,
    handleAddToCart,
  };
  return (
    <AuthProduct.Provider value={productInfo}>{children}</AuthProduct.Provider>
  );
};

export default ProductProvider;
