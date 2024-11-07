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
      <div className={`${pageFont.variable} flex justify-center p-3`}>
        <div className="lg:w-[60%] md:w-[80%] w-full flex flex-col items-center">
          <div className="text-center flex items-center flex-col">
            <h1 className="font-pageFont md:text-[3.5rem] text-[2rem] text-center">
              Have a project in mind?
            </h1>
            <p className="text-sm md:w-[60%] py-4">
              I strive to deliver the very best, and be rest-assured you get a
              great experience working with me.{" "}
              <strong className="dark:lime-text-500">
                Let's get started already...
              </strong>
            </p>
          </div>
          <div className="my-8 md:w-[50%] py-8 px-4 rounded-md shadow dark:bg-stone-950">
            <form action="#" className="">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="What's your name?"
                  className="w-[100%] text-sm rounded-md py-3 px-3 shadow-sm mb-8 dark:bg-black dark:text-white"
                />
                <textarea
                  type="text"
                  name="name"
                  placeholder="And your message to me?"
                  maxLength={10}
                  className="w-[100%] text-sm rounded-md py-3 px-3 shadow-sm mb-8 dark:bg-black dark:text-white"
                />
              </div>
              <button
                type="submit"
                className="w-[100%] text-center bg-black dark:bg-lime-500 text-white py-1 rounded-md"
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
