import ThoughtCard from "@/components/cards";
import PageContainer from "@/components/pageContainer";
import CustomButton from "@/components/utilities/button";
import localFont from "next/font/local";
import { getNotes } from "../api/actions/queryFunctions";

const OpenDiary = async () => {
  const notes = await getNotes();
  console.log(notes)

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
      <div className="mt-16 lg:w-[85%] w-full">
        {notes.map((noteData, index) => {
          const { title, note } = noteData;
          return <ThoughtCard key={title} title={title} noteText={note} />;
        })}
      </div>
    </div>
  );
};

export default OpenDiary;
