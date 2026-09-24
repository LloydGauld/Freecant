"use client";

import { motion } from "framer-motion";
import { Button, LiteYouTube, Section } from "@/components/ui";
import { DISCORD_URL } from "@/data/site";

const INTRO_VIDEO_ID = "nj2V42-Bexg";

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
          <p className="text-sm font-medium text-muted">
            Former RLCS pro with Rix.gg and head coach of Roehampton
            University&rsquo;s UK and European title-winning team.
          </p>

          <h1 className="mt-6 text-balance text-5xl font-semibold sm:text-6xl lg:text-7xl">
            Rank up faster with coaching that actually works.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted">
            1-on-1 Rocket League coaching built around your replays, your
            rank and your goals. Bronze to SSL, I&rsquo;ve coached them all.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button
              href="#sessions"
              size="md"
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
              size="md"
              analyticsEvent="join_discord_click"
              analyticsData={{ location: "hero" }}
            >
              Join Discord
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
        >
          <LiteYouTube videoId={INTRO_VIDEO_ID} title="freecant coaching intro" />
        </motion.div>
      </Section>
    </section>
  );
}
