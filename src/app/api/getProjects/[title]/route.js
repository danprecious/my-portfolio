

import { NextResponse } from "next/server";
import { getOneProject } from "../../actions/queryFunctions";

export async function GET(req, { params }) {
  console.log(params);

  try {
    const project = await getOneProject(params.title);

    return NextResponse.json(project, {
      status: 200,
      statusText: "Successfully fetched all projects",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, {
        status: 500,
        statusText: "Internal server error" 
    })
  }

  return NextResponse.json("api reached");
}
