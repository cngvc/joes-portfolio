import { useTheme } from "next-themes";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import Window from "./window";

const About = () => {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col gap-2 relative bg-background">
      <div className="max-w-[10rem] w-full h-auto absolute right-4 -translate-y-full">
        <div className="w-full flex items-end relative">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <LazyLoadImage
                  alt="Avatar"
                  src={
                    theme === "dark"
                      ? "/assets/avatar.png"
                      : "/assets/avatar-light.png"
                  }
                  className="object-contain z-50 w-32 md:w-40 h-32 md:h-40"
                />
              </TooltipTrigger>
              <TooltipContent side="left">
                Hi, Nice to meet you!.
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      <div className="border border-primary flex flex-col rounded-md overflow-hidden">
        <Window />
      </div>
    </div>
  );
};

export default About;
