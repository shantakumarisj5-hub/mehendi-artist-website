import { ImageResponse } from "next/og";

export const alt = "ShantaKumari Mehendi Art - Bridal Mehendi Artist in Davangere";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "linear-gradient(135deg, #2d2018 0%, #4a2d1e 52%, #8b5e3c 100%)",
          color: "#fffaf6",
          padding: "72px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 360,
            height: 360,
            borderRadius: "50%",
            border: "2px solid rgba(230, 189, 98, 0.35)",
            right: -80,
            top: -80,
          }}
        />

        <div
          style={{
            position: "absolute",
            width: 260,
            height: 260,
            borderRadius: "50%",
            border: "2px solid rgba(230, 189, 98, 0.22)",
            left: -70,
            bottom: -90,
          }}
        />

        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#e6bd62",
            marginBottom: 24,
          }}
        >
          Davangere, Karnataka
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 64,
            lineHeight: 1.08,
            fontWeight: 700,
            maxWidth: 900,
          }}
        >
          ShantaKumari Mehendi Art
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 34,
            lineHeight: 1.25,
            marginTop: 20,
            color: "#f7dcc5",
          }}
        >
          Bridal • Arabic • Indo-Arabic • Traditional Mehendi
        </div>
      </div>
    ),
    size,
  );
}
