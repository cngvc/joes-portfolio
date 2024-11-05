import React, { ReactNode } from "react";

const Social: React.FC<{ url: string; type: string; icon: ReactNode }> = ({
  url,
  type,
  icon,
}) => {
  return (
    <a
      href={url}
      target="_blank"
      aria-label={type}
      className="p-1.5 rounded-full w-10 h-10 bg-primary/20 hover:bg-primary/40 flex items-center justify-center duration-200 hover:-translate-y-1"
    >
      {icon}
    </a>
  );
};

export default Social;
