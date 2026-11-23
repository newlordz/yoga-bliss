import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "accent" | "muted";
}

export function Card({
  children,
  variant = "default",
  className = "",
  ...props
}: CardProps) {
  const baseStyles = "rounded-lg transition-colors p-6";

  const variantStyles = {
    default: "bg-[#faf7f2] border border-[#e4ddd3] text-[#1a241e]",
    elevated: "bg-[#ffffff] border border-[#ded5c5] text-[#1a241e]",
    accent: "bg-[#f3eee5] border border-[#c4b9a7] text-[#1a241e]",
    muted: "bg-[#f8f5ee] border border-[#ebe3d7] text-[#5c6b61]",
  };

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </div>
  );
}
