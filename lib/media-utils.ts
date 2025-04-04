// lib/media-utils.ts
import { MediaItem } from "@/components/shared/gallery-card";

/**
 * Utility function to load media items from local files
 */
export async function loadMediaItems(): Promise<MediaItem[]> {
  try {
    const photos = getPhotoItems();
    const videos = getVideoItems();

    return [...photos, ...videos];
  } catch (error) {
    console.error('Error loading media items:', error);
    // Return minimal sample data as fallback
    return getSampleItems();
  }
}

/**
 * Utility function to determine if a file is an image or video based on extension
 */
export function getMediaType(filename: string): "image" | "video" | "unknown" {
  const extension = filename.split('.').pop()?.toLowerCase();

  if (!extension) return "unknown";

  const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'];
  const videoExtensions = ['mp4', 'webm', 'ogg', 'mov', 'avi'];

  if (imageExtensions.includes(extension)) return "image";
  if (videoExtensions.includes(extension)) return "video";

  return "unknown";
}

/**
 * Get photo items from local files
 */
function getPhotoItems(): MediaItem[] {
  // Használjunk placeholder képeket, amíg a valós képek nem elérhetők
  const placeholderImage = "https://placehold.co/800x600/993D00/FFFFFF?text=Lovas+Kép";

  return [
    {
      id: "photo1",
      title: "Lovas íjászat bemutató",
      description: "Kép a galériából",
      src: placeholderImage,
      type: "image"
    },
    {
      id: "photo2",
      title: "Lovas íjászat verseny",
      description: "Kép a galériából",
      src: placeholderImage,
      type: "image"
    },
    {
      id: "photo3",
      title: "Hagyományőrző bemutató",
      description: "Kép a galériából",
      src: placeholderImage,
      type: "image"
    },
    {
      id: "photo4",
      title: "Lovas bemutató",
      description: "Kép a galériából",
      src: placeholderImage,
      type: "image"
    },
    {
      id: "photo5",
      title: "Lovas íjászat verseny",
      description: "Kép a galériából",
      src: placeholderImage,
      type: "image"
    },
    {
      id: "photo6",
      title: "Lovas bemutató",
      description: "Kép a galériából",
      src: placeholderImage,
      type: "image"
    },
    {
      id: "photo7",
      title: "Hagyományőrző bemutató",
      description: "Kép a galériából",
      src: placeholderImage,
      type: "image"
    },
    {
      id: "photo8",
      title: "Lovas íjászat verseny",
      description: "Kép a galériából",
      src: placeholderImage,
      type: "image"
    }
  ];
}

/**
 * Get video items from local files
 */
function getVideoItems(): MediaItem[] {
  // Használjunk placeholder képeket és videókat, amíg a valós fájlok nem elérhetők
  const placeholderImage = "https://placehold.co/800x600/2E4057/FFFFFF?text=Videó+Előnézet";
  const placeholderVideo = "https://www.w3schools.com/html/mov_bbb.mp4"; // Nyilvános példa videó

  return [
    {
      id: "video1",
      title: "Csatajelenet 2014",
      description: "Hagyományőrző csatajelenet bemutató",
      src: placeholderVideo,
      type: "video",
      thumbnail: placeholderImage
    },
    {
      id: "video2",
      title: "Fegyverbemutato 2019",
      description: "Hagyományos fegyverek bemutatója",
      src: placeholderVideo,
      type: "video",
      thumbnail: placeholderImage
    },
    {
      id: "video3",
      title: "Lovasíjászat 2015",
      description: "Lovasíjászat bemutató 2015-ből",
      src: placeholderVideo,
      type: "video",
      thumbnail: placeholderImage
    }
  ];
}

/**
 * Get sample items as fallback
 */
function getSampleItems(): MediaItem[] {
  // Használjunk placeholder képeket és videókat, amíg a valós fájlok nem elérhetők
  const placeholderImage = "https://placehold.co/800x600/993D00/FFFFFF?text=Lovas+Kép";
  const placeholderVideo = "https://www.w3schools.com/html/mov_bbb.mp4"; // Nyilvános példa videó
  const placeholderThumbnail = "https://placehold.co/800x600/2E4057/FFFFFF?text=Videó+Előnézet";

  return [
    {
      id: "sample1",
      title: "Lovas íjászat bemutató",
      description: "Hagyományőrző bemutató",
      src: placeholderImage,
      type: "image"
    },
    {
      id: "sample2",
      title: "Íjászverseny",
      description: "Országos verseny döntő pillanatai",
      src: placeholderImage,
      type: "image"
    },
    {
      id: "sample3",
      title: "Lovas bemutató",
      description: "Hagyományőrző lovas bemutató",
      src: placeholderVideo,
      type: "video",
      thumbnail: placeholderThumbnail
    }
  ];
}
