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
        <p className=" text-sm">
          Driven by a passion for building,
        </p>
      </div>
      {/* below contain all projects. create a data for these projects and map over them. handle them from mongodb later*/}

      <div className="w-full">
        {projects.map((project) => {
          return (
            <div key={project.id} className="my-10 lg:my-14">
              <div className="flex md:items-center flex-col md:flex-row">
                {/* thumnail of the project */}
                <div className="rounded-lg lg:mr-4 md:w-[10%] md:h-[6em] w-full h-[4em]  bg-stone-500">
                  <Image
                    width={100}
                    height={100}
                    className="object-cover w-full h-full"
                    src={`data:image/jpeg;base64,${project.projectFileData}`}
                    alt={`Cover-image for ${project.title}`}
                  />
                </div>
                <div className="p-2 md:mx-4 md:w-[50%] my-2 md:my-0">
                  <h3 className="font-pageFont text-[1.2rem]">
                    {project.title}
                  </h3>
                  <p className="text-sm">{project.shortDescription}</p>
                  <div className="flex text-[2rem] my-2">
                    {/* <Link href={project.liveSite}>
                    <FaLink className="p-2 mr-2" />
                  </Link>
                  <Link href={project.githubLink}>
                    <FaGithub className="p-2" />
                  </Link> */}
                  </div>
                </div>
                {/* preview gif of the project*/}
                {/* <div className="w-[20em] hidden lg:flex">j</div> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
