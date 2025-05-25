// components/layout/footer.tsx
"use client";

import { useEffect } from "react";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ): void => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Simple intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".footer-animate");
    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <footer className="bg-parchment/80 py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="footer-animate" style={{ animationDelay: "100ms" }}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Kürtgyarmat Logó"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <span className="text-xl font-serif font-bold text-earth">
                Kürtgyarmat
              </span>
            </div>
            <p className="text-stone/80 mb-4">
              Magyar lovas íjász hagyományok őrzése 2003 óta.
            </p>
          </div>

          <div className="footer-animate" style={{ animationDelay: "200ms" }}>
            <h3 className="text-lg font-serif font-bold text-earth mb-4">
              Gyors linkek
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#history"
                  onClick={(e) => handleScroll(e, "history")}
                  className="text-stone/80 hover:text-earth transition-colors"
                >
                  Történetünk
                </a>
              </li>
              <li>
                <a
                  href="#activities"
                  onClick={(e) => handleScroll(e, "activities")}
                  className="text-stone/80 hover:text-earth transition-colors"
                >
                  Tevékenységek
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  onClick={(e) => handleScroll(e, "events")}
                  className="text-stone/80 hover:text-earth transition-colors"
                >
                  Rendezvények
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  onClick={(e) => handleScroll(e, "education")}
                  className="text-stone/80 hover:text-earth transition-colors"
                >
                  Oktatás
                </a>
              </li>
              <li>
                <a
                  href="#study"
                  onClick={(e) => handleScroll(e, "study")}
                  className="text-stone/80 hover:text-earth transition-colors"
                >
                  Tanulmány
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleScroll(e, "contact")}
                  className="text-stone/80 hover:text-earth transition-colors"
                >
                  Kapcsolat
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-animate" style={{ animationDelay: "300ms" }}>
            <h3 className="text-lg font-serif font-bold text-earth mb-4">
              Kapcsolat
            </h3>
            <address className="not-italic">
              <p className="mb-2 text-stone/80">
                Kürtgyarmat Hagyományőrző Íjász Egyesület
              </p>
              <p className="mb-2 text-stone/80">
                4900 Fehérgyarmat, Szabó Lovasudvar
              </p>
              <p className="mb-2">
                <a
                  href="tel:+36701234567"
                  className="text-stone/80 hover:text-earth transition-colors"
                >
                  +36 70 123 4567
                </a>
              </p>
              <p className="mb-2">
                <a
                  href="mailto:info@kurtgyarmat.hu"
                  className="text-stone/80 hover:text-earth transition-colors"
                >
                  info@kurtgyarmat.hu
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-stone/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-stone/60">
              &copy; {currentYear} Kürtgyarmat Hagyományőrző Íjász Egyesület.
              Minden jog fenntartva.
            </p>

            <div className="flex items-center">
              <p className="text-sm text-stone/60 mr-3">
                Fejlesztő: Rajnai Gábor
              </p>
              <a
                href="https://www.rajnaigabor.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-earth text-cream rounded-full text-sm font-medium hover:bg-earth/90 transition-all duration-300 hover:scale-105 shadow-sm"
              >
                Weboldal megtekintése
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx global>{`
        .footer-animate {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .footer-animate.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </footer>
  );
}
