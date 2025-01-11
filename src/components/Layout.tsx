import { ReactNode, useEffect, useState } from "react";
import RootLayout from "./RootLayout";
import LoadingBar from "react-top-loading-bar";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [pagePercent, setPagePercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.offsetHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = scrollTop / (docHeight - winHeight);
      const percent = scrollPercent * 100;
      const scrollPercentRounded = Math.max(Number(percent.toFixed(2)), 0.1);
      setPagePercent(scrollPercentRounded);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <RootLayout>
      <main className="relative bg-pane">
        <div className="bg-pane-html">
          <LoadingBar
            color="rgb(var(--primary-color))"
            progress={pagePercent}
            shadow={false}
            waitingTime={10000000}
            loaderSpeed={0}
          />
          <div className="min-h-screen max-w-screen-2xl w-full flex flex-col mx-auto px-4 sm:px-8 md:px-12 lg:px-12 xl:px-24 py-12 md:py-20 lg:py-0">
            {children}
          </div>
        </div>
      </main>
    </RootLayout>
  );
};

export default Layout;
