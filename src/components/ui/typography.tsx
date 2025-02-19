import * as React from "react";
import { cn } from "@/src/lib/utils";

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: "xs" | "sm" | "md" | "lg";
  weight?: "light" | "normal" | "bold";
  as?: React.ElementType;
}

export const Text: React.FC<TextProps> = ({
  size = "md",
  weight = "normal",
  as: Component = "p",
  className,
  ...props
}) => {
  const sizeClasses = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-md",
    lg: "text-lg",
  };

  const weightClasses = {
    light: "font-light",
    normal: "font-normal",
    bold: "font-bold",
  };

  return (
    <Component
      className={cn(
        `${sizeClasses[size]} ${weightClasses[weight]} text-alternate ${className}`
      )}
      {...props}
    />
  );
};
