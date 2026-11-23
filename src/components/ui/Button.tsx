import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "terracotta" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      fullWidth = false,
      className = "",
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-md transition-colors duration-150 cursor-pointer disabled:cursor-not-allowed disabled:opacity-40 select-none min-h-[44px]";

    const sizeStyles = {
      sm: "px-3.5 py-1.5 text-xs gap-1.5 tracking-wider uppercase font-semibold",
      md: "px-5 py-2.5 text-sm gap-2",
      lg: "px-6 py-3.5 text-base font-semibold gap-2.5",
    };

    const variantStyles = {
      primary:
        "bg-[#1f3a2b] text-[#faf7f2] hover:bg-[#2c4e3b] active:bg-[#15271d] border border-[#1f3a2b] focus-visible:ring-2 focus-visible:ring-[#1f3a2b]",
      secondary:
        "bg-[#f3eee5] text-[#1a241e] hover:bg-[#e8e0d2] active:bg-[#ded5c5] border border-[#d9d0c1] focus-visible:ring-2 focus-visible:ring-[#1f3a2b]",
      terracotta:
        "bg-[#a34828] text-[#faf7f2] hover:bg-[#87361a] active:bg-[#6e2c14] border border-[#a34828] focus-visible:ring-2 focus-visible:ring-[#a34828]",
      outline:
        "border border-[#1f3a2b] text-[#1f3a2b] bg-transparent hover:bg-[#1f3a2b]/5 active:bg-[#1f3a2b]/10 focus-visible:ring-2 focus-visible:ring-[#1f3a2b]",
      ghost:
        "text-[#38473e] bg-transparent hover:text-[#1a241e] hover:bg-[#1a241e]/5 active:bg-[#1a241e]/10 focus-visible:ring-2 focus-visible:ring-[#1f3a2b]",
    };

    const widthStyle = fullWidth ? "w-full" : "";

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
