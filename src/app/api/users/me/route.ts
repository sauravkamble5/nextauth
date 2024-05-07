import connect from "@/dbConfig.js/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import { dataFromToken } from "@/helpers/dataFromToken";
import User from "@/models/userModel";

connect();

export async function POST(request: NextRequest) {
  try {
    const userId = await dataFromToken(request);

    if (!userId) {
      return NextResponse.json(
        { error: "userId does not exists" },
        { status: 400 }
      );
    }
    const user = await User.findOne({ _id: userId }).select("-password");
    if (!user) {
      return NextResponse.json(
        { error: "user does not exists" },
        { status: 400 }
      );
    }
    return NextResponse.json({ message: "User found", data: user });
  } catch (error) {}
}
