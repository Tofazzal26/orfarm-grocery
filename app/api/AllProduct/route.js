import ConnectMongoose from "@/lib/ConnectMongoose/ConnectMongoose";
import { NextResponse } from "next/server";
import ProductModel from "../ProductModel/ProductModel";

export const GET = async (request) => {
  try {
    const { searchParams } = new URL(request.url);

    const size = searchParams.get("size");
    const page = searchParams.get("page");
    const sizeNumber = parseInt(size) || 10;
    const pageNumber = parseInt(page) || 4;
    console.log(sizeNumber);
    console.log(pageNumber);
    await ConnectMongoose();
    const productCount = await ProductModel.countDocuments();
    const product = await ProductModel.find()
      .skip(sizeNumber * pageNumber)
      .limit(sizeNumber);
    return NextResponse.json(
      {
        data: product,
        totalCount: productCount,
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
