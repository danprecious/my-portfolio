import { z } from "zod";


export const signInSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
});


export const projectSchema = z.object({
  title: z.string().min(1, { message: "title is required" }),
  shortDescription: z.string().min(1, { message: "description is required" }),
  thumbnail: z.any().refine((file) => file instanceof File, {
    message: "thumbnail file required",
  }),
});


export const notesSchema = z.object({
  title: z.string().min(1, { message: "title is required" }),
  note: z.string().min(1, { message: "note is required" }),
});