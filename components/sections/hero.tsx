// components/sections/hero.tsx
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <Image
        src="/hero-background.jpeg" // Majd cseréljük tényleges képre
        alt="Lovas Íjász"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Kürtgyarmat Hagyományőrző Íjász Egyesület
        </h1>
        <p className="mt-6 max-w-2xl text-lg">
          Magyar lovas íjász hagyományok őrzése 2003 óta
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="#tevekenysegek">Tevékenységeink</Link>
          </Button>
          <Button size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white/20" asChild>
            <Link href="#kapcsolat">Kapcsolat</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}