import React, { ReactNode } from "react";

const Card: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="group lg:hover:hero">
      <div className="duration-200 lg:lg:group-hover:bg-primary/5 overflow-hidden h-auto">
        {children}
      </div>
    </div>
  );
};

export default Card;
