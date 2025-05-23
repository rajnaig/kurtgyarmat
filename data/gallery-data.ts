// Import from gallery-card
import { MediaItem } from "@/components/shared/gallery-card";

export const galleryItems: MediaItem[] = [
  {
    id: "image-1",
    title: "Lovas íjászat bemutató",
    description: "Hagyományőrző lovas íjászat bemutató",
    src: "/gallery/BVE_0088.JPG",
    type: "image",
    alt: "Lovas íjász a célra lő",
    category: "lovas-ijaszat",
  },
  {
    id: "image-2",
    title: "Lovas íjászat verseny",
    description: "Országos lovas íjászat verseny",
    src: "/gallery/BVE_0099.JPG",
    type: "image",
    alt: "Versenyző lóháton íjászat közben",
    category: "verseny",
  },
  {
    id: "image-3",
    title: "Hagyományőrző bemutató",
    description: "Hagyományőrző bemutató a rendezvényen",
    src: "/gallery/BVE_0113_1.JPG",
    type: "image",
    alt: "Hagyományőrző bemutató",
    category: "hagyomanyorzes",
  },
  {
    id: "image-4",
    title: "Lovas bemutató",
    description: "Lovas bemutató a rendezvényen",
    src: "/gallery/BVE_0128_1.JPG",
    type: "image",
    alt: "Lovas bemutató",
    category: "lovas-bemutato",
  },
  {
    id: "image-5",
    title: "Lovas íjászat gyakorlat",
    description: "Kassai-rendszerű lovas íjászat gyakorlat",
    src: "/gallery/BVE_0129_1.JPG",
    type: "image",
    alt: "Kassai-rendszerű lovas íjászat",
    category: "gyakorlat",
  },
  {
    id: "image-6",
    title: "Hagyományőrző tevékenység",
    description: "Magyar lovas hagyományok bemutatása",
    src: "/gallery/BVE_0132.JPG",
    type: "image",
    alt: "Magyar lovas hagyományok",
    category: "hagyomanyorzes",
  },
  {
    id: "image-7",
    title: "Íjászat oktatás",
    description: "Íjászat oktatás kezdőknek",
    src: "/gallery/BVE_0135.JPG",
    type: "image",
    alt: "Íjászat oktatás",
    category: "oktatas",
  },
  {
    id: "image-8",
    title: "Lovas bemutató",
    description: "Hagyományos lovas bemutató",
    src: "/gallery/BVE_0140.JPG",
    type: "image",
    alt: "Hagyományos lovas bemutató",
    category: "lovas-bemutato",
  },
  {
    id: "image-9",
    title: "Íjász verseny",
    description: "Egyesületi íjász verseny",
    src: "/gallery/BVE_0143_1.JPG",
    type: "image",
    alt: "Egyesületi íjász verseny",
    category: "verseny",
  },
  {
    id: "image-10",
    title: "Lovas íjászat gyakorlat",
    description: "Lovas íjászat gyakorlat a pályán",
    src: "/gallery/BVE_0147.JPG",
    type: "image",
    alt: "Lovas íjászat gyakorlat",
    category: "gyakorlat",
  },
  {
    id: "image-11",
    title: "Hagyományőrző bemutató",
    description: "Kézműves és lovas bemutató",
    src: "/gallery/BVE_0148.JPG",
    type: "image",
    alt: "Kézműves és lovas bemutató",
    category: "hagyomanyorzes",
  },
  {
    id: "image-12",
    title: "Lovas íjászat verseny",
    description: "Nemzetközi lovas íjászat verseny",
    src: "/gallery/BVE_0151.JPG",
    type: "image",
    alt: "Nemzetközi lovas íjászat verseny",
    category: "verseny",
  },
];

// Helper funkciók
export function getItemsByCategory(category: string): MediaItem[] {
  return galleryItems.filter((item) => item.category === category);
}

export function getAllCategories(): string[] {
  const categories = galleryItems.map((item) => item.category).filter(Boolean);
  return [...new Set(categories)] as string[];
}

export function getItemById(id: string): MediaItem | undefined {
  return galleryItems.find((item) => item.id === id);
}
