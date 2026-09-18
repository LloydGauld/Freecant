"use client";

import Link from "next/link";
import { track } from "@vercel/analytics";
import type { ButtonHTMLAttributes, MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "ghost";
type Size = "md" | "lg";

type BaseProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
  /** Fires a Vercel Analytics custom event on click, e.g. "book_session_click". */
  analyticsEvent?: string;
  /** Extra properties attached to the analytics event (e.g. { location: "hero" }). */
  analyticsData?: Record<string, string | number | boolean>;
};

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    href?: undefined;
  };

type ButtonAsLink = BaseProps & {
  href: string;
  target?: string;
  rel?: string;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

const base =
  "inline-flex items-center justify-center gap-2 rounded-pill font-display font-semibold tracking-tight transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-accent-foreground hover:bg-accent/90",
  ghost:
    "border border-border text-foreground hover:border-accent hover:text-accent",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  analyticsEvent,
  analyticsData,
  ...props
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  function fireAnalytics() {
    if (analyticsEvent) {
      track(analyticsEvent, analyticsData);
    }
  }

  if ("href" in props && props.href) {
    const { href, target, rel } = props;
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        className={classes}
        onClick={fireAnalytics}
      >
        {children}
      </Link>
    );
  }

  const { onClick, ...buttonProps } = props as ButtonHTMLAttributes<HTMLButtonElement>;

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    fireAnalytics();
    onClick?.(event);
  }

  return (
    <button className={classes} onClick={handleClick} {...buttonProps}>
      {children}
    </button>
  );
}
