import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type StatProps = {
  value: ReactNode;
  label: ReactNode;
  className?: string;
  /** Render the value in the accent color instead of off-white. */
  accent?: boolean;
};

export default function Stat({ value, label, className, accent = false }: StatProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <span
        className={cn(
          "font-display text-5xl font-semibold tabular-nums tracking-tight sm:text-6xl",
          accent ? "text-accent" : "text-foreground",
        )}
      >
        {value}
      </span>
      <span className="text-sm uppercase tracking-[0.15em] text-muted">
        {label}
      </span>
    </div>
  );
}
