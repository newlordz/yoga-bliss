import React from "react";

export interface ProgressBarProps {
  value: number;
  max?: number;
  label?: string;
  /** Accessible name to use when `label` is intentionally hidden. */
  ariaLabel?: string;
  showPercent?: boolean;
  className?: string;
}

export function ProgressBar({
  value,
  max = 100,
  label = "Progress",
  ariaLabel,
  showPercent = false,
  className = "",
}: ProgressBarProps) {
  const safePercent = Math.min(100, Math.max(0, Math.round((value / max) * 100)));

  return (
    <div className={`w-full ${className}`}>
      {(label || showPercent) && (
        <div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-[#2d6a4f] mb-1.5">
          <span>{label}</span>
          {showPercent && <span>{safePercent}%</span>}
        </div>
      )}
      <div
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={ariaLabel || label}
        className="h-3 w-full overflow-hidden rounded-full bg-[#ede7dc]"
      >
        <div
          className="h-full bg-gradient-to-r from-[#2d6a4f] to-[#52b788] transition-all duration-300 ease-out rounded-full"
          style={{ width: `${safePercent}%` }}
        />
      </div>
    </div>
  );
}
