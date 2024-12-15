import React from "react";
import { cn } from "@/lib/utils";

const Icon = ({ src: Src, size = 24, className, ...props }) => {
  return (
    <Src
      className={cn("inline-block", className)}
      width={size}
      height={size}
      {...props}
    />
  );
};

export default Icon;
