// components/shared/media-viewer.tsx
"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { MediaItem } from "./gallery-card"

interface MediaViewerProps {
  items: MediaItem[]
  currentItem: MediaItem | null
  onClose: () => void
  onNavigate: (item: MediaItem) => void
}

export function MediaViewer({ items, currentItem, onClose, onNavigate }: MediaViewerProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Reset loading state when item changes
    setIsLoading(true)
  }, [currentItem])

  if (!currentItem) return null

  const currentIndex = items.findIndex(item => item.id === currentItem.id)
  const prevItem = currentIndex > 0 ? items[currentIndex - 1] : null
  const nextItem = currentIndex < items.length - 1 ? items[currentIndex + 1] : null

  const handlePrev = () => {
    if (prevItem) onNavigate(prevItem)
  }

  const handleNext = () => {
    if (nextItem) onNavigate(nextItem)
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") handlePrev()
      if (e.key === "ArrowRight") handleNext()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentItem])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute right-4 top-4 z-50 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
      >
        <X className="h-6 w-6" />
      </button>

      {/* Navigation buttons */}
      {prevItem && (
        <button
          onClick={handlePrev}
          className="absolute left-4 z-50 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
        >
          <ChevronLeft className="h-8 w-8" />
        </button>
      )}

      {nextItem && (
        <button
          onClick={handleNext}
          className="absolute right-4 z-50 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
        >
          <ChevronRight className="h-8 w-8" />
        </button>
      )}

      {/* Media content */}
      <div className="relative max-h-[90vh] max-w-[90vw] overflow-hidden">
        {currentItem.type === "image" ? (
          <div className="relative">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
              </div>
            )}
            <Image
              src={currentItem.src}
              alt={currentItem.title}
              width={1200}
              height={800}
              className={cn(
                "max-h-[85vh] w-auto object-contain transition-opacity duration-300",
                isLoading ? "opacity-0" : "opacity-100"
              )}
              onLoad={() => setIsLoading(false)}
              unoptimized={currentItem.src.includes('drive.google.com')} // Don't optimize external images
            />
          </div>
        ) : (
          <div className="relative aspect-video max-h-[85vh] w-auto">
            <video
              src={currentItem.src}
              controls
              autoPlay
              className="h-full w-full"
              onLoadedData={() => setIsLoading(false)}
            />
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-white">
        <h3 className="text-xl font-bold">{currentItem.title}</h3>
        {currentItem.description && (
          <p className="mt-2 text-white/80">{currentItem.description}</p>
        )}
      </div>
    </div>
  )
}
