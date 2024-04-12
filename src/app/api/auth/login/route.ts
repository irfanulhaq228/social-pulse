import { serialize } from "cookie";
import { sign } from "jsonwebtoken";
import { NextResponse } from "next/server";

const MAX_AGE = 60 * 60 * 24 * 30; //30 days

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body;

  if (email !== "admin@gmail.com" || password !== "admin123") {
    return NextResponse.json({ message: "Unauthorized Access!" }, { status: 401 });
  }

  const secret = process.env.JWT_SECRET || "";

  // generate token
  const token = sign({ email }, secret, { expiresIn: MAX_AGE });

  // generate cookies
  const seralized = serialize("SocialPulseJWT", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: MAX_AGE,
    path: "/",
  });

  //give response with token & cookie;
  const response = { message: "Authenticated" };

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: { 'Set-Cookie': seralized },
  });
};
