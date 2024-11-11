const CustomButton = ({ children, text, size }) => {
  const classNames = () => {
    return (
      <div className="px-8">
        <div className="px-10"></div>
      </div>
    );
  };

  return (
    <button
      className={`flex py-3 px-${size} z-[100px] flex justify-center text-center w-full rounded-md bg-stone-950 dark:text-black dark:bg-lime-500 hover:bg-lime-500 text-white cursor-pointer `}
    >
      {children}
      <span className="ml-2 text-xs z-50 text-center">{text}</span>
    </button>
  );
};

export default CustomButton;
