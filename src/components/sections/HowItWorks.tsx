"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button, Section } from "@/components/ui";
import { DISCORD_URL, HOW_IT_WORKS_STEPS } from "@/data/site";

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section id="how-it-works" className="border-t border-border">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold sm:text-5xl">
          How booking works
        </h2>
      </div>

      <div
        ref={ref}
        className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8"
      >
        {HOW_IT_WORKS_STEPS.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
            className="text-center sm:text-left"
          >
            <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-accent/40 font-display text-sm font-semibold text-accent sm:mx-0">
              {index + 1}
            </span>
            <h3 className="mt-4 font-display text-lg font-semibold">
              {step.title}
            </h3>
            <p className="mt-2 text-sm text-muted">{step.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Button
          href={DISCORD_URL}
          target="_blank"
          rel="noopener noreferrer"
          size="md"
          analyticsEvent="join_discord_click"
          analyticsData={{ location: "how_it_works" }}
        >
          Join the Discord
        </Button>
      </div>
    </Section>
  );
}
