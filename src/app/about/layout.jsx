import PageContainer from "@/components/pageContainer";
import localFont from "next/font/local";
import Image from "next/image";

const pageFont = localFont({
  // recoleta-regulardemo.otf
  src: "../../../public/fonts/ModernAesthetic-DemoVersion-Regular.otf",
  variable: "--font-pageFont",
});


export default function AboutLayout({ children }) {
  return (
    <PageContainer title="about">
      <div className={`lg:fixed block lg:w-[15em] lg:max-w-[20em] lg:ml-10`}>
        <div className="lg:h-[39em] h-[70vh] object-cover">
            <Image alt="My image" src="/images/profile2.jpg" width={1024} height={1024} className="object-cover h-[100%]"/>
        </div>
      </div>
      
      <div className={`flex  lg:justify-end lg:ml-[20em] right-0  ${pageFont.variable}`}>
        <div>{children}</div>
      </div>
    </PageContainer>
  );
}
