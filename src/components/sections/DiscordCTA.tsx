"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Hash } from "lucide-react";
import { Button, Section } from "@/components/ui";

const DISCORD_URL = "https://discord.gg/KrWuKuqcDt";

export default function DiscordCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-y border-border bg-surface"
    >
      {/* Very faint radial glow, same technique as the hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(720px circle at 50% 0%, color-mix(in srgb, var(--accent) 12%, transparent), transparent 70%)",
        }}
      />

      <Section tight innerClassName="flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-accent">
            <Hash className="h-5 w-5" />
          </span>

          <h2 className="mt-6 max-w-2xl text-balance text-4xl font-semibold sm:text-5xl">
            Join the Freecant Discord
          </h2>

          <p className="mt-4 max-w-xl text-muted">
            Jump into the welcome channel, unlock rank-based roles, and browse
            a wall of fame full of real client reviews.
          </p>

          <Button
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            className="mt-8"
            analyticsEvent="join_discord_click"
            analyticsData={{ location: "discord_cta" }}
          >
            Join the Discord
          </Button>
        </motion.div>
      </Section>
    </section>
  );
}
