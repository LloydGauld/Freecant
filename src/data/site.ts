// Single source of truth for booking-related links and copy.
//
// Booking currently runs through Stripe Payment Links + a Discord DM to lock
// in a time. When that moves to Cal.com, this file (and only this file)
// should need to change — every component below reads from here.

/** Discord server invite — used for booking, support and the "join" CTAs. */
export const DISCORD_URL = "https://discord.gg/KrWuKuqcDt";

/** Stripe Payment Link behind the /tip redirect. */
export const TIP_URL = "https://buy.stripe.com/7sY14pc047Bc2644zo57W04";

/** Stripe Payment Link for each session product, keyed by session id. */
export const STRIPE_URLS = {
  liveCoaching: "https://buy.stripe.com/cNi00ld48dZA7qod5U57W01",
  programme: "https://buy.stripe.com/3cI28te8cbRs264fe257W02",
  vodReview: "https://buy.stripe.com/7sY14p6FK08K6mk3vk57W03",
} as const;

export type HowItWorksStep = {
  title: string;
  description: string;
};

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    title: "Pick your coaching",
    description: "Choose a session above and pay securely through Stripe.",
  },
  {
    title: "Book your time on Discord",
    description:
      "Join the Discord and message me with your rank, your goals and a few times that suit you. For a VOD review, send your replay instead.",
  },
  {
    title: "Get coached",
    description:
      "Your live session happens at the time we agreed, or your recorded VOD breakdown arrives within 48 hours.",
  },
];

/**
 * Reschedule/refund policy — the single source of truth shared by the FAQ
 * answer and the /policies page, so the two can never drift apart.
 */
export const REFUND_POLICY =
  "Rescheduling: message me on Discord at least 24 hours before your session. Refunds: if we haven't had your session yet and it's at least 24 hours before your session, message me and I'll refund you in full.";

export type FaqItem = {
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "How do I book my session time after paying?",
    answer:
      "Join the Freecant Discord and message me. Send your rank, what you want to work on and a few times that suit you, and we'll lock in a slot together.",
  },
  {
    question: "How does a VOD review work?",
    answer:
      "After paying, send me your replay on Discord. Within 48 hours you'll get a 15–20 minute recorded breakdown of your top 2–3 limiting habits, plus a concrete plan to fix them.",
  },
  {
    question: "What do I need for a live session?",
    answer:
      "Discord for the call to watch the screen share. Having a few recent replays saved helps us get straight into it.",
  },
  {
    question: "What ranks do you coach?",
    answer:
      "Everyone from Bronze to RLCS-level players. Every session is built around your rank and your goals.",
  },
  {
    question: "What time zone are you in?",
    answer:
      "I'm based in the UK and coach players all over the world. When you message me, send a few times in your own time zone and we'll find a slot that works.",
  },
  {
    question: "Can I reschedule or get a refund?",
    answer: REFUND_POLICY,
  },
  {
    question: "What currency are the prices in?",
    answer:
      "US dollars. If you pay with a card in another currency, it's converted automatically when you pay.",
  },
];
