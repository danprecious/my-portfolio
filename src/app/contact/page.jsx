import PageContainer from "@/components/pageContainer";
import localFont from "next/font/local";
import { SiGmail, SiLinkedin, SiX } from "react-icons/si";

const pageFont = localFont({
  // recoleta-regulardemo.otf
  src: "../../../public/fonts/ModernAesthetic-DemoVersion-Regular.otf",
  variable: "--font-pageFont",
});

const Contact = () => {
  return (
    <PageContainer title="Let's talk">
      <div className={`${pageFont.variable} flex justify-center`}>
        <div className="md:w-[60%] flex flex-col items-center">
          <div className="text-center flex items-center flex-col">
            <h1 className="font-pageFont md:text-[3.5rem] text-[2rem] text-center">
              Have a project in mind?
            </h1>
            <p className="text-xs md:w-[60%] py-4">
              You may have some great idea and would love to bring it to life,
              I'm your guy. I'm also available for gigs
            </p>
          </div>
          <div className="my-8 md:w-[50%] p-8 rounded-md shadow">
            <form action="#" className="">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="What's your name?"
                  className="w-[100%] text-sm rounded-md py-1 px-3 shadow-sm mb-8"
                />
                <textarea
                  type="text"
                  name="name"
                  placeholder="And your message to me?"
                  maxLength={10}
                  className="w-[100%] text-sm rounded-md py-1 px-3 shadow-sm mb-8"
                />
              </div>
              <button
                type="submit"
                className="w-[100%] text-center  bg-black text-white py-1 rounded-md"
              >
                Send
              </button>
            </form>
          </div>
          <div className="flex w-[100%] mt-8 justify-end">
            <p className="font-pageFont mx-8">Say Hi!</p>
            <p></p>
            <div className="flex w-[10%] justify-around items-center">
              <SiX />
              <SiGmail />
              <SiLinkedin />
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Contact;
