import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #8b4513 0%, #a16207 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Fejléc */}
        <div
          style={{
            fontSize: 72,
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
            marginBottom: 20,
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          Kurtgyármat
        </div>

        {/* Alcím */}
        <div
          style={{
            fontSize: 48,
            color: "#f3e8d0",
            textAlign: "center",
            marginBottom: 40,
          }}
        >
          Lovas Íjász Egyesület
        </div>

        {/* Leírás */}
        <div
          style={{
            fontSize: 32,
            color: "white",
            textAlign: "center",
            maxWidth: 800,
            lineHeight: 1.4,
          }}
        >
          Magyar hagyományőrző lovas íjászat
        </div>

        {/* Decorative element */}
        <div
          style={{
            position: "absolute",
            top: 40,
            right: 40,
            width: 100,
            height: 100,
            background: "rgba(255,255,255,0.1)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 48,
          }}
        >
          🏹
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
