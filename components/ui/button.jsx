import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-[8px] text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-[#37C390] text-white shadow-[0px_0px_0px_1px_#2FA67B,0px_1px_3px_0px_rgba(44,159,117,0.20),0px_-2.4px_0px_0px_#4BD2A0_inset] hover:bg-[#37C390]/90",
        secondary:
          "bg-white text-black shadow-[0px_0px_0px_1px_#EBEBEB,0px_1px_3px_0px_rgba(143,143,143,0.20),0px_-2.4px_0px_0px_rgba(62,62,62,0.04)_inset] hover:bg-gray-50",
        destructive: "bg-[#FB3748] text-white hover:bg-[#FB3748]/90",
        outline: "border border-[#E1E4EA] bg-white text-black hover:bg-gray-50",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

const Button = (
  { className, variant, size, asChild = false, ...props },
  ref
) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
};
Button.displayName = "Button";

export { Button, buttonVariants };
