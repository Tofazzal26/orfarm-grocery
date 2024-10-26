import { NextResponse } from "next/server";
import UserModel from "../../UserModel/UserModel";
import ConnectMongoose from "@/lib/ConnectMongoose/ConnectMongoose";

export const PATCH = async (request, { params }) => {
  try {
    await ConnectMongoose();
    const email = params.email;
    const query = { email: email };

    // Update the `vendorRequest` field to true
    const updatedUser = await UserModel.findOneAndUpdate(
      query,
      { $set: { vendor: "Yes" } },
      { new: true, upsert: true } // `new: true` returns the updated document
    );

    return NextResponse.json({ success: true, user: updatedUser });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: error.message });
  }
};
