import React from "react";
import { auth } from "../../../../auth";
import { redirect } from "next/navigation";
import UploadProjectForm from "./components/uploadprojectForm";

const AdminPage = async () => {
  const session = await auth();

  if (!session) {
    redirect("/admin/signIn");
  }

  return (
    <div className="lg:px-72">
      <UploadProjectForm />
    </div>
  );
};

export default AdminPage;
