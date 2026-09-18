import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionProps = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  id?: string;
  as?: ElementType;
  /** Use the smaller vertical rhythm (e.g. for compact sections). */
  tight?: boolean;
};

export default function Section({
  children,
  className,
  innerClassName,
  id,
  as: Tag = "section",
  tight = false,
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={cn(tight ? "py-section-y-sm" : "py-section-y", className)}
    >
      <div className={cn("mx-auto max-w-content px-6", innerClassName)}>
        {children}
      </div>
    </Tag>
  );
}
