


const CustomButton = ({ children, text, size }) => {
  return (
    <div className={`flex py-3 px-${size} items-center rounded-md   max-w-[13em] bg-black text-white cursor-pointer`}>
      {children}
      <button className="mx-2 text-xs">{text}</button>
    </div>
  );
};

export default CustomButton;
