// components/mobile-menu.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Menü megnyitása</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <nav className="flex flex-col gap-4 mt-8">
          <Link
            href="#tortenet"
            className="text-lg font-medium hover:text-primary"
            onClick={() => setOpen(false)}
          >
            Történetünk
          </Link>
          <Link
            href="#tevekenysegek"
            className="text-lg font-medium hover:text-primary"
            onClick={() => setOpen(false)}
          >
            Tevékenységek
          </Link>
          <Link
            href="#rendezvenyek"
            className="text-lg font-medium hover:text-primary"
            onClick={() => setOpen(false)}
          >
            Rendezvények
          </Link>
          <Link
            href="#lovarda"
            className="text-lg font-medium hover:text-primary"
            onClick={() => setOpen(false)}
          >
            Lovarda
          </Link>
          <Link
            href="#oktatas"
            className="text-lg font-medium hover:text-primary"
            onClick={() => setOpen(false)}
          >
            Oktatás
          </Link>
          <Link
            href="#galeria"
            className="text-lg font-medium hover:text-primary"
            onClick={() => setOpen(false)}
          >
            Galéria
          </Link>
          <Link
            href="#kapcsolat"
            className="text-lg font-medium hover:text-primary"
            onClick={() => setOpen(false)}
          >
            Kapcsolat
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
