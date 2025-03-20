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
      className="flex items-center justify-center rounded-full w-8 h-8 bg-primary/20 hover:bg-primary/40 duration-100 hover:-translate-y-1"
    >
      {icon}
    </a>
  );
};

export default Social;
