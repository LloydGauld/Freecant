import { ImageResponse } from "next/og";

// The Node-runtime build of next/og has a Windows-only bug where it loads
// its bundled default font via path.join(import.meta.url, ...), producing
// an invalid file:// URL. The edge build fetches it instead, which is
// bundler-resolved and works on every platform.
export const runtime = "edge";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 6,
        }}
      >
        <span
          style={{
            fontSize: 20,
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
