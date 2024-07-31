import ThoughtCard from "@/components/cards";
import PageContainer from "@/components/pageContainer";
import CustomButton from "@/components/utilities/button";
import localFont from "next/font/local";

const OpenDiary = () => {
  const thoughts = [
    {
      title: "My first thought",
      text: "This is a dummy text for the first thought post. Many more will come later but this can serve as a conceptual structure for now Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus eveniet error consequatur fugiat, debitis odio?",
      thumbnail: "",
    },
    {
      title: "My second thought",
      text: "This is a dummy text for the first thought post. Many more will come later but this can serve as a conceptual structure for now Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus eveniet error consequatur fugiat, debitis odio?",
      thumbnail: "",
    },
    {
      title: "My third thought",
      text: "This is a dummy text for the first thought post. Many more will come later but this can serve as a conceptual structure for now Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus eveniet error consequatur fugiat, debitis odio?",
      thumbnail: "",
    },
  ];

  return (
    <div className="md:w-[80%]">
      <div>
        <h1 className="font-pageFont md:text-[3rem] text-[2rem] text-wrap">
          Here, my thoughts...
        </h1>
        <p className="text-sm  md:w-[89%]">
          Sometimes, we think aloud and for me, it happens very often, some I
          try to save up for later by writing, others go into conversations with
          friends. Here, I have some lessons i've learnt so far in my journey
        </p>
      </div>
      <div className="mt-16 w-[85%]">
        {thoughts.map((thought, index) => {
          const { title, text, thumbnail } = thought;
          return (
            <ThoughtCard
              key={title}
              title={title}
              text={text}
              thumbnail={thumbnail}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OpenDiary;
