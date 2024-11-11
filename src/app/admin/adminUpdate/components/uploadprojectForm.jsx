"use client";

import { useForm, Controller } from "react-hook-form";

import React, { useContext, useState } from "react";

import axios from "axios";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";

import { projectSchema } from "@/app/lib/zodSchema";

const UploadProjectForm = () => {
  const [uploading, setUploading] = useState("Upload");
  const [uploadError, setUploadError] = useState("");

  const SubmitHandler = async (data) => {
    console.log("Form data submitted:", data);

    const formData = new FormData();
    formData.append("file", data.thumbnail);
    formData.append("title", data.title);
    formData.append("whyProject", data.whyProject);
    formData.append("technologies", data.technologies);
    formData.append("targetUsers", data.targetUsers);
    formData.append("githubLink", data.githubLink);
    formData.append("liveSite", data.liveSite);
    formData.append("shortDescription", data.shortDescription);

    console.log(...formData);

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    try {
      setUploading("Uploading");
      const response = await axios.post("/api/uploadProject", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },  
      });
      console.log(response.data);

      await delay(3000);

      setUploading("Upload done");

      await delay(3000);
      setUploading("Upload");
    } catch (error) {
      console.log("error here");
      console.error(error);
      setUploadError("Error uploading project, try again");
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(projectSchema),
  });

  return (
    <div className="w-full">
      <div className="my-8 w-full">
        <form
          onSubmit={handleSubmit(SubmitHandler)}
          className="border-[0.5px] border-solid dark:border-stone-800 border-stone-900 bg-stone-100 dark:bg-transparent border-opacity-10 rounded-md w-full lg:p-10 px-2 py-6"
        >
          <div className="py-5">
            <p className="text-center">Upload a new project</p>
          </div>
          <div className="my-3">
            <label className="mb-3 text-sm" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              id="title"
              className="py-1 h-fit"
              {...register("title")}
            />
          </div>

          <div className="my-3">
            <label className="my-1 text-sm" htmlFor="shortDescription">
              Short description
            </label>
            <textarea
              type="text"
              id="shortDescription"
              className=""
              {...register("shortDescription")}
            />
          </div>
          <div className="my-3">
            <label className="my-1 text-sm" htmlFor="shortDescription">
              Why this project?
            </label>
            <textarea
              type="text"
              id="whyProject"
              className=""
              {...register("whyProject")}
            />
          </div>
          <div className="my-3">
            <label className="my-1 text-sm" htmlFor="shortDescription">
              Target Users
            </label>
            <textarea
              type="text"
              id="targetUsers"
              className=""
              {...register("targetUsers")}
            />
          </div>
          <div className="my-3">
            <label className="my-1 text-sm" htmlFor="shortDescription">
              Technologies used
            </label>
            <textarea
              type="text"
              id="technologies"
              className=""
              {...register("technologies")}
            />
          </div>

          <div className="my-3">
            <label className="mb-3 text-sm" htmlFor="githubLink">
              Github repository
            </label>
            <input
              type="text"
              id="githubLink"
              className="py-1 h-fit"
              {...register("githubLink")}
            />
          </div>
          <div className="my-3">
            <label className="mb-3 text-sm" htmlFor="liveSite">
              Live site
            </label>
            <input
              type="text"
              id="liveSite"
              className="py-1 h-fit"
              {...register("liveSite")}
            />
          </div>

          <div className="my-3"></div>

          <div className="flex lg:justify-start justify-center text-sm  ">
            <div className="text-center bg-bgShade rounded-md">
              <Controller
                control={control}
                name="thumbnail"
                render={({ field: { value, onChange, ...field } }) => (
                  <input
                    {...field}
                    onChange={(e) => {
                      onChange(e.target.files[0]);
                    }}
                    id="thumbnail"
                    type="file"
                    className="bg-stone-900 text-white w-full h-fit"
                    size={20}
                  />
                )}
              />
            </div>
          </div>

          <div className="my-5">{uploadError}</div>

          <div className="my-5 flex items-center justify-center ">
            <button
              className="p-2 w-full bg-stone-900 text-white  px-4 rounded-md"
              type="submit"
            >
              {uploading}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadProjectForm;
