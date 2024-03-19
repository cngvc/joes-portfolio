import { Link } from "react-router-dom";
import { internal } from "../urls";
import RootLayout from "../components/RootLayout";
import Surface from "../components/Surface";

const NotFound = () => {
  return (
    <RootLayout>
      <Surface />
      <div className="h-screen max-w-screen-xl w-full flex flex-col mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="flex flex-col gap-2 relative w-full md:w-4/5 lg:w-3/5 items-center">
            <img
              src={"/assets/not-found.png"}
              className="max-w-[12rem] w-full h-auto object-contain rounded-md absolute -translate-y-full z-50"
            />
            <div className="border border-secondary flex flex-col p-6 items-center justify-center w-full gap-4 bg-secondary/5">
              <h1 className="text-center">404</h1>
              <p className="t3 text-center">
                Oops ... sorry I can't find the page you're looking for.
              </p>
              <Link
                to={internal.home}
                replace
                className="t3 text-center text-secondary"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default NotFound;
