import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    console.log("======> Signup POST Api Calls");

    const requestData = await request.json();
    console.log("Data from Frontend ==> ", requestData);
    const newUser = await User.create(requestData);
    return NextResponse.json({ message: "User Created", data: newUser }, { status: 201 });
  } catch (error:any) {
    console.log("response error ===> ", error?.errors[0]);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
};

export async function GET() {
  try {
    console.log("======> Signup GET Api Calls");

    const allUsers = await User.findAll();

    return NextResponse.json({ message: "All Users Get Successfully", data: allUsers }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
};
