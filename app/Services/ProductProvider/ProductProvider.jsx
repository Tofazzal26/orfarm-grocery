"use client";
import {
  decrement,
  increment,
} from "@/app/ReduxProvider/CreateSlice/CreateSlice";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { createContext, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
export const AuthProduct = createContext();

const ProductProvider = ({ children }) => {
  const [singleProduct, setSingleProduct] = useState([]);
  const session = useSession();
  const count = useSelector((state) => state.counter.value);
  const disPatch = useDispatch();
  const router = useRouter();
  const [myCart, setMyCart] = useState(
    JSON.parse(localStorage.getItem("carts")) || []
  );

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

  const {
    refetch: manageRefetch,
    isLoading: manageLoading,
    data: ManageAllProduct = [],
  } = useQuery({
    queryKey: ["manageAllProduct"],
    queryFn: async () => {
      const resp = await axios.get(
        `http://localhost:3000/api/AllProductManage`
      );
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
    if (session?.status === "unauthenticated") {
      return router.push("/api/login");
    }
    const userEmail = session?.data?.user?.email;
    const updatedProduct = {
      ...prd,
      email: userEmail,
      prdID: prd._id,
      quantity: 1,
    };
    delete updatedProduct._id;
    delete updatedProduct.__v;
    // console.log(updatedProduct);

    let carts = JSON.parse(localStorage.getItem("carts")) || [];
    const existing = carts.find((item) => item.prdID === updatedProduct.prdID);
    if (existing) {
      return toast.error("Product Already Added");
    }
    carts.push(updatedProduct);
    localStorage.setItem("carts", JSON.stringify(carts));
    setMyCart(carts);
    toast.success("Product Add Success");
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
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const existing = wishlist.find(
      (item) => item.prdID === updatedProduct.prdID
    );
    if (existing) {
      return toast.error("Already Added Wishlist");
    }
    wishlist.push(updatedProduct);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    toast.success("Wishlist Add Success");
  };

  const handleDetailsAddToCart = async (prd) => {
    const userEmail = session?.data?.user?.email;
    if (session?.status === "unauthenticated") {
      return router.push("/api/login");
    }
    const updatedData = {
      ...prd,
      prdID: prd._id,
      quantity: count,
      email: userEmail,
      price: parseInt(prd.price) * count,
    };
    delete updatedData._id;
    delete updatedData.__v;
    let carts = JSON.parse(localStorage.getItem("carts")) || [];
    const existingIndex = carts.findIndex(
      (item) => item.prdID === updatedData.prdID
    );
    if (existingIndex !== -1) {
      carts[existingIndex] = {
        ...carts[existingIndex],
        quantity: count,
        price: parseInt(prd.price) * count,
      };
      localStorage.setItem("carts", JSON.stringify(carts));
      return toast.success("Product Updated Successfully");
    }
    carts.push(updatedData);
    localStorage.setItem("carts", JSON.stringify(carts));
    setMyCart(carts);
    toast.success("Product Added Successfully");
  };

  const handleIncrement = () => {
    disPatch(increment());
  };
  const handleDecrement = () => {
    if (count > 1) {
      disPatch(decrement());
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
    handleIncrement,
    handleDecrement,
    count,
    handleDetailsAddToCart,
    ManageAllProduct,
    manageLoading,
    myCart,
  };
  return (
    <AuthProduct.Provider value={productInfo}>{children}</AuthProduct.Provider>
  );
};

export default ProductProvider;
