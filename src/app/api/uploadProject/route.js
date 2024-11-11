"use server";

import { NextResponse } from "next/server";
import { gridFsStoreFile } from "../actions/gridFsStore";
import { createProject } from "../actions/queryFunctions";
import prisma from "../actions/globalPrisma";

export async function POST(req) {
  const formData = await req.formData();
  console.log(req.formData);

  try {
    const file = formData.get("file");
    const title = formData.get("title");
    const shortDescription = formData.get("shortDescription");
    const whyProject = formData.get("whyProject")
    const technologies = formData.get("technologies")
    const targetUsers = formData.get("targetUsers")
    const githubLink = formData.get("githubLink")
    const liveSite = formData.get("liveSite")

    const filename = file.name;

    const existingFile = await prisma.project.findFirst({
      where: { title: filename },
    });

    const existingProject = await prisma.project.findFirst({
      where: {
        title: title,
      },
    });

    if (!existingProject) {
      const id = await gridFsStoreFile(file);
      console.log(id);
 
      const newProject = await createProject({
        title,
        shortDescription,
        whyProject,
        technologies,
        targetUsers,
        githubLink,
        liveSite,
        thumbnailId: id,
      });
      console.log(newProject);
      return NextResponse.json(newProject, { status: 200 });
    } else {
      return NextResponse.json("Project title already exists", {
        statusText: "Project title already exist",
        status: 401,
      });
    }
  } catch (error) {
    throw new Error(error);
    return NextResponse.json(error, {
      statusText: "Server error",
      status: 500,
    });
  }
}
