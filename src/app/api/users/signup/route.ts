import connect from "@/dbConfig.js/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/helpers/mailer";
import userModel from "@/models/userModel";

connect();

export async function POST(request: NextRequest) {
  const reqBody = await request.json();

  const { username, email, password } = reqBody;
  console.log(reqBody);

  try {
    const user = await userModel.findOne({ email });

    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  let savedUser;

  try {
    const hashedPassword = await bcryptjs.hash(password, 10);

    const newUser = new userModel({
      username,
      email,
      password: hashedPassword,
    });

    savedUser = await newUser.save();
    console.log(savedUser);
  } catch (error: any) {
    return NextResponse.json(
      {
        message: "Error while saving user or hashing password",
        error: error.message,
      },
      { status: 500 }
    );
  }

  try {
    const sendingEmail = await sendEmail({
      email,
      emailType: "VERIFY",
      userId: savedUser._id,
    });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Error in SendingEmail", error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({
    message: "User Registered successfully",
    success: true,
    savedUser,
  });
}
