// Single source of truth for booking-related links and copy.
//
// Booking runs entirely through Metafy — every price, session link and
// policy below should only need to change in this one file.
//
// Exception: the short links in next.config.mjs (/book, /consult,
// /coaching, /programme, /replay, /team, /discord, /metafy, /tip) can't
// import this file, since next.config.mjs is loaded by plain Node before
// any TypeScript transform runs. Their destinations are hardcoded there
// and must be kept in sync with the URLs below by hand.

/** Discord server invite — used for support and the "join" CTAs. */
export const DISCORD_URL = "https://discord.gg/KrWuKuqcDt";

/** Metafy profile — also where the /metafy and /tip short links go. */
export const METAFY_URL = "https://metafy.gg/@freecant";

/** Free 15-minute consult — same page as the Metafy profile. */
export const CONSULT_URL = METAFY_URL;

/** All Metafy sessions listing — destination for the /book short link. */
export const METAFY_SESSIONS_URL = "https://metafy.gg/@freecant/sessions";

/** Verified Metafy reviews. */
export const METAFY_REVIEWS_URL = "https://metafy.gg/@freecant/reviews";

/** Metafy booking link for each session product, keyed by session id. */
export const METAFY_URLS = {
  liveCoaching:
    "https://metafy.gg/@freecant/sessions/1-1-live-hour-of-individual-coaching-8E3K6vfEzZf",
  programme:
    "https://metafy.gg/@freecant/sessions/structured-coaching-programme-4-sessions-ibSal2EwiLR",
  replayReview:
    "https://metafy.gg/@freecant/sessions/replay-review-48-hour-turnaround-isqBFUWTX6e",
  teamCoaching: "https://metafy.gg/@freecant/sessions/team-coaching-GUKVTVFmM24",
} as const;

export type HowItWorksStep = {
  title: string;
  description: string;
};

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    title: "Pick your coaching",
    description: "Choose a session above. It opens on my Metafy page.",
  },
  {
    title: "Book and pay on Metafy",
    description:
      "Pick a time from my live calendar and pay securely. Replay reviews don't need a time.",
  },
  {
    title: "Get coached",
    description:
      "Join the Discord and open a ticket with your rank, goals and a few recent replays. We meet on Discord at your booked time, and replay reviews arrive within 48 hours.",
  },
];

/** Reschedule/refund rule, condensed for the FAQ answer. */
export const REFUND_POLICY_SHORT =
  "Reschedule from your Metafy dashboard, or message me, at least 24 hours before your session. If your session hasn't happened yet and is at least 24 hours away, message me and I'll refund you in full.";

/**
 * Full /policies page content, one paragraph per entry. Deliberately not
 * the same string as REFUND_POLICY_SHORT above — the FAQ answer is a
 * condensed version, this is the full policy.
 */
export const REFUND_POLICY_PARAGRAPHS: string[] = [
  "All Freecant coaching is booked and paid on Metafy.",
  "Rescheduling: reschedule from your Metafy dashboard, or message me, at least 24 hours before your session.",
  "Refunds: if your session hasn't happened yet and is at least 24 hours away, message me and I'll refund you in full. Refunds arrive as Metafy credit straight away, or go back to your original payment method if you ask.",
  "Questions? Message me on Metafy or Discord.",
];

export type FaqItem = {
  question: string;
  answer: string;
  /** Optional inline link rendered after the answer, e.g. to /policies. */
  link?: { href: string; label: string };
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "How do I book a session?",
    answer:
      "Pick a session above and it opens on Metafy (you'll need a free Metafy account). Choose a time from my calendar and pay, and you're booked. Then join the Discord and open a ticket with your rank, what you want to work on and a few recent replays.",
  },
  {
    question: "Why do I book through Metafy?",
    answer:
      "Metafy is a coaching platform built for gaming. It handles my calendar, secure payments and refunds, and it's where my verified reviews live.",
  },
  {
    question: "How does a replay review work?",
    answer:
      "Order it on Metafy, then send me your replay file or Ballchasing link in a ticket on the Discord. Within 48 hours you'll get a 15–20 minute recorded breakdown of your top 2–3 limiting habits, plus a concrete plan to fix them.",
  },
  {
    question: "What do I need for a live session?",
    answer:
      "Discord for the call and screen share. Having a few recent replays saved helps us get straight into it.",
  },
  {
    question: "What ranks do you coach?",
    answer:
      "Everyone from Bronze to RLCS-level players. Every session is built around your rank and your goals.",
  },
  {
    question: "What time zone are you in?",
    answer:
      "I'm based in the UK and coach players all over the world. You'll see my available times when you book on Metafy. If none suit you, message me and we'll find one, or order a replay review, which doesn't need a time.",
  },
  {
    question: "Can I reschedule or get a refund?",
    answer: REFUND_POLICY_SHORT,
    link: { href: "/policies", label: "Read the full policy" },
  },
  {
    question: "What currency are the prices in?",
    answer:
      "US dollars. If your card is in another currency, it's converted automatically when you pay.",
  },
  {
    question: "Can I leave a tip?",
    answer:
      "Never expected, always appreciated. You can tip me on my Metafy page, or from your Metafy dashboard after a session.",
  },
];
