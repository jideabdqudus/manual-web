import * as React from "react";
import { cn } from "@/src/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Component = asChild ? "span" : "button";

    return (
      <Component
        className={cn(
          `inline-flex items-center justify-center text-xs font-bold bg-secondary  text-white px-[30px] py-[15px] ${className} w-[156px] h-[45px] hover:bg-[#7A2819]`
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
