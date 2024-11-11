import CustomButton from "../utilities/button";
import { FaDownload,  } from "react-icons/fa";
import Logo from "./logo";

import NavBar from "./nav";

const Header = () => {
  return (
    <header className="w-[100%] sticky top-0 z-50 md:py-6 items-center justify-center bg-white dark:bg-transparent backdrop-blur-md bg-opacity-50  md:justify-between md:px-12 px-4 flex">
      <div className="lg:w-[25%] justify-start">
      <Logo />
      </div>
      <div className="flex lg:w-[30%] md:w-[50%] justify-between items-center">
        <NavBar />
      </div>
        <div className="hidden md:flex justify-end md:w-[25%] lg:w-[15%] ">
          <CustomButton text="Download CV" size="8">
            <FaDownload />
          </CustomButton>
        </div>
      
    </header>
  );
};

export default Header;
