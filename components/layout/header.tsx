// components/layout/header.tsx
"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "Történetünk", href: "#tortenet" },
    { name: "Tevékenységek", href: "#tevekenysegek" },
    { name: "Rendezvények", href: "#rendezvenyek" },
    { name: "Lovarda", href: "#lovarda" },
    { name: "Oktatás", href: "#oktatas" },
    { name: "Galéria", href: "#galeria" },
    { name: "Tanulmány", href: "#tanulmany" },
    { name: "Kapcsolat", href: "#kapcsolat" }
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png" // Majd cseréljük a tényleges logóra
            alt="Kürtgyarmat Logó"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="hidden text-xl font-bold sm:inline-block">Kürtgyarmat</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navigation.map((item) => (
            <Link 
              key={item.name}
              href={item.href} 
              className="text-sm font-medium hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menü megnyitása</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                {navigation.map((item) => (
                  <Link 
                    key={item.name}
                    href={item.href} 
                    className="text-lg font-medium hover:text-primary"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}