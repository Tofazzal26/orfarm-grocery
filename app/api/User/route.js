import ConnectMongoose from "@/lib/ConnectMongoose/ConnectMongoose";
import { NextResponse } from "next/server";
import UserModel from "../UserModel/UserModel";

export const POST = async (request) => {
  try {
    await ConnectMongoose();
    const user = await request.json();
    const newUser = new UserModel(user);
    const exist = await UserModel.findOne(user);
    if (exist) {
      return NextResponse.json({
        message: "User Already Created",
        success: true,
        status: 200,
      });
    }
    await newUser.save();
    return NextResponse.json({
      data: newUser,
      message: "User Created Successfully",
      success: true,
      status: 200,
    });
  } catch (error) {
    console.error("Server error during POST /api/User:", error);

    return NextResponse.json({
      message: "There was a server error",
      success: false,
      status: 500,
    });
  }
};
