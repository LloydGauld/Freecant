import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Button, Section } from "@/components/ui";

const DISCORD_URL = "https://discord.gg/KrWuKuqcDt";

export const metadata: Metadata = {
  title: "Thank you",
  robots: { index: false, follow: false },
};

export default function ThankYou() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(720px circle at 50% 0%, color-mix(in srgb, var(--accent) 12%, transparent), transparent 70%)",
        }}
      />

      <Section innerClassName="flex flex-col items-center text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-border text-accent">
          <CheckCircle2 className="h-7 w-7" />
        </span>

        <h1 className="mt-6 max-w-2xl text-balance text-4xl font-semibold sm:text-5xl">
          Payment confirmed
        </h1>

        <p className="mt-4 max-w-xl text-muted">
          Thanks for your purchase! Stripe will email your receipt shortly.
        </p>

        <p className="mt-2 max-w-xl text-muted">
          Next step: join the Discord and message me there to schedule your
          session.
        </p>

        <Button
          href={DISCORD_URL}
          target="_blank"
          rel="noopener noreferrer"
          size="lg"
          className="mt-10 px-12 py-5 text-lg"
          analyticsEvent="join_discord_click"
          analyticsData={{ location: "thank_you" }}
        >
          Join Discord
        </Button>
      </Section>
    </section>
  );
}
