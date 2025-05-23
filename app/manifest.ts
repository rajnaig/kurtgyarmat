import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kürtgyarmat Hagyományőrző Íjász Egyesület",
    short_name: "Kürtgyarmat",
    description: "Magyar lovas íjász hagyományok őrzése 2003 óta",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#8B4513",
    orientation: "portrait",
    icons: [
      {
        src: "/logo.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    categories: ["sports", "culture", "education"],
    lang: "hu",
    dir: "ltr",
  };
}
