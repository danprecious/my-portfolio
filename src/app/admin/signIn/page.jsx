"use client";

import { useForm } from "react-hook-form";
import { signInSchema } from "@/app/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { auth } from "../../../../auth";
import { checkAuth } from "@/app/api/actions/checkAuth";

const SignInPage = () => {
  const [error, setError] = useState({ general: "" });

  const router = useRouter();

  useEffect(() => {
    async function runAuth() {
      const session = await checkAuth();
      if (session) {
        router.push("/admin/adminUpdate");
      }
    }
    runAuth();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInSchema),
  });

  const signInAdmin = async (data) => {
    console.log(data);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/adminLogin",
        data,
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      router.push("/admin/adminUpdate");
      console.log(response);
      return response;
    } catch (e) {
      console.error(e);
      setError({
        ...error,
        general: e,
      }),
        setTimeout(() => setError({ ...error, general: "" }), 2000);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row px-2 justify-center py-10">
      <div className="lg:w-[50%] flex justify-center mb-8">
        <h1 className="lg:text-[5rem] text-[2rem]">Get In MR!</h1>
      </div>
      <div className="lg:w-[50%] flex justify-center">
        <form
          onSubmit={handleSubmit(signInAdmin)}
          className="w-full lg:w-[50%] lg:p-8 p-5 bg-stone-950 rounded-xl"
        >
          <div className="">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="w-full mb-5 rounded-md p-1 dark:text-stone-950"
              id="email"
              {...register("email")}
            />
          </div>
          <div className="">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              className="w-full mb-5 rounded-md p-1 dark:text-stone-950"
              {...register("password")}
            />
          </div>
          <button
            type="submit"
            className="w-[100%] text-center bg-secondary my-3 dark:bg-lime-500 dark:text-black py-1 rounded-md"
          >
            sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
