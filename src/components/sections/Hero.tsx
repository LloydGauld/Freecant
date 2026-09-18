"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Badge, Button, Section } from "@/components/ui";

const METAFY_URL = "https://metafy.gg/@freecant";
const DISCORD_URL = "https://discord.gg/KrWuKuqcDt";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Very faint radial glow behind the headline */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(640px circle at 18% 25%, color-mix(in srgb, var(--accent) 14%, transparent), transparent 70%)",
        }}
      />

      <Section innerClassName="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Badge>EX-PRO · RLCS COACH · COACHED BRONZE TO RLCS</Badge>

          <h1 className="mt-6 text-balance text-5xl font-semibold sm:text-6xl lg:text-7xl">
            Rank up faster with coaching that actually works.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted">
            1-on-1 Rocket League coaching from an ex-pro RLCS coach. Bronze to
            Grand Champ, I&rsquo;ve coached them all.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button
              href={METAFY_URL}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              analyticsEvent="book_session_click"
              analyticsData={{ location: "hero" }}
            >
              Book a session
            </Button>
            <Button
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              size="lg"
              analyticsEvent="join_discord_click"
              analyticsData={{ location: "hero" }}
            >
              Join the Discord
            </Button>
          </div>
        </motion.div>

        {/* Space for a video embed or image */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          className="flex aspect-video w-full items-center justify-center rounded-3xl border border-border bg-surface"
        >
          <div className="flex flex-col items-center gap-3 text-muted">
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-border">
              <Play className="h-5 w-5 translate-x-0.5 text-foreground" />
            </span>
            <span className="text-xs uppercase tracking-[0.15em]">
              Video coming soon
            </span>
          </div>
        </motion.div>
      </Section>
    </section>
  );
}
