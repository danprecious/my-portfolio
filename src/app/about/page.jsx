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
    <article className={`flex flex-col lg:max-w-[75%] `}>
      <p className="md:text-[1.5rem]  font-bold  font-pageFont w-[100%] mb-5">
        Dan Precious
      </p>
      <p className="md:text-justify text-pretty text-[0.95rem] mb-4">
        Hi there! I'm <strong>Kayode Dan Precious,</strong> a JavaScript
        Developer who loves building web products that are accessible, scalable,
        user-friendly, and innovative. From the moment I discovered my passion
        for creating things, I've been driven by a desire to build tools that
        make life easier for people. I started my journey two years ago with an
        idea of developing Matera, a web platform for school materials. This
        project sparked my enthusiasm for building useful and engaging web
        applications. Over the years, I've learned a lot and appreciated every
        moment of it. I'm dedicated to continuous improvement and exploring new
        technologies to push the boundaries of what's possible on the web.
      </p>
      <div className="my-4">
        <h2 className="font-pageFont md:text-[1.5rem] font-bold py-3">
          Technologies I work with
        </h2>
        <div className="text- py-2 flex text-wrap flex-col md:flex-row">
          <div className="flex py-2">
            <BiLogoJavascript className="tech-logo" />
            <BiLogoMongodb className="tech-logo" />
            <SiExpress className="tech-logo" />
            <BiLogoReact className="tech-logo" />
          </div>
          <div className="flex py-2">
            <BiLogoNodejs className="tech-logo" />
            <RiNextjsFill className="tech-logo" />
            <RiTailwindCssFill className="tech-logo" />
            <SiShadcnui className="tech-logo" />
          </div>
        </div>
        <p className="py-2 md:text-[0.95rem] md:text-justify">
          As a JavaScript developer with a primary focus on the frontend, I’ve
          gained confidence in using React and Next.js, alongside Tailwind CSS
          for robust styling and Zustand for complex state management. Recently,
          I’ve been expanding my skills into backend development with Node.js
          and Express.js for server-side programming and MongoDB for database
          management, encompassing the full <strong>MERN</strong> stack. In
          addition to these, I’ve worked with a variety of other technologies
          such as the Shadcn UI library, Material UI, CMS (Contentful &
          WordPress), NextAuth, and Clerk for authentication and authorization.
        </p>
      </div>
    </article>
  );
};

export default About;
