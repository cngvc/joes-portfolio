import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Window from "./window";

const About = () => {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col gap-2 relative bg-background">
      <div className="max-w-[10rem] w-full h-auto absolute right-4 -translate-y-full">
        <div className="w-full flex items-end relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={theme}
              initial={{ opacity: 0, y: 120 }}
              animate={{
                opacity: [0, 1, 1, 1, 1, 1],
                y: [120, 80, 80, 0],
              }}
              exit={{ opacity: [1, 1, 1, 1, 0], y: [0, 80, 80, 120] }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <LazyLoadImage
                alt="Avatar"
                src={
                  theme === "dark"
                    ? "/assets/avatar.png"
                    : "/assets/avatar-light.png"
                }
                className="object-contain w-full h-full"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="border border-primary flex flex-col rounded-md overflow-hidden">
        <Window />
      </div>
    </div>
  );
};

export default About;
