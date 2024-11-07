import { NextResponse } from "next/server";
import { createUser, credentialLogin } from "../actions/queryFunctions";
import { signIn } from "../../../../auth";

export async function POST(request) {
  const body = await request.json();

  const { email, password } = body;

  const user = {
    email,
    password,
  };

  try {
    const response = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    });
    console.log(response);
    return NextResponse.json(response, {
      statusText: "Login successful",
      status: "200",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error.message, { status: 500 });
  }
}
