// app/page.tsx
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import LanguageSwitcher from "@/components/language-switcher"
import MobileMenu from "@/components/mobile-menu"
import TestimonialCard from "@/components/testimonial-card"
import TimelineItem from "@/components/timeline-item"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Kürtgyarmat Logó"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="hidden text-xl font-bold sm:inline-block">Kürtgyarmat</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="#tortenet" className="text-sm font-medium hover:text-primary">
              Történetünk
            </Link>
            <Link href="#tevekenysegek" className="text-sm font-medium hover:text-primary">
              Tevékenységek
            </Link>
            <Link href="#rendezvenyek" className="text-sm font-medium hover:text-primary">
              Rendezvények
            </Link>
            <Link href="#lovarda" className="text-sm font-medium hover:text-primary">
              Lovarda
            </Link>
            <Link href="#oktatas" className="text-sm font-medium hover:text-primary">
              Oktatás
            </Link>
            <Link href="#galeria" className="text-sm font-medium hover:text-primary">
              Galéria
            </Link>
            <Link href="#kapcsolat" className="text-sm font-medium hover:text-primary">
              Kapcsolat
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <div className="md:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[80vh] w-full overflow-hidden">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
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
            <p className="mt-6 max-w-2xl text-lg">Magyar lovas íjász hagyományok őrzése 2003 óta</p>
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

        {/* Történet szekció */}
        <section id="tortenet" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Történetünk</h2>
              <div className="mt-4 h-1 w-20 bg-primary mx-auto"></div>
            </div>

            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">A Kürtgyarmat név eredete</h3>
                <p className="mb-4">
                  A Kürtgyarmat név a honfoglaláskori hét magyar törzs egyikére utal. 895-ben a türk-magyarok által elfoglalt Kárpát-medence területén Kürtgyarmat: Huba vezér irányítása alatt állt.
                </p>
                <p className="mb-4">
                  Egyesületünk 2003-ban alakult baráti társaságként, majd 2007-ben hivatalosan is bejegyzésre került. Célunk a magyar lovas és íjász hagyományok ápolása, továbbadása a fiatalabb generációknak.
                </p>
                <Link href="/tortenetunk" className="inline-flex items-center text-primary hover:underline">
                  Bővebben történetünkről <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Történeti kép"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-8 text-center">Egyesületünk története</h3>
              <div className="space-y-8">
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
        </section>

        {/* Tevékenységek szekció */}
        <section id="tevekenysegek" className="py-16 md:py-24">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Tevékenységeink</h2>
              <div className="mt-4 h-1 w-20 bg-primary mx-auto"></div>
              <p className="mt-6 max-w-2xl mx-auto text-muted-foreground">
                Fedezd fel mindazt, amivel egyesületünk foglalkozik a magyar lovas hagyományok őrzése érdekében.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="group relative overflow-hidden rounded-lg border bg-background p-2">
                <div className="h-60 w-full overflow-hidden rounded-md">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Íjászat"
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold">Íjászat</h3>
                  <p className="mt-2 text-muted-foreground">
                    Rendszeres gyalogos íjász edzések, versenyek szervezése, korhű eszközök használata. Minden korosztály számára elérhető sportág.
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg border bg-background p-2">
                <div className="h-60 w-full overflow-hidden rounded-md">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Lovas íjászat"
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold">Lovas íjászat</h3>
                  <p className="mt-2 text-muted-foreground">
                    Kassai Lajos módszere alapján oktatott és gyakorolt lovas íjászat, nemzetközi versenyrendszer szerint. Kelet-Magyarországon egyedülálló pálya.
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg border bg-background p-2">
                <div className="h-60 w-full overflow-hidden rounded-md">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Kézművesség"
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold">Kézművesség</h3>
                  <p className="mt-2 text-muted-foreground">
                    Hagyományos kézműves technikák: nemezelés, bőrözés, kovácsolás, fafaragás, fazekasság. Rendszeres foglalkozások, bemutatók tartása.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button size="lg" asChild>
                <Link href="/tevekenysegek">Tevékenységek részletesen</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Rendezvények szekció */}
        <section id="rendezvenyek" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Rendezvényeink</h2>
              <div className="mt-4 h-1 w-20 bg-primary mx-auto"></div>
              <p className="mt-6 max-w-2xl mx-auto text-muted-foreground">
                Csatlakozz hozzánk versenyeinken, bemutatóinkon és kulturális programjainkon az év során.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="p-6">
                  <div className="flex items-center gap-2">
                    <div className="rounded bg-primary/10 px-2 py-1 text-xs font-semibold text-primary">
                      Augusztus 15-17
                    </div>
                  </div>
                  <h3 className="mt-4 text-xl font-bold">Gyarmati Vigasságok</h3>
                  <p className="mt-2 text-muted-foreground">
                    Három napos rendezvény, mely a város legnagyobb kulturális eseménye. Bemutatók, versenyek, koncertek.
                  </p>
                  <div className="mt-4 flex items-center text-sm text-muted-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-1 h-4 w-4"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    Fehérgyarmat, Városi Park
                  </div>
                </div>
                <div className="flex items-center p-6 pt-0">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/rendezvenyek/gyarmati-vigassagok">Részletek</Link>
                  </Button>
                </div>
              </div>

              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="p-6">
                  <div className="flex items-center gap-2">
                    <div className="rounded bg-primary/10 px-2 py-1 text-xs font-semibold text-primary">
                      Május 10-11
                    </div>
                  </div>
                  <h3 className="mt-4 text-xl font-bold">Tavaszi Lovasíjász Verseny</h3>
                  <p className="mt-2 text-muted-foreground">
                    Nemzetközi Kassai-rendszerű lovasíjász verseny, gyalogos íjászat, kézműves foglalkozások.
                  </p>
                  <div className="mt-4 flex items-center text-sm text-muted-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-1 h-4 w-4"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    Szabó Lovasudvar, Fehérgyarmat
                  </div>
                </div>
                <div className="flex items-center p-6 pt-0">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/rendezvenyek/tavaszi-verseny">Részletek</Link>
                  </Button>
                </div>
              </div>

              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="p-6">
                  <div className="flex items-center gap-2">
                    <div className="rounded bg-primary/10 px-2 py-1 text-xs font-semibold text-primary">
                      November 30
                    </div>
                  </div>
                  <h3 className="mt-4 text-xl font-bold">András Napi Hagyományőrző Bál</h3>
                  <p className="mt-2 text-muted-foreground">
                    Jótékonysági bál, ahol a megjelenés csak népviseletben lehetséges. Népzene, néptánc, táncház.
                  </p>
                  <div className="mt-4 flex items-center text-sm text-muted-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-1 h-4 w-4"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    Fehérgyarmat, Művelődési Központ
                  </div>
                </div>
                <div className="flex items-center p-6 pt-0">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/rendezvenyek/andras-napi-bal">Részletek</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button size="lg" asChild>
                <Link href="/rendezvenyek">Összes rendezvény</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Lovarda szekció */}
        <section id="lovarda" className="py-16 md:py-24">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Szabó Lovasudvar</h2>
              <div className="mt-4 h-1 w-20 bg-primary mx-auto"></div>
              <p className="mt-6 max-w-2xl mx-auto text-muted-foreground">
                Látogass el a lovardánkba, ahol nemzetközi lovasíjász pálya és változatos lovas programok várnak.
              </p>
            </div>

            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=1000&width=800"
                  alt="Szabó Lovasudvar"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Nemzetközi lovasíjász pálya</h3>
                <p className="mb-4">
                  A lovardában található Kelet-Magyarország egyetlen hivatalos, Kassai Lajos által hitelesített lovasíjász pályája, amely nemzetközi versenyek rendezésére is alkalmas.
                </p>
                <h3 className="text-2xl font-bold mb-4">Lovas szolgáltatások</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-5 w-5 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Lovasoktatás kezdőktől a haladókig
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-5 w-5 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Lovasíjász képzés
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-5 w-5 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Lovas túravezetés, túralovaglás
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-5 w-5 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Lovastáborok szervezése
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-5 w-5 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Iskolai lovas testnevelés
                  </li>
                </ul>
                <Button asChild>
                  <Link href="/lovarda">Részletek</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Oktatás szekció */}
        <section id="oktatas" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Lovaskultúra Oktatás</h2>
              <div className="mt-4 h-1 w-20 bg-primary mx-auto"></div>
              <p className="mt-6 max-w-2xl mx-auto text-muted-foreground">
                Ismerkedj meg oktatási programjainkkal, melyek a magyar lovaskultúrát és íjászhagyományokat mutatják be.
              </p>
            </div>

            <div className="flex flex-wrap items-center mb-12">
              <div className="w-full md:w-1/2 p-6">
                <h3 className="text-2xl font-bold mb-4">Mindennapos Testnevelés - Lovaglás</h3>
                <p className="mb-4 text-muted-foreground">
                  A 2011-es Kincsem Nemzeti Lovasprogram részeként bevezettük a lovaskultúra oktatást a mindennapos testnevelés keretében. Célunk, hogy a rendszeres fizikai mozgás, az aktivitás, a gondoskodás, az odafigyelés, az empátia a gyerekek magatartásának fontos része legyen.
                </p>
                <p className="text-muted-foreground">
                  A program során a gyerekek megismerkednek a lóval mint nemes állattal, megtanulják a helyes megközelítést, a biztonságos mozgást a környezetében, valamint alap lovaglási ismereteket sajátítanak el.
                </p>
              </div>
              <div className="w-full md:w-1/2 p-6">
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  alt="Lovas oktatás"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                <h4 className="text-xl font-bold mb-3">1-2. évfolyam</h4>
                <p className="mb-2 text-sm font-semibold text-primary">Előkészítő-kezdő szakasz</p>
                <p className="text-muted-foreground">
                  Lovas helyszínek megismerése, ismerkedés a lóval, helyes megközelítés. Játékos képességfejlesztés, ügyességfejlesztés. A foglalkozás során a gyermek megtanul fegyelmezetten, csendesen, tisztelettel figyelni oktatójára, társaira és a lóra.
                </p>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                <h4 className="text-xl font-bold mb-3">3-4. évfolyam</h4>
                <p className="mb-2 text-sm font-semibold text-primary">Alapozó szakasz</p>
                <p className="text-muted-foreground">
                  Helyes ülés kialakítása, egyensúly fejlesztése. Ló ápolásának elsajátítása. Lovas terminológia megismerése. A gyermek képes önállóan lóra ülni, alapvető iram- és irányváltásokat végrehajtani.
                </p>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                <h4 className="text-xl font-bold mb-3">5-8. évfolyam</h4>
                <p className="mb-2 text-sm font-semibold text-primary">Haladó szakasz</p>
                <p className="text-muted-foreground">
                  Összetett lovaglási feladatok, sportági alapismeretek. Önálló lovaglás, ló felszerszámozása. A gyermek megismeri a különböző lovas szakágakat, a lovassportok történetét és a magyar lovas hagyományok kulturális jelentőségét.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button size="lg" asChild>
                <Link href="/oktatas">Oktatási programok részletesen</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Galéria szekció */}
        <section id="galeria" className="py-16 md:py-24">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Galéria</h2>
              <div className="mt-4 h-1 w-20 bg-primary mx-auto"></div>
              <p className="mt-6 max-w-2xl mx-auto text-muted-foreground">
                Tekintsd meg képeinket és videóinkat, melyek bemutatják tevékenységeinket, rendezvényeinket.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div key={item} className="relative aspect-square overflow-hidden rounded-md">
                  <Image
                    src={`/placeholder.svg?height=500&width=500&text=Kép+${item}`}
                    alt={`Galéria kép ${item}`}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button size="lg" asChild>
                <Link href="/galeria">Teljes galéria</Link>
              </Button>
            </div>
          </div>
        </section>

       {/* Vélemények szekció */}
       <section className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Vélemények</h2>
              <div className="mt-4 h-1 w-20 bg-primary mx-auto"></div>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <TestimonialCard
                quote="A Kürtgyarmat Egyesület rendkívül fontos szerepet játszik kulturális örökségünk megőrzésében. Lovasíjász programjuk világszínvonalú."
                author="Kovács Gábor"
                role="Kulturális szakértő"
              />
              <TestimonialCard
                quote="Gyermekeim részt vettek a nyári táborban, és teljesen lenyűgözte őket az élmény. Rengeteget tanultak hagyományainkról, miközben jól szórakoztak."
                author="Nagy Eszter"
                role="Szülő"
              />
              <TestimonialCard
                quote="Történelemtanárként rendkívül értékesnek tartom az oktatási programjaikat. Élményszerűen, érdekesen mutatják be kulturális örökségünket."
                author="Szabó István"
                role="Történelemtanár"
              />
            </div>
          </div>
        </section>

        {/* Kapcsolat szekció */}
        <section id="kapcsolat" className="py-16 md:py-24">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Kapcsolat</h2>
              <div className="mt-4 h-1 w-20 bg-primary mx-auto"></div>
              <p className="mt-6 max-w-2xl mx-auto text-muted-foreground">
                Kérdésed van vagy csatlakoznál programjainkhoz? Vedd fel velünk a kapcsolatot.
              </p>
            </div>

            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <form className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="first-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Vezetéknév
                      </label>
                      <input
                        id="first-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Vezetéknév"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="last-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Keresztnév
                      </label>
                      <input
                        id="last-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Keresztnév"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Email cím"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Üzenet
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Írd ide üzeneted..."
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Üzenet küldése
                  </Button>
                </form>
              </div>
              <div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-4 h-6 w-6 text-primary"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <div>
                      <h3 className="text-lg font-bold">Cím</h3>
                      <p className="text-muted-foreground">
                        Kürtgyarmat Hagyományőrző Íjász Egyesület
                        <br />
                        4900 Fehérgyarmat, Szabó Lovasudvar
                        <br />
                        Szatmár megye
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-4 h-6 w-6 text-primary"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <div>
                      <h3 className="text-lg font-bold">Telefon</h3>
                      <p className="text-muted-foreground">+36 70 123 4567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-4 h-6 w-6 text-primary"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <div>
                      <h3 className="text-lg font-bold">Email</h3>
                      <p className="text-muted-foreground">info@kurtgyarmat.hu</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-bold mb-4">Nyitvatartás</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Hétfő - Péntek</span>
                      <span>9:00 - 18:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Szombat</span>
                      <span>10:00 - 16:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Vasárnap</span>
                      <span>Zárva</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Kürtgyarmat Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="text-xl font-bold">Kürtgyarmat</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Magyar lovas íjász hagyományok őrzése 2003 óta.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Gyors linkek</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#tortenet" className="text-muted-foreground hover:text-primary">
                    Történetünk
                  </Link>
                </li>
                <li>
                  <Link href="#tevekenysegek" className="text-muted-foreground hover:text-primary">
                    Tevékenységek
                  </Link>
                </li>
                <li>
                  <Link href="#rendezvenyek" className="text-muted-foreground hover:text-primary">
                    Rendezvények
                  </Link>
                </li>
                <li>
                  <Link href="#lovarda" className="text-muted-foreground hover:text-primary">
                    Lovarda
                  </Link>
                </li>
                <li>
                  <Link href="#oktatas" className="text-muted-foreground hover:text-primary">
                    Oktatás
                  </Link>
                </li>
                <li>
                  <Link href="#galeria" className="text-muted-foreground hover:text-primary">
                    Galéria
                  </Link>
                </li>
                <li>
                  <Link href="#kapcsolat" className="text-muted-foreground hover:text-primary">
                    Kapcsolat
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Programok</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/programok/ijaszat" className="text-muted-foreground hover:text-primary">
                    Íjászat
                  </Link>
                </li>
                <li>
                  <Link href="/programok/lovasijaszat" className="text-muted-foreground hover:text-primary">
                    Lovasíjászat
                  </Link>
                </li>
                <li>
                  <Link href="/programok/taborok" className="text-muted-foreground hover:text-primary">
                    Nyári táborok
                  </Link>
                </li>
                <li>
                  <Link href="/programok/iskolai-programok" className="text-muted-foreground hover:text-primary">
                    Iskolai programok
                  </Link>
                </li>
                <li>
                  <Link href="/programok/workshopok" className="text-muted-foreground hover:text-primary">
                    Foglalkozások
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Hírlevél</h3>
              <p className="text-muted-foreground mb-4">
                Iratkozz fel hírlevelünkre, hogy értesülj rendezvényeinkről és tevékenységeinkről.
              </p>
              <form className="space-y-2">
                <input
                  type="email"
                  placeholder="Email címed"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button type="submit" className="w-full">
                  Feliratkozás
                </Button>
              </form>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Kürtgyarmat Hagyományőrző Íjász Egyesület. Minden jog fenntartva.
              </p>
              <div className="flex gap-4 mt-4 sm:mt-0">
                <Link href="/adatvedelem" className="text-sm text-muted-foreground hover:text-primary">
                  Adatvédelmi irányelvek
                </Link>
                <Link href="/feltetelek" className="text-sm text-muted-foreground hover:text-primary">
                  Felhasználási feltételek
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}