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

     await new Promise((resolve, reject) => {
        fs.createReadStream(tempFilePath)
          .on("error", (readError) => {
              console.error("Error reading temp file:", readError);
              reject(readError);
          })
          .pipe(uploadStream)
          .on("error", (uploadError) => {
              console.error("Error during upload:", uploadError);
              reject(uploadError);
          })
          .on("finish", () => {
              console.log("File uploaded successfully:", uploadStream.id);
              fs.unlinkSync(tempFilePath); // Cleanup
              resolve(uploadStream.id);
          });
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
