import React from "react";
import { auth } from "../../../../auth";
import { redirect } from "next/navigation";
import SwitchActionPage from "./components/switchActionPage";

const AdminPage = async () => {
  const session = await auth();

  if (!session) {
    redirect("/admin/signIn");
  }

  return (
    <div>
      <SwitchActionPage />
    </div>
  );
};

export default AdminPage;
