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
  return [
    {
      id: "photo1",
      title: "Lovas íjászat bemutató",
      description: "Kép a galériából",
      src: "/gallery/BVE_0087.JPG",
      type: "image"
    },
    {
      id: "photo2",
      title: "Lovas íjászat verseny",
      description: "Kép a galériából",
      src: "/gallery/BVE_0088.JPG",
      type: "image"
    },
    {
      id: "photo3",
      title: "Hagyományőrző bemutató",
      description: "Kép a galériából",
      src: "/gallery/BVE_0089.JPG",
      type: "image"
    },
    {
      id: "photo4",
      title: "Lovas bemutató",
      description: "Kép a galériából",
      src: "/gallery/BVE_0092.JPG",
      type: "image"
    },
    {
      id: "photo5",
      title: "Lovas íjászat verseny",
      description: "Kép a galériából",
      src: "/gallery/BVE_0093.JPG",
      type: "image"
    },
    {
      id: "photo6",
      title: "Lovas bemutató",
      description: "Kép a galériából",
      src: "/gallery/BVE_0094.JPG",
      type: "image"
    },
    {
      id: "photo7",
      title: "Hagyományőrző bemutató",
      description: "Kép a galériából",
      src: "/gallery/BVE_0095.JPG",
      type: "image"
    },
    {
      id: "photo8",
      title: "Lovas íjászat verseny",
      description: "Kép a galériából",
      src: "/gallery/BVE_0098.JPG",
      type: "image"
    },
    {
      id: "photo9",
      title: "Lovas bemutató",
      description: "Kép a galériából",
      src: "/gallery/BVE_0099.JPG",
      type: "image"
    },
    {
      id: "photo10",
      title: "Hagyományőrző bemutató",
      description: "Kép a galériából",
      src: "/gallery/BVE_0102.JPG",
      type: "image"
    },
    {
      id: "photo11",
      title: "Lovas íjászat verseny",
      description: "Kép a galériából",
      src: "/gallery/BVE_0103.JPG",
      type: "image"
    },
    {
      id: "photo12",
      title: "Lovas bemutató",
      description: "Kép a galériából",
      src: "/gallery/BVE_0108.JPG",
      type: "image"
    }
  ];
}

/**
 * Get video items from local files
 */
function getVideoItems(): MediaItem[] {
  return [
    {
      id: "video1",
      title: "Csatajelenet 2014",
      description: "Hagyományőrző csatajelenet bemutató",
      src: "/gallery/csatajelenet_2014.mp4",
      type: "video",
      thumbnail: "/gallery/BVE_0087.JPG" // Használjuk az egyik képet előnézetként
    },
    {
      id: "video2",
      title: "Fegyverbemutato 2019",
      description: "Hagyományos fegyverek bemutatója",
      src: "/gallery/fegyverbemutato_2019_08_10.mp4",
      type: "video",
      thumbnail: "/gallery/BVE_0088.JPG" // Használjuk az egyik képet előnézetként
    },
    {
      id: "video3",
      title: "Lovasíjászat 2015",
      description: "Lovasíjászat bemutató 2015-ből",
      src: "/gallery/lovasijaszat_2015_08_10.mp4",
      type: "video",
      thumbnail: "/gallery/BVE_0089.JPG" // Használjuk az egyik képet előnézetként
    },
    {
      id: "video4",
      title: "Lovas bemutató 2021",
      description: "Lovas bemutató a szakiudvarban",
      src: "/gallery/lovas_bemutato_szakiudvar_2021_08_14.mp4",
      type: "video",
      thumbnail: "/gallery/BVE_0092.JPG" // Használjuk az egyik képet előnézetként
    },
    {
      id: "video5",
      title: "Pásztorünnep 2018",
      description: "Pásztorünnep rendezvény",
      src: "/gallery/pasztorunnep_2018.mp4",
      type: "video",
      thumbnail: "/gallery/BVE_0093.JPG" // Használjuk az egyik képet előnézetként
    }
  ];
}

/**
 * Get sample items as fallback
 */
function getSampleItems(): MediaItem[] {
  return [
    {
      id: "sample1",
      title: "Lovas íjászat bemutató",
      description: "Hagyományőrző bemutató",
      src: "/gallery/BVE_0087.JPG",
      type: "image"
    },
    {
      id: "sample2",
      title: "Íjászverseny",
      description: "Országos verseny döntő pillanatai",
      src: "/gallery/BVE_0088.JPG",
      type: "image"
    },
    {
      id: "sample3",
      title: "Lovas bemutató",
      description: "Hagyományőrző lovas bemutató",
      src: "/gallery/lovasijaszat_2015_08_10.mp4",
      type: "video",
      thumbnail: "/gallery/BVE_0089.JPG"
    }
  ];
}
