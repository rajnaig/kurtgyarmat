// components/sections/gallery.tsx
"use client"

import { useState, useEffect } from "react"
import { GalleryCard, MediaItem } from "@/components/shared/gallery-card"
import { MediaViewer } from "@/components/shared/media-viewer"
import { loadMediaItems } from "@/lib/media-utils"

// Filter options
const filterOptions = ["Összes", "Képek", "Videók"]

export function Gallery() {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null)
  const [filter, setFilter] = useState("Összes")
  const [galleryItems, setGalleryItems] = useState<MediaItem[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Load media items when component mounts
  useEffect(() => {
    async function fetchMediaItems() {
      try {
        setIsLoading(true)
        const items = await loadMediaItems()

        // Sort items: images first, then videos
        const sortedItems = [...items].sort((a, b) => {
          // First sort by type (images first)
          if (a.type !== b.type) {
            return a.type === 'image' ? -1 : 1
          }
          // Then sort by title
          return a.title.localeCompare(b.title)
        })

        setGalleryItems(sortedItems)
      } catch (error) {
        console.error("Error loading media items:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchMediaItems()
  }, [])

  const filteredItems = galleryItems.filter(item => {
    if (filter === "Összes") return true
    if (filter === "Képek") return item.type === "image"
    if (filter === "Videók") return item.type === "video"
    return true
  })

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
            Tekintsd meg egyesületünk tevékenységeit képekben és videókban
          </p>
        </div>

        {/* Filter buttons */}
        <div className="mb-8 flex flex-wrap justify-center gap-4">
          {filterOptions.map((option) => (
            <button
              key={option}
              onClick={() => setFilter(option)}
              className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                filter === option
                  ? "bg-primary text-white"
                  : "bg-background text-foreground hover:bg-primary/10"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
            <p className="ml-4 text-lg">Galéria betöltése a Google Drive-ról...</p>
          </div>
        ) : filteredItems.length > 0 ? (
          <>
            <p className="text-center mb-8 text-foreground/70">
              Összesen {galleryItems.length} elem ({galleryItems.filter(i => i.type === 'image').length} kép, {galleryItems.filter(i => i.type === 'video').length} videó)
            </p>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredItems.map((item) => (
                <GalleryCard
                  key={item.id}
                  item={item}
                  onClick={handleItemClick}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-foreground/70">Nincs megjeleníthető elem a kiválasztott szűrővel.</p>
          </div>
        )}

        {/* Media viewer modal */}
        {selectedItem && (
          <MediaViewer
            items={filteredItems}
            currentItem={selectedItem}
            onClose={handleClose}
            onNavigate={handleNavigate}
          />
        )}
      </div>
    </section>
  )
}
