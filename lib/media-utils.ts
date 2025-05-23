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
  // Használjunk Cloudinary sample képeket, amíg a valós képek nem elérhetők
  // Ezek a Cloudinary sample képek, amelyek minden Cloudinary fiókban elérhetőek
  return [
    {
      id: "photo1",
      title: "Lovas íjászat bemutató",
      description: "Kép a galériából",
      src: "sample", // Cloudinary sample kép
      type: "image"
    },
    {
      id: "photo2",
      title: "Lovas íjászat verseny",
      description: "Kép a galériából",
      src: "sample_woman", // Cloudinary sample kép
      type: "image"
    },
    {
      id: "photo3",
      title: "Hagyományőrző bemutató",
      description: "Kép a galériából",
      src: "cld-sample", // Cloudinary sample kép
      type: "image"
    },
    {
      id: "photo4",
      title: "Lovas bemutató",
      description: "Kép a galériából",
      src: "cld-sample-2", // Cloudinary sample kép
      type: "image"
    },
    {
      id: "photo5",
      title: "Lovas íjászat verseny",
      description: "Kép a galériából",
      src: "cld-sample-3", // Cloudinary sample kép
      type: "image"
    },
    {
      id: "photo6",
      title: "Lovas bemutató",
      description: "Kép a galériából",
      src: "cld-sample-4", // Cloudinary sample kép
      type: "image"
    },
    {
      id: "photo7",
      title: "Hagyományőrző bemutató",
      description: "Kép a galériából",
      src: "cld-sample-5", // Cloudinary sample kép
      type: "image"
    },
    {
      id: "photo8",
      title: "Lovas íjászat verseny",
      description: "Kép a galériából",
      src: "architecture-sample", // Cloudinary sample kép
      type: "image"
    }
  ];
}

/**
 * Get video items from local files
 */
function getVideoItems(): MediaItem[] {
  // Használjunk Cloudinary sample videókat, amíg a valós fájlok nem elérhetők
  return [
    {
      id: "video1",
      title: "Csatajelenet 2014",
      description: "Hagyományőrző csatajelenet bemutató",
      src: "dog", // Cloudinary sample videó
      type: "video",
      thumbnail: "sample" // Cloudinary sample kép előnézetként
    },
    {
      id: "video2",
      title: "Fegyverbemutato 2019",
      description: "Hagyományos fegyverek bemutatója",
      src: "sea", // Cloudinary sample videó
      type: "video",
      thumbnail: "cld-sample" // Cloudinary sample kép előnézetként
    },
    {
      id: "video3",
      title: "Lovasíjászat 2015",
      description: "Lovasíjászat bemutató 2015-ből",
      src: "elephants", // Cloudinary sample videó
      type: "video",
      thumbnail: "cld-sample-2" // Cloudinary sample kép előnézetként
    }
  ];
}

/**
 * Get sample items as fallback
 */
function getSampleItems(): MediaItem[] {
  // Használjunk Cloudinary sample képeket és videókat, amíg a valós fájlok nem elérhetők
  return [
    {
      id: "sample1",
      title: "Lovas íjászat bemutató",
      description: "Hagyományőrző bemutató",
      src: "sample", // Cloudinary sample kép
      type: "image"
    },
    {
      id: "sample2",
      title: "Íjászverseny",
      description: "Országos verseny döntő pillanatai",
      src: "cld-sample", // Cloudinary sample kép
      type: "image"
    },
    {
      id: "sample3",
      title: "Lovas bemutató",
      description: "Hagyományőrző lovas bemutató",
      src: "dog", // Cloudinary sample videó
      type: "video",
      thumbnail: "sample" // Cloudinary sample kép előnézetként
    }
  ];
}
