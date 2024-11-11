import { NextResponse } from "next/server";

export async function POST (req, {params}) {
    console.log(params)

    const data = await req.json();

    
    return NextResponse.json("api reached")

}