"use server";

import { auth } from "../../../../auth";

export const checkAuth = async () => {
  const session = await auth();
  return session;
};
