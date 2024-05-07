import connect from "@/dbConfig.js/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import { dataFromToken } from "@/helpers/dataFromToken";
import User from "@/models/userModel";

connect();

export async function POST(request: NextRequest) {
  try {
    const userId = await dataFromToken(request);
    const user = await User.findOne({ _id: userId }).select("-password");
    return NextResponse.json({ message: "User found", data: user });
  } catch (error) {}
}
