import { ReactNode, useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";
import RootLayout from "./root-layout";
import Surface from "./surface";

const MainLayout: React.FC<{ children: ReactNode; hideProgress?: boolean }> = ({
  children,
  hideProgress = false,
}) => {
  const [pagePercent, $pagePercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.offsetHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = scrollTop / (docHeight - winHeight);
      const percent = scrollPercent * 100;
      const scrollPercentRounded = Math.max(Number(percent.toFixed(2)), 0.1);
      $pagePercent(Math.ceil(scrollPercentRounded * 10) / 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <RootLayout>
      <main
        className="relative bg-pane"
        style={{ backgroundSize: "55px 45px" }}
      >
        <Surface />

        <div className="bg-pane-html">
          {!hideProgress && (
            <LoadingBar
              color="var(--primary)"
              progress={pagePercent}
              shadow={false}
              waitingTime={10000000}
              loaderSpeed={0}
            />
          )}

          <div className="min-h-screen max-w-(--breakpoint-2xl) w-full flex flex-col mx-auto px-4 sm:px-8 md:px-12 lg:px-12 xl:px-24 py-0">
            {children}
          </div>
        </div>
      </main>
    </RootLayout>
  );
};

export default MainLayout;
