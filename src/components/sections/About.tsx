"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ListChecks, MessageSquare, Trophy, User } from "lucide-react";
import { Badge, Section } from "@/components/ui";

const VALUE_PROPS = [
  {
    icon: MessageSquare,
    title: "Personalised feedback",
    description:
      "Every session is built around your replays, your rank, and your goals — not a generic curriculum.",
  },
  {
    icon: ListChecks,
    title: "Proven systems",
    description:
      "A structured approach that's already taken players from Bronze to Grand Champion and beyond.",
  },
  {
    icon: Trophy,
    title: "Real RLCS experience",
    description:
      "Coaching informed by actual competitive experience at the RLCS level, not just high rank.",
  },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section id="about" className="border-t border-border">
      <div
        ref={ref}
        className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16"
      >
        {/* Photo placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex aspect-[4/5] w-full items-center justify-center rounded-3xl border border-border bg-surface"
        >
          <div className="flex flex-col items-center gap-3 text-muted">
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-border">
              <User className="h-6 w-6" />
            </span>
            <span className="text-xs uppercase tracking-[0.15em]">
              Photo coming soon
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          <Badge>About</Badge>
          <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
            Coached by someone who&rsquo;s actually competed
          </h2>
          <p className="mt-6 text-muted">
            [Bio placeholder — swap in your story: how you got into
            competitive Rocket League, your coaching philosophy, and what
            makes freecant&rsquo;s approach different.]
          </p>

          <h3 className="mt-10 font-display text-sm font-semibold uppercase tracking-[0.15em] text-muted">
            Why freecant
          </h3>
          <ul className="mt-6 space-y-6">
            {VALUE_PROPS.map((prop) => (
              <li key={prop.title} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border text-accent">
                  <prop.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold">{prop.title}</p>
                  <p className="mt-1 text-sm text-muted">{prop.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}
