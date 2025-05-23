// components/shared/gallery-card.tsx
"use client"

import { LocalImage } from "./local-image"

export interface MediaItem {
  id: string
  title: string
  description?: string
  src: string // Local path to the image
  type: "image"
}

interface GalleryCardProps {
  item: MediaItem
  onClick: (item: MediaItem) => void
}

export function GalleryCard({ item, onClick }: GalleryCardProps) {
  return (
    <div
      className="group relative overflow-hidden rounded-lg border bg-background p-2 cursor-pointer hover:shadow-md transition-all duration-300"
      onClick={() => onClick(item)}
    >
      <div className="h-60 w-full overflow-hidden rounded-md relative">
        <LocalImage
          src={item.src}
          alt={item.title}
          width={800}
          height={600}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold truncate">{item.title}</h3>
        {item.description && (
          <p className="mt-2 text-foreground/70 line-clamp-2">
            {item.description}
          </p>
        )}
        <div className="mt-2 text-xs text-foreground/50">
          Kép
        </div>
      </div>
    </div>
  )
}