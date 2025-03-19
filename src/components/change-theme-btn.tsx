import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { memo } from "react";
import { IoMoon } from "react-icons/io5";
import { MdSunny } from "react-icons/md";
import { Button } from "./ui/button";

const ChangeThemeBtn = memo(() => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="t5 text-muted-foreground flex items-center drop-shadow-xl gap-1">
      <span>Interface theme</span>

      {/* sun */}
      <Button
        variant="blank"
        onClick={() => setTheme("light")}
        className={cn(
          "relative p-1.5 cursor-pointer group hover:-translate-y-1 hover:opacity-100 duration-100",
          theme === "light" ? "-translate-y-1" : "opacity-50",
        )}
      >
        <MdSunny className="text-sun size-5" />

        {theme === "light" && (
          <motion.div
            className="absolute inset-0 w-10 h-10 rounded-full bg-sun blur-xl opacity-90"
            animate={{
              opacity: 0.8,
              scale: [1, 1.2, 1],
              boxShadow: "0px 0px 20px var(--primary)",
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        )}
      </Button>

      {/* moon */}
      <Button
        variant="blank"
        onClick={() => setTheme("dark")}
        className={cn(
          "relative p-1.5 cursor-pointer group hover:-translate-y-1 hover:opacity-100 duration-100",
          theme === "dark" ? "-translate-y-1" : "opacity-50",
        )}
      >
        <IoMoon
          className={cn(
            "size-5",
            theme === "dark" ? "text-moon" : "text-muted-foreground",
          )}
        />
        <div
          className={cn(
            "absolute inset-0 w-10 h-10 rounded-full bg-moon opacity-0 blur-md duration-100 group-hover:opacity-50",
            theme === "dark" && "opacity-50",
          )}
        />

        {theme === "dark" && (
          <motion.div
            className="absolute inset-0 w-10 h-10 rounded-full bg-moon blur-xl opacity-60"
            animate={{
              scale: [1, 1.2, 1],
              boxShadow: "0px 0px 20px var(--moon)",
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        )}
      </Button>
    </div>
  );
});

export default ChangeThemeBtn;
