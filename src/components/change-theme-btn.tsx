import { Button } from "@headlessui/react";
import { useTheme } from "next-themes";
import { memo, useEffect } from "react";
import { IoMoonSharp, IoSunnySharp } from "react-icons/io5";
import { twMerge } from "tailwind-merge";

const ChangeThemeBtn = memo(() => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme && ["light", "dark"].includes(storedTheme)) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", `${theme}`);
  }, [theme]);

  return (
    <div className="t5 text-muted-foreground flex items-center drop-shadow-xl gap-2">
      <span>Theme:</span>

      {/* sun */}
      <Button
        onClick={() => setTheme("light")}
        className={twMerge(
          "relative p-1 cursor-pointer group hover:-translate-y-1 hover:opacity-100 duration-200",
          theme === "light" ? "-translate-y-1" : "opacity-50",
        )}
      >
        <IoSunnySharp className={twMerge("text-sun")} size={20} />
        <div
          className={twMerge(
            "absolute inset-0 w-7 h-7 rounded-full bg-sun opacity-0 blur-md duration-200 group-hover:opacity-50",
            theme === "light" && "opacity-50",
          )}
        ></div>
      </Button>

      {/* moon */}
      <Button
        onClick={() => setTheme("dark")}
        className={twMerge(
          "relative p-1 cursor-pointer group hover:-translate-y-1 hover:opacity-100 duration-200",
          theme === "dark" ? "-translate-y-1" : "opacity-50",
        )}
      >
        <IoMoonSharp
          className={theme === "dark" ? "text-moon" : "text-muted-foreground"}
          size={20}
        />
        <div
          className={twMerge(
            "absolute inset-0 w-7 h-7 rounded-full bg-moon opacity-0 blur-md duration-200 group-hover:opacity-50",
            theme === "dark" && "opacity-50",
          )}
        ></div>
      </Button>
    </div>
  );
});

export default ChangeThemeBtn;
