import PageContainer from "@/components/pageContainer";
import localFont from "next/font/local";
import Image from "next/image";
import { FaArrowRight, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui, SiExpress } from "react-icons/si";
import {
  BiLogoReact,
  BiLogoNodejs,
  BiLogoMongodb,
  BiLogoJavascript,
} from "react-icons/bi";
import CustomButton from "@/components/utilities/button";
import Link from "next/link";

const About = () => {
  const techTools = [
    {
      id: "1",
      name: "MongoDB",
      tool: <BiLogoMongodb className="tech-logo" />,
    },
    {
      id: "2",
      name: "Express",
      tool: <SiExpress className="tech-logo" />,
    },
    {
      id: "3",
      name: "ReactJS",
      tool: <BiLogoReact className="tech-logo" />,
    },

    {
      id: "4",
      name: "NodeJs",
      tool: <BiLogoNodejs className="tech-logo" />,
    },
    {
      id: "5",
      name: "NextJs",
      tool: <RiNextjsFill className="tech-logo" />,
    },
  ];

  return (
    <article className={`flex flex-col lg:max-w-[] lg:mx-16 px-5 py-5 lg:py-0 mb-10`}>
      <p className="md:text-[1.5rem]  font-bold  font-pageFont w-[100%] mb-5">
        Why work with me?
      </p>
      <p className="md:text-justify text-pretty text-[0.95rem] mb-4">
        I'm software engineer who values simplicity and practicality when it
        comes to building web applications. I believe technology should make
        life easier, not more complicated, so I focus on creating solutions that
        are both straightforward and effective. My approach is all about
        creating easy-to-use systems that solve real problems. I focus on
        building things that are not only functional but also intuitive for
        users, making sure that the process is as seamless as possible. I put a
        lot of thought into the backend, ensuring that everything works smoothly
        and can be easily maintained as things grow. I’m committed to working
        hard to find the simplest, most efficient solutions for the challenges
        at hand. Whether you need to streamline existing processes or build
        something from scratch, I aim to make sure that what I create is truly
        useful and easy to interact with.
      </p>
      <div className="my-2 pb-10">
        <h2 className="font-pageFont md:text-[1.5rem] font-bold py-3">
          My Development Philosophy
        </h2>

        <p className="py-2 md:text-[0.95rem] md:text-justify">
          I see development as a problem-solving process, not just writing code.
          For me, the key to successful development is keeping things simple and
          efficient. I focus on creating web applications that are easy to use
          and scalable. My goal is always to make sure that the final product is
          not just functional, but intuitive and straightforward for users. I
          believe in iterating through solutions, testing things out, and
          refining them until they truly meet the needs of users and
          stakeholders. I don’t just look for a quick fix—I aim for lasting
          solutions that can evolve over time without adding unnecessary
          complexity.
        </p>
        <h2 className="font-pageFont md:text-[1.5rem] font-bold py-3">
          How I Can Help You
        </h2>

        <p className="py-2 md:text-[0.95rem] md:text-justify">
          I can help you build web applications that make your life easier.
          Whether you’re starting from scratch, improving an existing system, or
          trying to optimize a process, I focus on creating practical,
          user-friendly solutions that simplify things for everyone involved. If
          you’re looking for a developer who listens closely to your needs,
          values simplicity, and works hard to deliver the best results, I’m the
          right person for the job. My aim is to understand exactly what you
          need and make sure the solution we build together is not just
          effective, but easy to maintain and scale in the future.
        </p>
        <h2 className="font-pageFont md:text-[1.5rem] font-bold py-3">
          My Work Process
        </h2>

        <p className="py-2 md:text-[0.95rem] md:text-justify">
          I believe in a straightforward, collaborative approach to development.
          My process involves understanding your goals, creating a plan that
          aligns with those objectives, and delivering quality work every step
          of the way.
        </p>
        <h2 className="font-pageFont md:text-[1.5rem] font-bold py-3">
          Let's Build Something Together
        </h2>

        <p className="py-2 md:text-[0.95rem] md:text-justify">
          If you’re looking for a developer who values simplicity, hard work,
          and delivering real solutions, let’s connect! I’m excited to help you
          bring your ideas to life and make them a reality. Whether you’re
          working on a personal project or a business solution, I’m here to help
          you build something that works for you and your users.
        </p>

        <div className="my-5 lg:w-[20%]">
         <Link href={"/contact"}>
          <CustomButton text={"Let's build"}>
            <FaArrowRight />
          </CustomButton>
         </Link>
        </div>
      </div>
    </article>
  );
};

export default About;
