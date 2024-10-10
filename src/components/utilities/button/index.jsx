


const CustomButton = ({ children, text, size }) => {

  const classNames = () => {
    return (
      <div className="px-8">

      </div>
    )
  }


  return (
    <div className={`flex py-3 px-${size} items-center rounded-md  max-w-[13em] bg-yellow-400 hover:bg-lime-500 text-white cursor-pointer `}>
      {children}
      <button className="ml-2 text-xs ">{text}</button>
    </div>
  );
};

export default CustomButton;
