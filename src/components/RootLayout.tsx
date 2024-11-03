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
        }px, rgba(15, 76, 117, 0.2), transparent 80%)`;
      }
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const surface = document.getElementById("surface");
      if (surface) {
        surface.style.background = `transparent`;
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <>{children}</>;
};

export default RootLayout;
