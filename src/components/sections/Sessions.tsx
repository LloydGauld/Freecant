"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Lock } from "lucide-react";
import { Badge, Button, Section } from "@/components/ui";
import { cn } from "@/lib/cn";
import { CONSULT_URL, METAFY_URLS } from "@/data/site";

type Session = {
  title: string;
  price: string;
  priceNote: string;
  /** Small callout under the price, e.g. a savings note. */
  priceCallout?: string;
  description: string;
  bullets: string[];
  href: string;
  buttonLabel: string;
  /** Strongest visual weight + "Best value" badge. */
  featured?: boolean;
};

const SESSIONS: Session[] = [
  {
    title: "1-on-1 Live Coaching",
    price: "$25",
    priceNote: "per hour",
    description: "Live, real-time coaching built around your rank and goals.",
    bullets: [
      "Live replay analysis to spot mistakes",
      "Mechanics & game-sense training",
      "Real-time match coaching",
      "Tailored to your rank and goals",
    ],
    href: METAFY_URLS.liveCoaching,
    buttonLabel: "Book a session",
  },
  {
    title: "4-Session Programme",
    price: "$90",
    priceNote: "4 sessions",
    priceCallout: "Save $10 vs single sessions",
    description: "A structured coaching block built around your progress.",
    bullets: [
      "Four full 1-on-1 sessions",
      "Written training plan after each",
      "Replay feedback via Discord",
      "Priority calendar booking",
    ],
    href: METAFY_URLS.programme,
    buttonLabel: "Get the programme",
    featured: true,
  },
  {
    title: "Replay Review",
    price: "$12.50",
    priceNote: "per review",
    description: "Async replay analysis with a 48-hour turnaround.",
    bullets: [
      "15–20 min recorded video breakdown",
      "Your top 2–3 limiting habits",
      "A concrete plan to fix them",
      "Yours to rewatch anytime",
    ],
    href: METAFY_URLS.replayReview,
    buttonLabel: "Order a replay review",
  },
  {
    title: "Team Coaching",
    price: "$25",
    priceNote: "per hour",
    description:
      "Coaching for your 2s or 3s team, built around how you play together.",
    bullets: [
      "Team replay review",
      "Rotation and spacing as a unit",
      "Clear, simple callouts",
      "A gameplan for your next matches",
    ],
    href: METAFY_URLS.teamCoaching,
    buttonLabel: "Book team coaching",
  },
];

export default function Sessions() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section id="sessions" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold sm:text-5xl">
          Pick the coaching that fits
        </h2>
        <p className="mt-4 text-muted">
          Live sessions, replay reviews, team coaching or a full four-week
          programme.
        </p>
      </div>

      <div
        ref={ref}
        className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:items-stretch"
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
                  Best value
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

              {session.priceCallout && (
                <p className="mt-1 text-xs text-accent">{session.priceCallout}</p>
              )}

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
                {session.buttonLabel}
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      <p className="mt-10 flex items-center justify-center gap-1.5 text-center text-xs text-muted">
        <Lock className="h-3 w-3 shrink-0" />
        Booking and secure checkout on Metafy, with my live calendar so you
        pick your own time.
      </p>

      <div className="mt-6 flex flex-col items-center gap-3 text-center">
        <p className="text-sm text-muted">
          Not sure which to pick? Book a free 15-minute consult and
          I&rsquo;ll point you to the right session.
        </p>
        <Button
          href={CONSULT_URL}
          target="_blank"
          rel="noopener noreferrer"
          variant="ghost"
          size="md"
          analyticsEvent="consult_click"
          analyticsData={{ location: "sessions" }}
        >
          Book a free consult
        </Button>
      </div>
    </Section>
  );
}
