// components/sections/activities.tsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ActivityCard } from "@/components/shared/activity-card";

export function Activities() {
  return (
    <section id="tevekenysegek" className="py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="section-title">Tevékenységeink</h2>
          <div className="mt-4 h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-6 max-w-2xl mx-auto text-foreground/70">
            Fedezd fel mindazt, amivel egyesületünk foglalkozik a magyar lovas
            hagyományok őrzése érdekében.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ActivityCard
            title="Íjászat"
            description="Rendszeres gyalogos íjász edzések, versenyek szervezése, korhű eszközök használata. Minden korosztály számára elérhető sportág."
            imageSrc="/ijaszat.jpeg"
          />

          <ActivityCard
            title="Lovas íjászat"
            description="Kassai Lajos módszere alapján oktatott és gyakorolt lovas íjászat, nemzetközi versenyrendszer szerint. Kelet-Magyarországon egyedülálló pálya."
            imageSrc="/lovas-ijaszat.jpeg"
          />

          <ActivityCard
            title="Kézművesség"
            description="Hagyományos kézműves technikák: nemezelés, bőrözés, kovácsolás, fafaragás, fazekasság. Rendszeres foglalkozások, bemutatók tartása."
            imageSrc="/kezmuves.jpeg"
          />
        </div>
      </div>
    </section>
  );
}
