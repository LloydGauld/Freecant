"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui";

const NAV_LINKS = [
  { label: "Reviews", href: "#reviews" },
  { label: "Sessions", href: "#sessions" },
  { label: "How booking works", href: "#how-it-works" },
  { label: "Common questions", href: "#faq" },
];

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-border bg-background"
    >
      <div className="mx-auto grid h-16 max-w-content grid-cols-[auto_1fr_auto] items-center gap-4 px-6">
        <Link href="/" aria-label="freecant — back to top">
          {/* eslint-disable-next-line @next/next/no-img-element -- static
              vector logo, no benefit from next/image's raster optimizer */}
          <img src="/brand/freecant-logo.svg" alt="freecant" className="h-9 w-auto" />
        </Link>

        <nav className="hidden items-center justify-center gap-8 text-sm font-medium text-muted md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button
          href="#sessions"
          size="md"
          analyticsEvent="book_session_click"
          analyticsData={{ location: "header" }}
        >
          Book a session
        </Button>
      </div>
    </motion.header>
  );
}
