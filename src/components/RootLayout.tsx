import { ThemeProvider } from "next-themes";
import React, { useEffect } from "react";

type RootProps = {
  children: React.ReactNode;
};

const RootLayout: React.FC<RootProps> = ({ children }) => {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const surface = document.getElementById("surface");
      if (surface) {
        surface.style.background = `radial-gradient(600px at ${
          event.clientX
        }px ${
          event.clientY + window.scrollY
        }px, rgba(227, 135, 79, 0.1), transparent 80%)`;
      }
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <ThemeProvider attribute={"class"} defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
};

export default RootLayout;
