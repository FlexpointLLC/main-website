"use client";

import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";
import { cn } from "@/lib/utils";

const CustomTooltip = ({ content, children, className, wrapperClassName }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip open={open}>
        <TooltipTrigger asChild>
          <button
            type="button"
            className={cn("cursor-pointer select-none", wrapperClassName)}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setOpen(!open);
            }}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            onKeyDown={(e) => {
              e.stopPropagation();
              e.key === "Enter" && setOpen(!open);
            }}
          >
            {children}
          </button>
        </TooltipTrigger>
        <TooltipContent className={cn(!content ? "hidden" : "", className)}>
          <span className="inline-block">{content}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default CustomTooltip;
