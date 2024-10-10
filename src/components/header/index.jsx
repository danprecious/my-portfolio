import CustomButton from "../utilities/button";
import { FaDownload,  } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import Logo from "./logo";

import NavBar from "./nav";

const Header = () => {
  return (
    <header className="w-[100%] sticky top-0 z-50 md:py-6 items-center justify-center  md:justify-between md:px-12 px-4 flex">
      <div className="lg:w-[25%] justify-start">

      <Logo />
      </div>
      <div className="flex lg:w-[40%] justify-between items-center">
        <NavBar />
      </div>
        <div className="hidden md:flex justify-end w-[20%]">
          <CustomButton text="Download CV" size="8">
            <FaDownload />
          </CustomButton>
        </div>
      
    </header>
  );
};

export default Header;
