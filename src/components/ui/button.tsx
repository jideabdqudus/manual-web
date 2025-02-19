import * as React from "react";
import { cn } from "@/src/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "default" | "ghost";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, variant = "default", ...props }, ref) => {
    const Component = asChild ? "span" : "button";

    const baseClasses = `inline-flex items-center justify-center text-[10px] font-bold   ${className} `;

    const variantClasses =
      variant === "ghost"
        ? "text-alternate underline bg-transparent border-none uppercase"
        : "bg-secondary text-white hover:bg-[#7A2819]";

    const sizeClasses =
      variant === "ghost"
        ? "p-[10px]"
        : "w-[156px] h-[45px] px-[30px] py-[15px]";

    return (
      <Component
        className={cn(baseClasses, variantClasses, sizeClasses)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
