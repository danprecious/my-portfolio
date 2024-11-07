"use client";

import { useState } from "react";
import UploadProjectForm from "./uploadprojectForm";
import UploadNotesForm from "./uploadNotes";

const SwitchActionPage = () => {
  const [activepage, setActivePage] = useState("uploadProject");

  return (
    <section className="py-2 lg:px-10 px-2">
      <div className="flex lg:w-[30%]">
        <button
          onClick={() => setActivePage("uploadProject")}
          className={`w-full  p-2 mx-1 rounded-md cursor-pointer ${
            activepage === "uploadProject"
              ? "bg-lime-500 text-black"
              : "bg-stone-950"
          }`}
        >
          Project
        </button>
        <button
          onClick={() => setActivePage("uploadNotes")}
          className={`w-full  p-2 mx-1 rounded-md cursor-pointer ${
            activepage === "uploadNotes"
              ? "bg-lime-500 text-black"
              : "bg-stone-950"
          }`}
        >
          Notes
        </button>
      </div>
      <div className=" py-6 px-1">
        {activepage === "uploadProject" ? (
          <div>
            <h2>New Project, Yay!</h2>
           <UploadProjectForm />
          </div>
        ) : activepage === "uploadNotes" ? (
          <div>
            <h2>Upload Some Notes</h2>
            <UploadNotesForm />
          </div>
        ) : (
          <div>What you looking for?</div>
        )}
      </div>
    </section>
  );
};

export default SwitchActionPage;
