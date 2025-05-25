"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
      src: "/0088.JPG",
      alt: "Lovas íjászat bemutató",
      title: "Lovas íjászat bemutató",
    },
    {
      src: "/0099.JPG",
      alt: "Lovas íjászat verseny",
      title: "Lovas íjászat verseny",
    },
    {
      src: "/0113.JPG",
      alt: "Hagyományőrző bemutató",
      title: "Hagyományőrző bemutató",
    },
    {
      src: "/0128.JPG",
      alt: "Lovas bemutató",
      title: "Lovas bemutató",
    },
    {
      src: "/0129.JPG",
      alt: "Kassai-rendszerű lovas íjászat",
      title: "Kassai-rendszerű lovas íjászat",
    },
    {
      src: "/0132.JPG",
      alt: "Magyar lovas hagyományok",
      title: "Magyar lovas hagyományok",
    },
    {
      src: "/0135.JPG",
      alt: "Íjászat oktatás",
      title: "Íjászat oktatás",
    },
    {
      src: "/0140.JPG",
      alt: "Hagyományos lovas bemutató",
      title: "Hagyományos lovas bemutató",
    },
    {
      src: "/0143.JPG",
      alt: "Egyesületi íjász verseny",
      title: "Egyesületi íjász verseny",
    },
    {
      src: "/0147.JPG",
      alt: "Lovas íjászat gyakorlat",
      title: "Lovas íjászat gyakorlat",
    },
    {
      src: "/0148.JPG",
      alt: "Kézműves és lovas bemutató",
      title: "Kézműves és lovas bemutató",
    },
    {
      src: "/0151.JPG",
      alt: "Nemzetközi lovas íjászat verseny",
      title: "Nemzetközi lovas íjászat verseny",
    },
  ];

  const nextImage = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section id="gallery" className="py-24 bg-parchment/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-steel text-sm font-medium tracking-wider uppercase">
              Képek és pillanatok
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-earth mt-2 mb-6">
              Galériánk
            </h2>
            <div className="w-20 h-1 bg-earth mx-auto mb-6"></div>
            <p className="text-lg text-stone/70 max-w-2xl mx-auto">
              Tekintse meg egyesületünk programjait, versenyeit és hagyományőrző
              tevékenységeit.
            </p>
          </div>

          <div className="space-y-8">
            {/* Main Image Display */}
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-[4/3] max-h-[70vh] overflow-hidden rounded-2xl shadow-lg mx-auto max-w-4xl bg-cream"
            >
              <Image
                src={images[activeIndex].src}
                alt={images[activeIndex].alt}
                fill
                className="object-contain"
                priority={activeIndex === 0}
              />

              {/* Navigation Arrows */}
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                  onClick={prevImage}
                  className="p-3 rounded-full bg-cream/90 text-earth hover:bg-cream transition-all duration-300 hover:scale-110 shadow-lg"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="p-3 rounded-full bg-cream/90 text-earth hover:bg-cream transition-all duration-300 hover:scale-110 shadow-lg"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Image Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <h3 className="text-white text-xl font-serif font-semibold">
                  {images[activeIndex].title}
                </h3>
              </div>

              {/* Image Counter */}
              <div className="absolute top-4 right-4 bg-cream/90 px-3 py-1 rounded-full text-sm font-medium text-earth">
                {activeIndex + 1} / {images.length}
              </div>
            </motion.div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
              {images.map((image, index) => (
                <motion.button
                  key={image.src}
                  onClick={() => setActiveIndex(index)}
                  className={`relative aspect-[4/3] rounded-lg overflow-hidden transition-all duration-300 ${
                    index === activeIndex
                      ? "ring-4 ring-earth shadow-lg scale-105"
                      : "hover:scale-105 hover:shadow-md"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                  {index === activeIndex && (
                    <div className="absolute inset-0 bg-earth/20"></div>
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
