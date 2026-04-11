import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "VersAssist — AI-Powered Virtual Assistants for Small Business";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #0f172a 0%, #1a1a2e 45%, #16213e 100%)",
          fontFamily: "sans-serif",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Accent glow */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-120px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "rgba(59, 130, 246, 0.25)",
            filter: "blur(120px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-120px",
            left: "-120px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(251, 191, 36, 0.18)",
            filter: "blur(100px)",
          }}
        />

        {/* Brand badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            padding: "14px 28px",
            borderRadius: "999px",
            background: "rgba(255, 255, 255, 0.08)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            color: "rgba(255, 255, 255, 0.85)",
            fontSize: "24px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "#fbbf24",
            }}
          />
          VersAssist
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: "88px",
            fontWeight: 800,
            color: "white",
            textAlign: "center",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            marginBottom: "32px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>AI-Powered Virtual</span>
          <span style={{ color: "#60a5fa" }}>Assistants</span>
        </div>

        {/* Subheadline */}
        <div
          style={{
            fontSize: "32px",
            color: "rgba(255, 255, 255, 0.75)",
            textAlign: "center",
            maxWidth: "900px",
            lineHeight: 1.35,
          }}
        >
          Scale your small business with AI-enhanced VAs. Hours never expire.
          No lock-in contracts.
        </div>

        {/* Footer */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            color: "rgba(255, 255, 255, 0.5)",
            fontSize: "22px",
          }}
        >
          versassists.com
        </div>
      </div>
    ),
    { ...size }
  );
}
