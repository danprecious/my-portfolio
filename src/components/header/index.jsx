import CustomButton from "../utilities/button";
import { FaDownload,  } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import Logo from "./logo";

import NavBar from "./nav";

const Header = () => {
  return (
    <header className="w-[100%] sticky top-0 z-50 py-8 items-center  justify-between md:px-12 px-4 flex">
      <div className="hidden  px-8"></div>
      <Logo />
      <div className="flex lg:w-[50%] xl:w-[40%] md:w-[70%] justify-between items-center">
        <NavBar />
        <div className="hidden md:flex">
          <CustomButton text="Download CV" size="8">
            <FaDownload />
          </CustomButton>
        </div>
      </div>
      <div className="md:hidden "><BiMenu /></div>
    </header>
  );
};

export default Header;
