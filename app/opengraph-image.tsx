import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Kürtgyarmat Hagyományőrző Íjász Egyesület";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #8B4513 0%, #D2691E 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontFamily: "Inter",
        }}
      >
        <div
          style={{
            fontSize: 60,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 20,
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          Kürtgyarmat
        </div>
        <div
          style={{
            fontSize: 30,
            textAlign: "center",
            opacity: 0.9,
            maxWidth: 800,
            lineHeight: 1.2,
          }}
        >
          Hagyományőrző Íjász Egyesület
        </div>
        <div
          style={{
            fontSize: 24,
            textAlign: "center",
            marginTop: 20,
            opacity: 0.8,
          }}
        >
          Magyar lovas íjász hagyományok őrzése 2003 óta
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
