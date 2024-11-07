const CustomButton = ({ children, text, size }) => {
  const classNames = () => {
    return (
      <div className="px-8">
        <div className="px-10"></div>
      </div>
    );
  };

  return (
    <div
      className={`flex py-3 px-${size} items-center rounded-md justify-center w-full bg-stone-950 dark:text-black dark:bg-lime-500 hover:bg-lime-500 text-white cursor-pointer `}
    >
      {children}
      <button className="ml-2 text-xs ">{text}</button>
    </div>
  );
};

export default CustomButton;
