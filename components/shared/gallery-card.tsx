"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

// Típus definíció ITT
export interface MediaItem {
  id: string;
  title: string;
  description: string;
  src: string;
  type: "image" | "video";
  alt?: string;
  category?: string;
}

interface GalleryCardProps {
  item: MediaItem;
  className?: string;
  onClick?: () => void;
  priority?: boolean;
}

export function GalleryCard({
  item,
  className,
  onClick,
  priority = false,
}: GalleryCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {/* DEBUG: Egyszerű IMG tag Vercel teszthez */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.src}
          alt={item.alt || item.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading={priority ? "eager" : "lazy"}
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Kategória badge */}
        {item.category && (
          <div className="absolute top-3 left-3 px-2 py-1 bg-primary/90 text-white text-xs font-medium rounded">
            {item.category}
          </div>
        )}
      </div>

      {/* Tartalom */}
      <div className="p-4">
        <h3 className="font-serif font-semibold text-lg text-stone-900 mb-2">
          {item.title}
        </h3>
        <p className="text-stone-600 text-sm">{item.description}</p>
        {/* DEBUG: Képútvonal megjelenítése */}
        <p className="text-xs text-gray-400 mt-2">IMG: {item.src}</p>
      </div>
    </div>
  );
}

// Gallery grid komponens
interface GalleryGridProps {
  items: MediaItem[];
  className?: string;
  onItemClick?: (item: MediaItem) => void;
}

export function GalleryGrid({
  items,
  className,
  onItemClick,
}: GalleryGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
        className
      )}
    >
      {items.map((item, index) => (
        <GalleryCard
          key={item.id}
          item={item}
          onClick={() => onItemClick?.(item)}
          priority={index < 3}
        />
      ))}
    </div>
  );
}
