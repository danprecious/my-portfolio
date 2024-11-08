"use client";

import { useForm, Controller } from "react-hook-form";

import React, { useContext, useState } from "react";

import axios from "axios";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";

import { notesSchema } from "@/app/lib/zodSchema";

const UploadNotesForm = () => {
  const SubmitHandler = async (data) => {
    console.log("Form data submitted:", data);

    const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  
    try {
      const response = await axios.post(
        "/api/postNote",
        data,
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      console.log(response.data);
      // Reset form or navigate to another page after successful submission
    } catch (error) {
      console.log("error here");
      console.error(error);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(notesSchema),
  });

  return (
    <div className="">
      <div className="hidden text-center"></div>
      <div className="my-8 lg:w-[50%]">
        <form
          onSubmit={handleSubmit(SubmitHandler)}
          className="bg-stone-900 rounded-md w-full lg:p-10 px-2 py-6"
        >
          <div className="my-3">
            <label className="my-1 text-sm" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              id="title"
              className="p-1 bg-stone-950 w-full rounded-md"
              {...register("title")}
            />
          </div>

          <div className="my-3">
            <label className="my-1 text-sm" htmlFor="note">
              Notes
            </label>
            <textarea
              type="text"
              id="note"
              className="p-1 bg-stone-950 w-full rounded-md h-[3em]"
              {...register("note")}
            />
          </div>

          <div className="my-5 flex items-center justify-center ">
            <button
              className="p-2 w-full bg-lime-500  px-4 rounded-md"
              type="submit"
            >
              Add note
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadNotesForm;
