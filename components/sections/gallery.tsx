// components/sections/gallery.tsx
"use client"

import { useState } from "react"
import { GalleryCard, MediaItem } from "@/components/shared/gallery-card"
import { MediaViewer } from "@/components/shared/media-viewer"
import { galleryItems } from "@/data/gallery-data"

export function Gallery() {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null)

  const handleItemClick = (item: MediaItem) => {
    setSelectedItem(item)
  }

  const handleClose = () => {
    setSelectedItem(null)
  }

  const handleNavigate = (item: MediaItem) => {
    setSelectedItem(item)
  }

  return (
    <section id="galeria" className="py-16 md:py-24 bg-parchment/30">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="section-title">Galéria</h2>
          <div className="mt-4 h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-6 max-w-2xl mx-auto text-foreground/70">
            Tekintsd meg egyesületünk tevékenységeit képekben
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {galleryItems.map((item) => (
            <GalleryCard
              key={item.id}
              item={item}
              onClick={handleItemClick}
            />
          ))}
        </div>

        {/* Media viewer modal */}
        {selectedItem && (
          <MediaViewer
            items={galleryItems}
            currentItem={selectedItem}
            onClose={handleClose}
            onNavigate={handleNavigate}
          />
        )}
      </div>
    </section>
  )
}