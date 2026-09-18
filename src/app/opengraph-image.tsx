import { ImageResponse } from "next/og";

// See icon.tsx for why this needs the edge runtime on Windows.
export const runtime = "edge";

export const alt = "freecant — Rocket League coaching";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0a0b",
          color: "#f5f5f7",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 4,
              background: "#ff5722",
            }}
          />
          <span style={{ fontSize: 28, fontWeight: 700, letterSpacing: -0.5 }}>
            freecant
          </span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 700,
            marginTop: 40,
            maxWidth: 900,
            lineHeight: 1.15,
            letterSpacing: -1,
          }}
        >
          Rank up faster with coaching that actually works.
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#9a9aa2", marginTop: 28 }}>
          1-on-1 Rocket League coaching from an ex-pro RLCS coach.
        </div>
      </div>
    ),
    { ...size },
  );
}
