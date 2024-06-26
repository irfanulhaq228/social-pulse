import { verify } from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = cookies();

  const token = cookieStore.get("SocialPulseJWT");

  if (!token) {
    return NextResponse.json({ message: "UnAuthorized" }, { status: 401 });
  }

  const { value } = token;
  const secret = process.env.JWT_SECRET || "";

  try {
    verify(value, secret);
    const response = {
        user: "Secure User"
    }
    return new Response(JSON.stringify(response), {
        status: 200
    })
  } catch (e) {
    return NextResponse.json({
        message: "Something went wrong"
    }, {
        status: 400,
    })
  }

  console.log("cookies ========> ", token);
}
