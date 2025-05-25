"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const handleScroll = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-background.jpeg"
          alt="Magyar lovas íjász hagyományok"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/85" />
      </div>

      {/* Animated Arrows Background */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M10,50 L30,40 M30,40 L30,60 M30,50 L90,50"
            stroke="rgb(var(--color-gold))"
            strokeWidth="0.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: 1 }}
          />
          <motion.path
            d="M20,20 L35,15 M35,15 L35,25 M35,20 L80,20"
            stroke="rgb(var(--color-gold))"
            strokeWidth="0.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: 1.5 }}
          />
          <motion.path
            d="M15,80 L32,75 M32,75 L32,85 M32,80 L85,80"
            stroke="rgb(var(--color-gold))"
            strokeWidth="0.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: 2 }}
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Fő cím */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-white font-bold leading-tight hero-text-shadow"
          >
            Kürtgyarmat
            <br />
            <span style={{ color: "#8b4513" }} className="hero-text-shadow">
              Íjász Egyesület
            </span>
          </motion.h1>

          {/* Helyszín */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center space-x-4 text-white"
          >
            <span className="h-[1px] w-16 bg-white/50" />
            <span className="font-serif text-lg">
              Fehérgyarmat, Szatmár megye
            </span>
            <span className="h-[1px] w-16 bg-white/50" />
          </motion.div>

          {/* Leírás */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed hero-text-shadow"
          >
            Magyar lovas íjász hagyományok őrzése és továbbadása.
            Kassai-rendszerű lovas íjászat, hagyományos íjászat és kézműves
            tevékenységek.
          </motion.p>

          {/* CTA gombok */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-wrap justify-center gap-4 pt-4"
          >
            <button
              onClick={() => handleScroll("activities")}
              className="inline-flex items-center px-8 py-4 bg-[rgb(var(--color-earth))] text-white rounded-full text-lg font-medium hover:bg-[rgb(var(--color-earth))]/90 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Tevékenységeink
              <ArrowRight className="ml-2 h-6 w-6" />
            </button>

            <button
              onClick={() => handleScroll("contact")}
              className="inline-flex items-center px-8 py-4 border-2 border-[rgb(var(--color-gold))] text-white rounded-full text-lg font-medium hover:bg-[rgb(var(--color-gold))]/10 transition-all duration-300 hover:scale-105"
            >
              Kapcsolat
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
