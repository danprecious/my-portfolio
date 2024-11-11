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
      <div className={`w-full pb-10 lg:px-72 px-3  ${pageFont.variable}`}>{children}</div>
    </PageContainer>
  );
}
