import React, { ReactNode } from "react";

const Social: React.FC<{ url: string; icon: ReactNode }> = ({ url, icon }) => {
  return (
    <a
      href={url}
      target="_blank"
      className="p-2 rounded-full w-10 h-10 bg-secondary/20 hover:bg-secondary/40 flex items-center justify-center"
    >
      {icon}
    </a>
  );
};

export default Social;
