const fs = require("fs");
const path = require("path");
const os = require("os");

// import prisma from "@/app/libs/prismadb";

import { GridFSBucket, MongoClient } from "mongodb";

const mongoURI = process.env.DATABASE_URL;
const client = new MongoClient(mongoURI);
const db = client.db("portfolio");
const bucket = new GridFSBucket(db, { bucketName: "thumbnail" });

export const gridFsStoreFile = async (file) => {
  const uniqueFileName = new Date().getTime() + "-" + file.name;
  // store in a temporary location in storage
  const tempFilePath = path.join(os.tmpdir(), uniqueFileName);

  console.log("Temp file path:", tempFilePath);
  console.log("Connecting to MongoDB...");

  // create buffer and write file to fileSystem
  const buffer = Buffer.from(await file.arrayBuffer());
  fs.writeFileSync(tempFilePath, buffer);

  // open a stream from the bucket to enable uplaod
  const uploadStream =  bucket.openUploadStream(uniqueFileName);

  const fileItem = await db
    .collection("thumbnail.files")
    .findOne({ _id: uploadStream.id });

    console.log("fileItem before pipe", fileItem);

  if (!fileItem) {
    // pipe the file from fs to the bucket

    console.log("piping file")

    fs.createReadStream(tempFilePath)
      .pipe(uploadStream)
      .on("error", (error) => {
        console.log("Error uploading file");
      })
      .on("finish", (file) => {
        console.log("File uploaded succefully");
        const fileId = uploadStream.id;
        console.log(fileId);
        // cleanup temporary filePath from memory
        fs.unlinkSync(tempFilePath);
        return fileId;
      });
  }

  // LOGS
  console.log("fileItem", fileItem);
  console.log("uploadStreamId", uploadStream.id);
  return uploadStream.id;
  console.log(tempFilePath);
  console.log(file);
  console.log(file.name);
  console.log(uniqueFileName);
};
