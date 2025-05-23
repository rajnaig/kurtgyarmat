// components/shared/google-drive-video.tsx
"use client"

interface GoogleDriveVideoProps {
  fileId: string
  className?: string
  controls?: boolean
  autoPlay?: boolean
  onLoad?: () => void
}

export function GoogleDriveVideo({
  fileId,
  className,
  controls = true,
  autoPlay = false,
  onLoad,
}: GoogleDriveVideoProps) {
  // For videos, we use the preview link approach
  const videoUrl = `https://drive.google.com/file/d/${fileId}/preview`

  return (
    <iframe
      src={videoUrl}
      className={className}
      allowFullScreen
      onLoad={onLoad}
      style={{ border: "none" }}
      allow={autoPlay ? "autoplay" : ""}
    />
  )
}