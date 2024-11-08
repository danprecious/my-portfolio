import { NextResponse } from "next/server";

import { signIn } from "../../../../auth";

export async function POST(request) {
  const body = await request.json();

  const { email, password } = body;

  console.log("Received email:", email); 
  console.log("Received password:", password);

  console.log("Attempting to sign in...");
  try {
    const response = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    });

    console.log("Sign-in response:", response); 

    if (response?.error) {
      console.error("Sign-in failed:", response.error);
      return NextResponse.json({ error: response.error }, { status: 400 });
    }

    return NextResponse.json(response, {
      statusText: "Login successful",
      status: "200",
    });
  } catch (error) {
    console.error("Error during sign-in:", error);
    return NextResponse.json(error.message, { status: 500 });
  }
}
