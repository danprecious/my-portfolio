import { getOneProject } from "@/app/api/actions/queryFunctions";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaGithubAlt, FaLink } from "react-icons/fa";

const UniqueProject = async ({ params }) => {
  console.log(params);

  const projectName = decodeURIComponent(params.projectName);

  const project = await getOneProject(projectName);
  console.log(project);

  return (
    <section className="w-full pb-10">
      {project ? (
        <div>
          <div className="w-full overflow-hidden h-[20em] ">
            <Image
              src={`data:image/jpeg;base64,${project.projectFileData}`}
              width={100}
              height={100}
              alt={`thumbnail for ${project.title}`}
              className="object-cover h-full w-full rounded-t-lg"
            />
          </div>

          <div className="flex justify-between items-center py-5">
            <div className="">
              <h2 className="text-[1.5rem] font-bold">{project.title}</h2>
              <p className="text-sm">Date published: {project.createdAt.toLocaleString()}</p>
            </div>

            <div className="flex text-[1.2rem]">
              <a href={project.githubLink || "#"}>
                <FaGithub className="mx-2" />
              </a>
              <a href={project.liveSite || "#"}>
                <FaLink className="mx-2" />
              </a>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-[1.2rem] font-bold">Why this project</h3>
            <p className="">{project.whyProject}</p>
          </div>

          <div className="mt-8">
            <h3 className="text-[1.2rem] font-bold">Target users</h3>
            <p className="">{project.targetUsers}</p>
          </div>

          <div className="mt-8">
            <h3 className="text-[1.2rem] font-bold">
              Technologies utilized for this
            </h3>
            <p className="text-">{project.technologies}</p>
          </div>

          <div className="mt-16">
            <a
              className="bg-stone-950 text-white hover:bg-lime-500 dark:bg-lime-500 dark:text-black py-2 px-5 rounded-md"
              href={project.liveSite || "#"}
            >
              View live site
            </a>
            <a
              className="bg-stone-950 text-white mx-3  hover:bg-lime-500 dark:bg-lime-500 dark:text-black py-2 px-5 rounded-md"
              href={project.githubLink || "#"}
            >
              See repository
            </a>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <p className="mb-10 py-10">Project not found</p>
          <Link href={'/projects'} className="text-lime-600 underline mt-8">Got back to projects</Link>
        </div>
      )}
    </section>
  );
};

export default UniqueProject;
