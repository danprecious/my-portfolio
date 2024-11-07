import { NextResponse } from "next/server";
import { createNotes } from "../actions/queryFunctions";

export async function POST(req) {
  const data = await req.json();
  console.log(data);

  const {title, note} = data;

  try {
    const notes = await createNotes({title, note});

    return NextResponse.json(notes, {
      statusText: "Note added succefully",
      status: 200,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(error, {
      statusText: "Internal Server Error",
      status: 500,
    });
  }

  return NextResponse.json("api reached", { status: 200 });
}
