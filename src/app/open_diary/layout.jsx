import PageContainer from "@/components/pageContainer";
import Image from "next/image";
import localFont from "next/font/local";


const pageFont = localFont({
  // recoleta-regulardemo.otf
  src: "../../../public/fonts/ModernAesthetic-DemoVersion-Regular.otf",
  variable: "--font-pageFont",
});

export default function DiaryLayout({ children }) {
  return (
    <PageContainer title="Open Diary">
      <div className="lg:fixed block lg:w-[15em] lg:max-w-[20em] lg:ml-10 ">
        <div className="lg:h-[35em] h-[75vh] object-cover lg:flex lg:items-end">
            jj <br />
            jj <br />
            jj <br />
            jj <br />
            jj <br />
            jj <br />
        </div>
      </div>
      <div className={`flex  lg:justify-en lg:ml-[20em] right-0 p-5 ${pageFont.variable}`}>
        {children}
      </div>
    </PageContainer>
  );
}
