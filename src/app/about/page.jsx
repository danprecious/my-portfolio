import PageContainer from "@/components/pageContainer";
import localFont from "next/font/local";
import Image from "next/image";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui, SiExpress } from "react-icons/si";
import {
  BiLogoReact,
  BiLogoNodejs,
  BiLogoMongodb,
  BiLogoJavascript,
} from "react-icons/bi";

const About = () => {
  return (
    <article className={`flex flex-col lg:max-w-[] lg:mx-16 px-5 py-5 lg:py-0`}>
      <p className="md:text-[1.5rem]  font-bold  font-pageFont w-[100%] mb-5">
        A little about me
      </p>
      <p className="md:text-justify text-pretty text-[0.95rem] mb-4">
        Hi there! I'm <strong>Kayode Dan Precious,</strong> a JavaScript
        Developer who loves building web products that are accessible, scalable,
        user-friendly, and innovative.I started my journey with an
        idea of developing Matera, a web platform for school materials. This
        project sparked my enthusiasm for building useful and engaging web
        applications. Over the years, I've learned a lot and appreciated every
        moment of it. I'm dedicated to continuous improvement and exploring new
        technologies to push the boundaries of what's possible on the web.
      </p>
      <div className="my-2">
        <h2 className="font-pageFont md:text-[1.5rem] font-bold py-3">
          Technologies I work with
        </h2>

        <p className="py-2 md:text-[0.95rem] md:text-justify">
          As a JavaScript developer with a primary focus on the frontend, I’ve
          gained confidence in using React and Next.js and have been expanding
          my skills into backend development with Node.js and Express.js for
          server-side programming and MongoDB for database management,
          encompassing the full <strong>MERN</strong> stack.
        </p>

        <div className="text- flex text-wrap flex-col md:flex-row">
          <div className="md:flex py-2 md:justify-between w-full custom-grid">
            {techTools.map((techtool, index) => {
              return (
                <div className="w-[100px] flex flex-col items-center my-2">
                  <div className="lg:text-[2.5rem] mx-3 my-2">{techtool.tool}</div>
                  <p className="text-xs">{techtool.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </article>
  );
};

export default About;

const techTools = [
  {
    name: "MongoDB",
    tool: <BiLogoMongodb className="tech-logo" />,
  },
  {
    name: "Express",
    tool: <SiExpress className="tech-logo" />,
  },
  {
    name: "ReactJS",
    tool: <BiLogoReact className="tech-logo" />,
  },

  {
    name: "NodeJs",
    tool: <BiLogoNodejs className="tech-logo" />,
  },
  {
    name: "NextJs",
    tool: <RiNextjsFill className="tech-logo" />,
  },
];
