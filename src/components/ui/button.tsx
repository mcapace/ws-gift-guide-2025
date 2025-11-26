import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      asChild = false,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wine-burgundy focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    const variants = {
      primary:
        "bg-wine-burgundy text-white hover:bg-wine-burgundy-dark active:bg-wine-burgundy-dark",
      secondary:
        "bg-champagne-gold text-neutral-black hover:bg-champagne-gold-dark active:bg-champagne-gold-dark",
      outline:
        "border-2 border-wine-burgundy text-wine-burgundy hover:bg-wine-burgundy/10 active:bg-wine-burgundy/20",
      ghost:
        "text-wine-burgundy hover:bg-wine-burgundy/10 active:bg-wine-burgundy/20",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-14 px-8 text-lg",
    };

    return (
      <button
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };

