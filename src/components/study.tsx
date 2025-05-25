// components/sections/study.tsx
"use client";

import { useEffect } from "react";

export function Study() {
  // Simple intersection observer for animations
  const observeElements = () => {
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

    const elements = document.querySelectorAll(".animate-element");
    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  };

  useEffect(() => {
    const cleanup = observeElements();
    return cleanup;
  }, []);

  return (
    <section id="study" className="py-16 md:py-24 bg-leather/10">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth">
            Lovas hagyományok Szatmárban
          </h2>
          <div className="mt-4 h-1 w-20 bg-earth mx-auto"></div>
          <p className="mt-6 max-w-2xl mx-auto text-stone/80">
            Ismerkedj meg Szabó András részletes tanulmányával a lovas
            hagyományokról
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="animate-element slide-right mb-8">
            <h3 className="text-2xl font-serif font-bold text-earth mb-4">
              A tanulmányról
            </h3>
            <p className="text-stone/80 leading-relaxed">
              Szabó András &quot;Lovas hagyományok Szatmárban&quot; című munkája
              átfogó képet ad a térség lovas kultúrájáról, a Kürtgyarmat
              Hagyományőrző Íjász Egyesület tevékenységéről és a magyar lovas
              hagyományokról.
            </p>
          </div>

          {/* Idézetek szakasz */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div
              className="animate-element fade-in-up bg-cream rounded-2xl p-6 shadow-lg"
              style={{ animationDelay: "100ms" }}
            >
              <blockquote className="border-l-4 border-earth pl-4 italic text-stone/80">
                &quot;Lovas nemzet vagyunk. Ez a mondat már rég a magyar
                köztudatban bevésődött az emberek tudatába. De valójában semmi
                konkrétumot nem jelent a mai ember számára. Ha az embert, mint
                egyszerű hétköznapi embert, aki lóval nem foglalkozik, vagy nem
                ismerkedik, de a történelem és a kultúránk tanítása által mindig
                megtaláljuk ezt a mondatot.&quot;
              </blockquote>
            </div>

            <div
              className="animate-element fade-in-up bg-cream rounded-2xl p-6 shadow-lg"
              style={{ animationDelay: "200ms" }}
            >
              <blockquote className="border-l-4 border-earth pl-4 italic text-stone/80">
                &quot;A korábbi évszázadokban minden háború azon múlt, hogy
                kinek milyen fejlett lovas harci eszközei, felkészült lovas
                harcosai, illetve milyen lovai voltak. Ezt a honfoglalás kora is
                igazolja, különben a mi népünk sem maradt volna fent az
                évszázadok viharában.&quot;
              </blockquote>
            </div>

            <div
              className="animate-element fade-in-up bg-cream rounded-2xl p-6 shadow-lg"
              style={{ animationDelay: "300ms" }}
            >
              <blockquote className="border-l-4 border-earth pl-4 italic text-stone/80">
                &quot;A következő nagy magyar katonai harcos a huszár. A huszár
                szó mint lovas harcos olyannyira híres lett, hogy a világon
                mindenütt ezt a lovas katonát huszárnak nevezik, legyen az
                bármilyen földrészen, bármilyen kultúrájú és nyelvű
                nemzet.&quot;
              </blockquote>
            </div>

            <div
              className="animate-element fade-in-up bg-cream rounded-2xl p-6 shadow-lg"
              style={{ animationDelay: "400ms" }}
            >
              <blockquote className="border-l-4 border-earth pl-4 italic text-stone/80">
                &quot;Nagy szükség volt egy állandó helyszínre, ahol otthont
                találhatott az Egyesület, mert közben a Városi Sportpályán
                futball pályát építettek és ott már nem volt elegendő hely a
                gyakorláshoz.&quot;
              </blockquote>
            </div>
          </div>

          <div className="animate-element fade-in mb-10">
            <h3 className="text-2xl font-serif font-bold text-earth mb-4">
              Záró gondolatok
            </h3>
            <blockquote className="border-l-4 border-gold pl-4 italic text-lg font-medium text-stone mb-6">
              &quot;Főképpen, mert magyarok vagyunk, hogy milyen szerepet
              játszott a ló az emberiség történetében, kultúrájában és mi
              mindent köszönhetünk neki mi, aki történelmünk aranybetűs
              fejezeteinek nagy részét lóháton, nyeregben írtuk. Soha ne
              feledjük el kellőképpen tisztelni és szeretni társunkat a
              lovat.&quot;
            </blockquote>

            <p className="text-stone/80 leading-relaxed mt-8">
              A tanulmány bemutatja az egyesület tevékenységét, a lovarda
              működését és a lovas oktatás módszertanát, amely az iskolai
              testnevelés keretében valósul meg. Részletesen leírja a
              hagyományőrző tevékenységeket, eseményeket és a lovas íjászat
              nemzetközi versenyrendszerét.
            </p>
          </div>

          {/* <div className="flex justify-center mt-8">
            <a
              href="/kurtgyarmat_tanulmany.docx"
              download
              className="inline-flex items-center px-8 py-4 bg-earth text-cream rounded-full text-lg font-medium hover:bg-earth/90 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Tanulmány letöltése
            </a>
          </div> */}
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx global>{`
        .animate-element {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .animate-element.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .slide-right {
          transform: translateX(-30px);
        }

        .slide-right.animate-in {
          transform: translateX(0);
        }

        .fade-in-up {
          transform: translateY(20px);
        }

        .fade-in-up.animate-in {
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}
