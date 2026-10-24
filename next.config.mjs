/** @type {import('next').NextConfig} */
const nextConfig = {
  // Temporary (permanent: false -> 307) short links to Metafy and Discord.
  // next.config.mjs is loaded by plain Node before any TypeScript transform
  // runs, so it can't import src/data/site.ts — these destinations must be
  // kept in sync with that file by hand.
  async redirects() {
    return [
      {
        source: "/book",
        destination: "https://metafy.gg/@freecant/sessions",
        permanent: false,
      },
      {
        source: "/consult",
        destination: "https://metafy.gg/@freecant",
        permanent: false,
      },
      {
        source: "/coaching",
        destination:
          "https://metafy.gg/@freecant/sessions/1-1-live-hour-of-individual-coaching-8E3K6vfEzZf",
        permanent: false,
      },
      {
        source: "/programme",
        destination:
          "https://metafy.gg/@freecant/sessions/structured-coaching-programme-4-sessions-ibSal2EwiLR",
        permanent: false,
      },
      {
        source: "/replay",
        destination:
          "https://metafy.gg/@freecant/sessions/replay-review-48-hour-turnaround-isqBFUWTX6e",
        permanent: false,
      },
      {
        source: "/team",
        destination: "https://metafy.gg/@freecant/sessions/team-coaching-GUKVTVFmM24",
        permanent: false,
      },
      {
        source: "/discord",
        destination: "https://discord.gg/KrWuKuqcDt",
        permanent: false,
      },
      {
        source: "/metafy",
        destination: "https://metafy.gg/@freecant",
        permanent: false,
      },
      {
        // Old /tip links (shared before the Stripe -> Metafy move) still
        // work, now pointing straight at the Metafy profile.
        source: "/tip",
        destination: "https://metafy.gg/@freecant",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
