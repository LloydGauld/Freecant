import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type BadgeProps = {
  children: ReactNode;
  className?: string;
  /** Filled accent badge instead of the default outlined style. */
  filled?: boolean;
};

export default function Badge({ children, className, filled = false }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-pill border px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.1em]",
        filled
          ? "border-accent bg-accent text-accent-foreground"
          : "border-border text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
