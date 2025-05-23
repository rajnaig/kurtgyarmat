// components/sections/study.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileDown, Quote } from "lucide-react";

export function Study() {
  return (
    <section id="tanulmany" className="py-16 md:py-24 bg-leather/10">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="section-title">Lovas hagyományok Szatmárban</h2>
          <div className="mt-4 h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-6 max-w-2xl mx-auto text-foreground/70">
            Ismerkedj meg Szabó András részletes tanulmányával a lovas
            hagyományokról
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="prose max-w-none mb-8">
            <h3>A tanulmányról</h3>
            <p>
              Szabó András &quot;Lovas hagyományok Szatmárban&quot; című munkája
              átfogó képet ad a térség lovas kultúrájáról, a Kürtgyarmat
              Hagyományőrző Íjász Egyesület tevékenységéről és a magyar lovas
              hagyományokról.
            </p>
          </div>

          {/* Idézetek szakasz */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white/70 p-6 rounded-lg shadow-sm">
              <Quote className="h-8 w-8 text-primary/50 mb-2" />
              <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/80">
                &quot;Lovas nemzet vagyunk. Ez a mondat már rég a magyar
                köztudatban bevésődött az emberek tudatába. De valójában semmi
                konkrétumot nem jelent a mai ember számára. Ha az embert, mint
                egyszerű hétköznapi embert, aki lóval nem foglalkozik, vagy nem
                ismerkedik, de a történelem és a kultúránk tanítása által mindig
                megtaláljuk ezt a mondatot.&quot;
              </blockquote>
            </div>

            <div className="bg-white/70 p-6 rounded-lg shadow-sm">
              <Quote className="h-8 w-8 text-primary/50 mb-2" />
              <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/80">
                &quot;A korábbi évszázadokban minden háború azon múlt, hogy
                kinek milyen fejlett lovas harci eszközei, felkészült lovas
                harcosai, illetve milyen lovai voltak. Ezt a honfoglalás kora is
                igazolja, különben a mi népünk sem maradt volna fent az
                évszázadok viharában.&quot;
              </blockquote>
            </div>

            <div className="bg-white/70 p-6 rounded-lg shadow-sm">
              <Quote className="h-8 w-8 text-primary/50 mb-2" />
              <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/80">
                &quot;A következő nagy magyar katonai harcos a huszár. A huszár
                szó mint lovas harcos olyannyira híres lett, hogy a világon
                mindenütt ezt a lovas katonát huszárnak nevezik, legyen az
                bármilyen földrészen, bármilyen kultúrájú és nyelvű
                nemzet.&quot;
              </blockquote>
            </div>

            <div className="bg-white/70 p-6 rounded-lg shadow-sm">
              <Quote className="h-8 w-8 text-primary/50 mb-2" />
              <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/80">
                &quot;Nagy szükség volt egy állandó helyszínre, ahol otthont
                találhatott az Egyesület, mert közben a Városi Sportpályán
                futball pályát építettek és ott már nem volt elegendő hely a
                gyakorláshoz.&quot;
              </blockquote>
            </div>
          </div>

          <div className="prose max-w-none mb-10">
            <h3>Záró gondolatok</h3>
            <blockquote className="border-l-4 border-accent pl-4 italic text-lg font-medium">
              &quot;Főképpen, mert magyarok vagyunk, hogy milyen szerepet
              játszott a ló az emberiség történetében, kultúrájában és mi
              mindent köszönhetünk neki mi, aki történelmünk aranybetűs
              fejezeteinek nagy részét lóháton, nyeregben írtuk. Soha ne
              feledjük el kellőképpen tisztelni és szeretni társunkat a
              lovat.&quot;
            </blockquote>

            <p className="mt-8">
              A tanulmány bemutatja az egyesület tevékenységét, a lovarda
              működését és a lovas oktatás módszertanát, amely az iskolai
              testnevelés keretében valósul meg. Részletesen leírja a
              hagyományőrző tevékenységeket, eseményeket és a lovas íjászat
              nemzetközi versenyrendszerét.
            </p>
          </div>

          <div className="flex justify-center mt-8">
            <Button className="flex items-center gap-2" size="lg" asChild>
              <Link href="/kurtgyarmat_tanulmany.docx" download>
                <FileDown className="h-5 w-5" /> Tanulmány letöltése
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
