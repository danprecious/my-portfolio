import { getUserByEmail } from "@/app/api/actions/getUserByEmail";
import prisma from "@/app/api/actions/globalPrisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        if (credentials === null) return null;
        try {
          console.log(credentials.email);
          const user = await getUserByEmail(credentials?.email);
          console.log(user);
          if (user) {
            const isMatch = user?.password === credentials?.password;
            if (isMatch) {
              return user;
            } else {
              console.error("incorrect password");
              throw new Error("incorrect password");
            }
          } else {
            throw new Error("User not found");
          }
        } catch (error) {
          console.error("error in signIn function", error);
          throw new Error(error)
        }
      },
    }),
  ],
});
