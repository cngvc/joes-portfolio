import { LazyLoadImage } from "react-lazy-load-image-component";
import Window from "./window";

const About = () => {
  return (
    <div className="flex flex-col gap-2 relative bg-background">
      <div className="group max-w-[10rem] w-full h-auto absolute right-4 -translate-y-full">
        <div className="w-full h-full relative">
          <LazyLoadImage
            alt="Avatar"
            src={"/assets/avatar.png"}
            className="object-contain z-50 w-32 md:w-40 h-32 md:h-40"
          />
          <div className="opacity-0 lg:group-hover:opacity-100 duration-100 absolute top-4 p-2 rounded-lg bg-[#1C1D20]/60 -translate-x-1/2 t6 backdrop-blur-xs">
            Hi, Nice to meet you!.
          </div>
        </div>
      </div>

      <div className="border border-primary flex flex-col rounded-md overflow-hidden">
        <Window />
      </div>
    </div>
  );
};

export default About;
