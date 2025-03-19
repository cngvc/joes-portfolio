import { useTheme } from "next-themes";
import { LazyLoadImage } from "react-lazy-load-image-component";
import BackHome from "../components/back-home";
import Layout from "../components/main-layout";

const NotFound = () => {
  const { theme } = useTheme();

  return (
    <Layout hideProgress>
      <div className="h-screen max-w-(--breakpoint-2xl) w-full flex flex-col mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="flex flex-col gap-2 relative w-full md:w-4/5 lg:w-3/5 items-center">
            <LazyLoadImage
              alt="Not found"
              src={
                theme === "dark"
                  ? "/assets/not-found.png"
                  : "/assets/not-found-light.png"
              }
              className="max-w-[12rem] w-full h-auto object-contain absolute -translate-y-full z-50"
            />
            <div className="border border-primary flex flex-col p-6 items-center justify-center w-full gap-4 bg-primary/5">
              <h1 className="text-center">404</h1>
              <p className="t4 text-center">
                Oops ... sorry I can't find the page you're looking for.
              </p>
              <BackHome />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
