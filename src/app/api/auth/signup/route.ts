import { NextResponse } from "next/server";

import User from "@/models/User";
import { sign } from "jsonwebtoken";

export async function POST(req: Request) {
  try{
    const request = await req.json();
    delete request.confirmPassword;
    const { username } = request;
    const token = sign({ username }, process.env.JWT_SECRET || "", { expiresIn: '1h' });
    const newData = await User.create(request);
    return NextResponse.json({ message: "User Registered", data: newData, token }, { status: 201 });
  }catch(error){
    return NextResponse.json({ message: "Server Error", error }, { status: 500 });
  }
};