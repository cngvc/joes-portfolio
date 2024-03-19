import React, { ReactNode } from "react";

const Card: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="hover:hero">
      <div className="duration-200 hover:bg-secondary/5 overflow-hidden h-full">
        {children}
      </div>
    </div>
  );
};

export default Card;
