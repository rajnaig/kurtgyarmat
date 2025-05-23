// components/sections/history.tsx
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { TimelineItem } from "../shared/timeline-item";

export function History() {
  return (
    <section id="tortenet" className="py-16 md:py-24 bg-parchment/50">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="section-title">Történetünk</h2>
          <div className="mt-4 h-1 w-20 bg-primary mx-auto"></div>
        </div>

        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              A Kürtgyarmat név eredete
            </h3>
            <p className="mb-4">
              A Kürtgyarmat név a honfoglaláskori hét magyar törzs egyikére
              utal. 895-ben a türk-magyarok által elfoglalt Kárpát-medence
              területén Kürtgyarmat: Huba vezér irányítása alatt állt.
            </p>
            <p className="mb-4">
              Egyesületünk 2003-ban alakult baráti társaságként, majd 2007-ben
              hivatalosan is bejegyzésre került. Célunk a magyar lovas és íjász
              hagyományok ápolása, továbbadása a fiatalabb generációknak.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/history-image.jpg" // Majd cseréljük tényleges képre
              alt="Történeti kép"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Egyesületünk története
          </h3>

          {/* Timeline és kép együtt grid elrendezésben */}
          <div className="grid md:grid-cols-5 gap-8">
            {/* Bal oldali nagy kép */}
            <div className="md:col-span-2 relative rounded-lg overflow-hidden">
              <div className="h-full min-h-[600px]">
                <Image
                  src="/history-image2.jpg" // Majd cseréljük tényleges képre
                  alt="Egyesületünk története"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Jobb oldali timeline elemek */}
            <div className="md:col-span-3 space-y-8">
              <TimelineItem
                year="2003"
                title="Alapítás"
                description="A Kürtgyarmat Hagyományőrző Íjász Egyesület baráti társaságként alakult meg."
              />
              <TimelineItem
                year="2007"
                title="Hivatalos bejegyzés"
                description="Hivatalosan is bejegyzésre került a Kürtgyarmat Hagyományőrző Íjász Egyesület."
              />
              <TimelineItem
                year="2011"
                title="Együttműködés a Szabó Lovasudvarral"
                description="Állandó helyszín kialakítása a Szabó Lovasudvarral való együttműködés keretében."
              />
              <TimelineItem
                year="2015"
                title="Nemzetközi lovasíjász pálya"
                description="A Kassai-rendszerű nemzetközi lovasíjász pálya megépítése, ami egyedülálló Kelet-Magyarországon."
              />
              <TimelineItem
                year="2020"
                title="Török Nomád Világjátékok"
                description="Részvétel a Törökországi Nomád Világjátékokon a Kökpár sportágban."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
