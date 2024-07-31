import Image from "next/image"; 

const Logo = () => {
  return <div className="w-[50px] h-[50px]">
    <Image src="/images/dev.png" width={1000} height={1000} alt="devlogo"></Image> 
  </div>;
};

export default Logo;

