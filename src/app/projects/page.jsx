import PageContainer from "@/components/pageContainer";
import { projectData } from "@/utils/constants";
import Link from "next/link";
import { FaGithub, FaLink } from "react-icons/fa";
import { getProjects } from "../api/actions/queryFunctions";
import Image from "next/image";

const Projects = async () => {
  const projects = await getProjects();

  console.log(projects);

  return (
    <div className="flex flex-col w-full">
      <div>
        <h1 className="font-pageFont md:text-[3rem] text-[1.8em]">
          Featured Projects
        </h1>
        <p className=" text-sm">Driven by a passion for building,</p>
      </div>

      <div className="w-full">
        {projects ? (
          projects.map((project) => {
            return (
              <div
                key={project.id}
                className="my-10 lg:my-14 z-50 py-5 w-full border-b-stone-800 border-solid border-b-[1px] border-opacity-30 min-h-[10em]"
              >
                <div className="flex md:items-center flex-col md:flex-row ">
                  {/* thumnail of the project */}
                  <div className="rounded-lg lg:mr-4 md:w-[40%]  w-full h-[10em]">
                    <Image
                      width={100}
                      height={100}
                      className="object-cover w-full h-full  rounded-t-xl"
                      src={`data:image/jpeg;base64,${project.projectFileData}`}
                      alt={`Cover-image for ${project.title}`}
                    />
                  </div>
                  <div className="p-2 md:mx-4 md:w-[60%] my-2 md:my-0 flex flex-col justify-between h-full">
                    <div className="">
                      <h3 className="font-pageFont text-[1.2rem]">
                        {project.title}
                      </h3>
                      <p className="text-sm py-3">
                  {project.shortDescription}
                      </p>
                      {/* <p className="text-sm">{project.shortDescription}</p> */}
                    </div>
                    <div className="flex text-[2rem] mt-5 items-center justify-between">
                      <div className="flex">
                        <Link href={project.liveSite || "#"} className="z-50">
                          <FaLink className="p-2 mr-2" />
                        </Link>
                        <Link href={project.githubLink || "#"} className="z-50">
                          <FaGithub className="p-2" />
                        </Link>
                      </div>

                      <Link
                        href={`/projects/${project.title || "#"}`}
                        className="text-xs p-2 font-bold text-lime-600 z-50 dark:text-lime-500"
                      >
                        Check details
                      </Link>
                    </div>
                  </div>
                  {/* preview gif of the project*/}
                  {/* <div className="w-[20em] hidden lg:flex">j</div> */}
                </div>
              </div>
            );
          })
        ) : (
          <div className="my-32 text-center">Cannot display projects at the moment...</div>
        )}
      </div>
    </div>
  );
};

export default Projects;
