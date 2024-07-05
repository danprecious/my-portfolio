import localFont from "next/font/local";

const pageFont = localFont({
  // recoleta-regulardemo.otf
  src: "../../../public/fonts/ModernAesthetic-DemoVersion-Regular.otf",
  variable: "--font-pageFont",
});

const PageContainer = ({ title, children }) => {
  return (
    <section className="min-h-[calc(100vh-7em)]">
      {children}
      <div
        className={`fixed bottom-12 text-right mr-10 w-[50%] opacity-5 right-[0px] ${pageFont.variable}`}
      >
        <p className="z-50 font-pageFont md:text-[6em] text-[3em]">{title}</p>
      </div>
    </section>
  );
};

export default PageContainer;
