import { NextResponse } from "next/server";

import User from "@/models/User";

export async function POST(req: Request) {
  try{
    const request = await req.json();
    delete request.confirmPassword;
    console.log("====> request ===================> ", request);
    const newData = await User.create(request);
    console.log("====> newData ===================> ", newData);
    return NextResponse.json({ message: "User Registered", data: newData }, { status: 201 });
  }catch(error){
    return NextResponse.json({ message: "Server Error", error }, { status: 500 });
  }
};