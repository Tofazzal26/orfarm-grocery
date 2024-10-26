import ConnectMongoose from "@/lib/ConnectMongoose/ConnectMongoose";
import UserModel from "../UserModel/UserModel";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await ConnectMongoose();
    const allUser = await UserModel.find();
    return NextResponse.json(
      { data: allUser, message: "All user get success", success: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { data: error, message: "There is a server error", success: false },
      { status: 400 }
    );
  }
};
