import { motion } from "framer-motion";
import React, { ReactNode } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const Social: React.FC<{ url: string; type: string; icon: ReactNode }> = ({
  url,
  type,
  icon,
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <motion.a
            href={url}
            target="_blank"
            aria-label={type}
            whileHover={{ translateY: -4, scale: 1.15 }}
            transition={{ duration: 0.1 }}
            className="flex items-center justify-center rounded-full w-8 h-8 bg-primary/20 hover:bg-primary/40"
          >
            {icon}
          </motion.a>
        </TooltipTrigger>
        <TooltipContent>{type}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Social;
