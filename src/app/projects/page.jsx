import PageContainer from "@/components/pageContainer";

const Projects = () => {
  return (
    <div className="flex flex-col md:max-w-[100%]">
      <div>
        <h1 className="font-pageFont md:text-[3rem] text-[1.8em]">Featured Projects</h1>
        <p className="max-w-[25em] text-sm">
          Driven by a passion for building, I've developed some meaningful
          projects. Here are a few:
        </p>
      </div>
      <div className="my-14">
        <div className="flex md:items-center flex-col md:flex-row">
          <div className="rounded-[100%] mx-4 md:w-[10%] md:h-[6em] h-[4em] w-[4em] bg-stone-500"></div>
          <div className="p-2 md:mx-4 md:w-[50%] my-2 md:my-0">
            <h3 className="font-pageFont text-[1.2rem]">Matera</h3>
            <p className="text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus,
              harum iusto! Qui facilis quas corrupti saepe dolor atque?
              Accusantium dolore et delectus nemo veritatis aliquid molestiae
              error, dignissimos ut labore.
            </p>
          </div>
          <div className="w-[20em] hidden lg:flex">j</div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
