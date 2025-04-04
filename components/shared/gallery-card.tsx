// components/shared/gallery-card.tsx
import Image from "next/image"
import { Play } from "lucide-react"

export interface MediaItem {
  id: string
  title: string
  description?: string
  src: string
  type: "image" | "video"
  thumbnail?: string
}

interface GalleryCardProps {
  item: MediaItem
  onClick: (item: MediaItem) => void
}

export function GalleryCard({ item, onClick }: GalleryCardProps) {
  const thumbnailSrc = item.thumbnail || item.src

  return (
    <div
      className="group relative overflow-hidden rounded-lg border bg-background p-2 cursor-pointer hover:shadow-md transition-all duration-300"
      onClick={() => onClick(item)}
    >
      <div className="h-60 w-full overflow-hidden rounded-md relative">
        <Image
          src={thumbnailSrc}
          alt={item.title}
          width={800}
          height={600}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {item.type === "video" && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-full bg-black/50 p-3 text-white">
              <Play className="h-8 w-8" />
            </div>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold truncate">{item.title}</h3>
        {item.description && (
          <p className="mt-2 text-foreground/70 line-clamp-2">
            {item.description}
          </p>
        )}
        <div className="mt-2 text-xs text-foreground/50">
          {item.type === "image" ? "Kép" : "Videó"}
        </div>
      </div>
    </div>
  )
}
