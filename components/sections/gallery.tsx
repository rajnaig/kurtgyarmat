"use client";

import { GalleryGrid, MediaItem } from "@/components/shared/gallery-card";
import { galleryItems } from "@/data/gallery-data";

export function Gallery() {
  const handleItemClick = (item: MediaItem) => {
    // TODO: Modal vagy lightbox megnyitása
    console.log("Gallery item clicked:", item);
  };

  return (
    <section className="py-16 px-4 md:py-24 md:px-6 lg:px-8 bg-parchment/30">
      <div className="container mx-auto max-w-7xl">
        {/* Fejléc */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
            Galériánk
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Tekintse meg egyesületünk programjait, versenyeit és hagyományőrző
            tevékenységeit
          </p>
        </div>

        {/* Gallery Grid */}
        <GalleryGrid items={galleryItems} onItemClick={handleItemClick} />
      </div>
    </section>
  );
}
