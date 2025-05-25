"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

// Define an interface for the navigation items
interface NavigationItem {
  name: string;
  href: string;
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navigation: NavigationItem[] = [
    { name: "Főoldal", href: "#hero" },
    { name: "Történetünk", href: "#history" },
    { name: "Tevékenységek", href: "#activities" },
    { name: "Galéria", href: "#gallery" },
    { name: "Tanulmány", href: "#study" },
    { name: "Kapcsolat", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionElement = section as HTMLElement;
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight &&
          sectionId
        ) {
          setActiveSection(`#${sectionId}`);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ): void => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed w-full bg-cream/95 backdrop-blur-md z-50 shadow-sm border-b border-earth/10">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo és név */}
          <a
            href="#hero"
            className="flex items-center space-x-3 group"
            onClick={(e) => handleScroll(e, "#hero")}
          >
            <div className="relative w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform overflow-hidden">
              <Image
                src="/logo.png"
                alt="Kürtgyarmat Logó"
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-serif font-bold text-[rgb(var(--color-earth))]">
                Kürtgyarmat
              </span>
              <span className="text-sm text-[rgb(var(--color-steel))] -mt-1">
                Íjász Egyesület
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className={`relative flex items-center space-x-1 text-sm font-medium transition-colors hover:text-[rgb(var(--color-earth))]
                  ${
                    activeSection === item.href
                      ? "text-[rgb(var(--color-earth))]"
                      : "text-[rgb(var(--color-stone))]"
                  }`}
              >
                <span>{item.name}</span>
                {activeSection === item.href && (
                  <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[rgb(var(--color-earth))]" />
                )}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[rgb(var(--color-stone))] hover:text-[rgb(var(--color-earth))] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 space-y-2 bg-[rgb(var(--color-parchment))] rounded-xl p-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className={`flex items-center space-x-3 py-3 px-4 rounded-lg text-sm font-medium hover:bg-[rgb(var(--color-earth))]/10 transition-colors
                  ${
                    activeSection === item.href
                      ? "text-[rgb(var(--color-earth))] bg-[rgb(var(--color-earth))]/10"
                      : "text-[rgb(var(--color-stone))]"
                  }`}
              >
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
