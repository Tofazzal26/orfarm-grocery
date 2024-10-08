import ConnectMongoose from "@/lib/ConnectMongoose/ConnectMongoose";
import { NextResponse } from "next/server";
import ProductModel from "../ProductModel/ProductModel";

export const GET = async (request) => {
  try {
    const { searchParams } = new URL(request.url);

    const size = searchParams.get("size");
    const page = searchParams.get("page");
    const priceFilter = searchParams.get("price") || 40;

    let query = {};
    if (priceFilter) {
      query = { price: { $lte: parseFloat(priceFilter) } };
    }

    const sizeNumber = parseInt(size) || 10;
    const pageNumber = parseInt(page) || 4;

    await ConnectMongoose();
    const productCount = await ProductModel.countDocuments(query);
    const product = await ProductModel.find(query)
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
