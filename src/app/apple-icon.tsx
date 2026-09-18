import { ImageResponse } from "next/og";

// See icon.tsx for why this needs the edge runtime on Windows.
export const runtime = "edge";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0b",
        }}
      >
        <span
          style={{
            fontSize: 108,
            fontWeight: 700,
            color: "#ff5722",
            fontFamily: "sans-serif",
          }}
        >
          F
        </span>
      </div>
    ),
    { ...size },
  );
}
