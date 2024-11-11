"use client"
import Link from "next/link";
import React from "react";

const UniqueProjectErrorPage = () => {
  return (
    <div>
      <p>Error getting this project</p>
      <Link href="/projects">Go back to project list</Link>
    </div>
  );
};

export default UniqueProjectErrorPage;
