import { ThemeProvider } from "next-themes";
import React from "react";

type RootProps = {
  children: React.ReactNode;
};

const RootLayout: React.FC<RootProps> = ({ children }) => {
  return (
    <ThemeProvider attribute={"class"} defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
};

export default RootLayout;
