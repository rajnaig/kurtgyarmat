"use client"

import Image from "next/image"
import { useState } from "react"

interface LocalImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  onLoad?: () => void
}

export function LocalImage({
  src,
  alt,
  width,
  height,
  className,
  onLoad,
}: LocalImageProps) {
  const [isError, setIsError] = useState(false)

  const handleImageLoad = () => {
    if (onLoad) onLoad()
  }

  return (
    <Image
      src={isError ? "/images/placeholder.jpg" : src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onLoad={handleImageLoad}
      onError={() => setIsError(true)}
    />
  )
}
