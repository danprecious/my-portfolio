import PageContainer from "@/components/pageContainer";
import Image from "next/image";
import localFont from "next/font/local";

const pageFont = localFont({
  // recoleta-regulardemo.otf
  src: "../../../public/fonts/ModernAesthetic-DemoVersion-Regular.otf",
  variable: "--font-pageFont",
});

export default function ProjectLayout({ children }) {
  return (
    <PageContainer title="projects">
      <div className="flex">
        <div className=" hidden lg:block lg:fixed lg:w-[15em] lg:max-w-[20em] lg:ml-10 ">
          <div className="lg:h-[35em]  object-cover lg:flex lg:items-end">
            jj <br />
            jj <br />
            jj <br />
            jj <br />
            jj <br />
            jj <br />
          </div>
        </div>
        <div className={`flex right-0 ml-[20em] lg:w-[80%] p-5 ${pageFont.variable}`}>
          <div className="w-full">{children}</div>
        </div>
      </div>
    </PageContainer>
  );
}
