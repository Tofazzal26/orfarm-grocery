import ConnectMongoose from "@/lib/ConnectMongoose/ConnectMongoose";
import { NextResponse } from "next/server";
import ProductModel from "../ProductModel/ProductModel";

export const GET = async (request) => {
  try {
    await ConnectMongoose();
    const product = await ProductModel.find();
    return NextResponse.json(
      {
        data: product,
        message: "Product Data",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "There was a server error",
        success: false,
      },
      { status: 500 }
    );
  }
};
