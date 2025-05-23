// components/shared/firebase-video.tsx
"use client"

import { useState, useEffect } from "react"
import { ref, getDownloadURL } from "firebase/storage"
import { storage } from "@/lib/firebase"

interface FirebaseVideoProps {
  path: string
  className?: string
  controls?: boolean
  autoPlay?: boolean
  onLoad?: () => void
}

export function FirebaseVideo({
  path,
  className,
  controls = true,
  autoPlay = false,
  onLoad,
}: FirebaseVideoProps) {
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const storageRef = ref(storage, path);
        const url = await getDownloadURL(storageRef);
        setVideoUrl(url);
      } catch (error) {
        console.error("Error fetching video:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVideo();
  }, [path]);

  const handleVideoLoad = () => {
    if (onLoad) onLoad();
  };

  if (isLoading || !videoUrl) {
    return <div className={`animate-pulse bg-gray-300 ${className}`} />;
  }

  return (
    <video
      src={videoUrl}
      className={className}
      controls={controls}
      autoPlay={autoPlay}
      onLoadedData={handleVideoLoad}
    />
  );
}