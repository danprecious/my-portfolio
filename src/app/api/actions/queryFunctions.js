"use server";

import { GridFSBucket, MongoClient, ObjectId } from "mongodb";
import { signIn } from "../../../../auth";
import { getUserByEmail } from "./getUserByEmail";
import prisma from "./globalPrisma";
import { PrismaClient } from "@prisma/client";

const mongoURI = process.env.DATABASE_URL;
const client = new MongoClient(mongoURI);
const db = client.db("portfolio");
const bucket = new GridFSBucket(db, { bucketName: "thumbnail" });

export async function createUser(user) {
  try {
    const userExist = await getUserByEmail(user.email);
    if (userExist) return;
    const newUser = await prisma.user.create({ data: user });
    return newUser;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function createProject(projectData) {
  try {
    const project = await prisma.project.create({
      data: {
        title: projectData.title,
        shortDescription: projectData.shortDescription,
        whyProject: projectData.whyProject,
        technologies: projectData.technologies,
        targetUsers: projectData.targetUsers,
        githubLink: projectData.githubLink,
        liveSite: projectData.liveSite,
        thumbnailId: projectData.thumbnailId,
      },
    });
    return project;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function getOneProject(title) {
  console.log(title);

  try {
    const project = await prisma.project.findUnique({
      where: {
        title: title,
      },
    });

    console.log(project);

    const fileCursor = bucket.find();
    const thumbnailFiles = await fileCursor.toArray();

    const projectFile = thumbnailFiles.find(
      (file) => file._id.toString() === project.thumbnailId
    );
    console.log(projectFile);

    const projectData = { ...project, projectFile, projectFileData: [] };

    const downloadStream = bucket.openDownloadStream(projectData.projectFile._id);
    const chunks = [];

    for await (const chunk of downloadStream) {
      chunks.push(chunk);
    }
    projectData.projectFileData = Buffer.concat(chunks).toString("base64");

    // console.log()

    return projectData;
  } catch (error) {
    console.error(error);
  }
}

export async function getProjects() {
  try {
    const projects = await prisma.project.findMany();

    console.log(projects);

    const fileCursor = bucket.find();
    const thumbnailFiles = await fileCursor.toArray();

    console.log(thumbnailFiles);

    const projectData = projects.map((project) => {
      const projectFile = thumbnailFiles.find(
        (file) => file._id.toString() === project.thumbnailId
      );

      return {
        ...project,
        projectFile,
        projectFileData: [],
      };
    });

    for (const project of projectData) {
      if (project.projectFile) {
        const downloadStream = bucket.openDownloadStream(
          project.projectFile._id
        );
        const chunks = [];

        for await (const chunk of downloadStream) {
          chunks.push(chunk);
        }

        project.projectFileData = Buffer.concat(chunks).toString("base64");
      } else {
        project.projectFileData = null;
      }
    }

    return projectData;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}

export async function createNotes(notes) {
  try {
    const note = await prisma.notes.create({
      data: { title: notes.title, note: notes.note },
    });
    return note;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function getNotes() {
  try {
    const notes = await prisma.notes.findMany();
    return notes;
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteNotes(noteId) {
  try {
    const response = await prisma.note.delete({
      where: {
        id: noteId,
      },
    });
  } catch (error) {
    return error;
  }
}
