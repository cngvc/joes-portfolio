import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const Card: React.FC<{ children: ReactNode; className?: string }> = ({
  children,
  className = "",
}) => {
  return (
    <div className={cn("group lg:hover:hero", className)}>
      <div className="duration-100 lg:group-hover:bg-primary/5 overflow-hidden h-auto">
        {children}
      </div>
    </div>
  );
};

export default Card;
