"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ListChecks, MessageSquare, Trophy } from "lucide-react";
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
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-border bg-surface"
        >
          <Image
            src="/images/lloyd-about.jpg"
            alt="freecant coaching at a live Rocket League event"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          <Badge>About</Badge>
          <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
            Coached by someone who has actually competed
          </h2>
          <p className="mt-6 text-muted">
            I&rsquo;m Lloyd — a former professional Rocket League player
            (RLCS Season X, Rix.gg) and head coach of Roehampton University,
            where we won UK and European titles.
          </p>
          <p className="mt-4 text-muted">
            I don&rsquo;t just teach mechanics. I coach decision-making,
            rotation, and the habits that&rsquo;ll actually rank you up — the
            same way I&rsquo;d coach a competitive roster. I&rsquo;ve worked
            with players from Bronze to RLCS, and my job is simple: find
            what&rsquo;s holding you back and give you a plan to fix it.
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
