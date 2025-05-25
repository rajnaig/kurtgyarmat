// components/sections/history.tsx
"use client";

import Image from "next/image";
import { useEffect } from "react";

export function History() {
  const timelineEvents = [
    {
      year: "2003",
      title: "Alapítás",
      description:
        "A Kürtgyarmat Hagyományőrző Íjász Egyesület baráti társaságként alakult meg.",
    },
    {
      year: "2007",
      title: "Hivatalos bejegyzés",
      description:
        "Hivatalosan is bejegyzésre került a Kürtgyarmat Hagyományőrző Íjász Egyesület.",
    },
    {
      year: "2011",
      title: "Együttműködés a Szabó Lovasudvarral",
      description:
        "Állandó helyszín kialakítása a Szabó Lovasudvarral való együttműködés keretében.",
    },
    {
      year: "2015",
      title: "Nemzetközi lovasíjász pálya",
      description:
        "A Kassai-rendszerű nemzetközi lovasíjász pálya megépítése, ami egyedülálló Kelet-Magyarországon.",
    },
    {
      year: "2020",
      title: "Török Nomád Világjátékok",
      description:
        "Részvétel a Törökországi Nomád Világjátékokon a Kökpár sportágban.",
    },
  ];

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
    <section id="history" className="py-16 md:py-24 bg-parchment/50">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth">
            Történetünk
          </h2>
          <div className="mt-4 h-1 w-20 bg-earth mx-auto"></div>
        </div>

        <div className="grid gap-12 md:grid-cols-2 items-center mb-16">
          <div className="animate-element slide-right">
            <h3 className="text-2xl font-serif font-bold text-earth mb-4">
              A Kürtgyarmat név eredete
            </h3>
            <p className="mb-4 text-stone/80 leading-relaxed">
              A Kürtgyarmat név a honfoglaláskori hét magyar törzs egyikére
              utal. 895-ben a türk-magyarok által elfoglalt Kárpát-medence
              területén Kürtgyarmat: Huba vezér irányítása alatt állt.
            </p>
            <p className="mb-4 text-stone/80 leading-relaxed">
              Egyesületünk 2003-ban alakult baráti társaságként, majd 2007-ben
              hivatalosan is bejegyzésre került. Célunk a magyar lovas és íjász
              hagyományok ápolása, továbbadása a fiatalabb generációknak.
            </p>
          </div>

          <div className="animate-element slide-left relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/0147.JPG"
              alt="Történelmi Örökség - Magyar lovas íjász hagyományok"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 text-center p-8">
              <h4 className="text-2xl font-serif font-bold text-white mb-4">
                Történelmi Örökség
              </h4>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-serif font-bold text-earth mb-8 text-center">
            Egyesületünk története
          </h3>

          {/* Timeline és kép együtt grid elrendezésben */}
          <div className="grid md:grid-cols-5 gap-8">
            {/* Bal oldali nagy kép */}
            <div className="animate-element fade-in md:col-span-2 relative rounded-lg overflow-hidden shadow-lg">
              <div className="h-full min-h-[600px]">
                <Image
                  src="/0140.JPG"
                  alt="Egyesületünk története"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Jobb oldali timeline elemek */}
            <div className="md:col-span-3 space-y-8">
              {timelineEvents.map((event, index) => (
                <div
                  key={event.year}
                  className={`animate-element fade-in-up delay-${index} flex items-start gap-6`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Year Column */}
                  <div className="flex flex-col items-center">
                    <div className="rounded-full bg-earth text-cream font-bold py-2 px-4 text-lg shadow-md">
                      {event.year}
                    </div>
                    {index < timelineEvents.length - 1 && (
                      <div className="w-0.5 h-16 bg-earth/20 mt-2"></div>
                    )}
                  </div>

                  {/* Content Column */}
                  <div className="flex-1 bg-cream rounded-lg p-5 shadow-md">
                    <h4 className="text-xl font-serif font-bold text-earth mb-2">
                      {event.title}
                    </h4>
                    <p className="text-stone/80">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
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

        .slide-left {
          transform: translateX(30px);
        }

        .slide-right.animate-in,
        .slide-left.animate-in {
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
