"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Lock } from "lucide-react";
import { Badge, Button, Section } from "@/components/ui";
import { cn } from "@/lib/cn";

type Session = {
  title: string;
  price: string;
  priceNote: string;
  description: string;
  bullets: string[];
  href: string;
  /** Middle tier: stronger visual weight + "Most popular" badge. */
  featured?: boolean;
};

// TODO: swap in the real listing once the Group Cohort product is live.
const SESSIONS: Session[] = [
  {
    title: "1-on-1 Live Coaching",
    price: "$20",
    priceNote: "per hour",
    description: "Live, real-time coaching built around your rank and goals.",
    bullets: [
      "Live replay analysis to spot mistakes",
      "Mechanics & game-sense training",
      "Real-time match coaching",
      "Tailored to your rank and goals",
    ],
    href: "https://buy.stripe.com/cNi00ld48dZA7qod5U57W01",
  },
  {
    title: "4-Session Programme",
    price: "$70",
    priceNote: "4 sessions",
    description: "A structured coaching block built around your progress.",
    bullets: [
      "Four full 1-on-1 sessions",
      "Written training plan after each",
      "Replay feedback via Discord",
      "Priority calendar booking",
    ],
    href: "https://buy.stripe.com/3cI28te8cbRs264fe257W02",
    featured: true,
  },
  {
    title: "VOD Review",
    price: "$12.50",
    priceNote: "per review",
    description: "Async replay analysis with a 48-hour turnaround.",
    bullets: [
      "15–20 min recorded video breakdown",
      "Your top 2–3 limiting habits",
      "A concrete plan to fix them",
      "Yours to rewatch anytime",
    ],
    href: "https://buy.stripe.com/7sY14p6FK08K6mk3vk57W03",
  },
];

export default function Sessions() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section id="sessions" className="border-t border-border">
      <div className="mx-auto max-w-2xl text-center">
        <Badge>Sessions</Badge>
        <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
          Pick the coaching that fits
        </h2>
        <p className="mt-4 text-muted">
          One-off sessions, async reviews, or a full structured block — all
          delivered by an ex-pro RLCS coach.
        </p>
      </div>

      <div
        ref={ref}
        className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-stretch"
      >
        {SESSIONS.map((session, index) => (
          <motion.div
            key={session.title}
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
            className={cn("h-full", session.featured && "lg:scale-105")}
          >
            <div
              className={cn(
                "relative flex h-full flex-col rounded-3xl border bg-surface p-8 transition-transform duration-200 hover:-translate-y-1",
                session.featured
                  ? "border-accent"
                  : "border-border hover:border-accent/40",
              )}
              style={
                session.featured
                  ? {
                      boxShadow:
                        "0 0 60px -20px color-mix(in srgb, var(--accent) 45%, transparent)",
                    }
                  : undefined
              }
            >
              {session.featured && (
                <Badge
                  filled
                  className="absolute -top-3 left-1/2 -translate-x-1/2"
                >
                  Most popular
                </Badge>
              )}

              <h3 className="font-display text-xl font-semibold">
                {session.title}
              </h3>

              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-display text-4xl font-semibold tabular-nums">
                  {session.price}
                </span>
                <span className="text-sm text-muted">{session.priceNote}</span>
              </div>

              <p className="mt-4 text-sm text-muted">{session.description}</p>

              <ul className="mt-6 flex-1 space-y-3">
                {session.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <Button
                href={session.href}
                target="_blank"
                rel="noopener noreferrer"
                variant={session.featured ? "primary" : "ghost"}
                className="mt-8 w-full"
              >
                Book
              </Button>

              <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-muted">
                <Lock className="h-3 w-3" />
                Secure checkout via Stripe
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
