import CustomButton from "../utilities/button";

const ThoughtCard = ({ title, text, thumbnail }) => {
  return (
    <div className="w-[] flex my-8 shadow p-4  hover:grow">
      {/* thumbnail */}
      <div className="w-[20%] flex items-center">
        <div className="h-[70%] w-[100%]"></div>
      </div>
      {/* title and entry text */}
      <div className="w-[100%] flex flex-col">
        <h1 className="font-bold text-[1.2rem] py-2">{title}</h1>
        <p className="text-sm py-2">
          {text}
        </p>
        <div className="flex justify-end">
          <CustomButton text="Read" size="2"></CustomButton>
        </div>
      </div>
    </div>
  );
};

export default ThoughtCard;
