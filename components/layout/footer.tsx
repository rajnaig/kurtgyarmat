// components/layout/footer.tsx
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-parchment py-12">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.png" // Majd cseréljük a tényleges logóra
                alt="Kürtgyarmat Logó"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-xl font-bold">Kürtgyarmat</span>
            </div>
            <p className="text-foreground/70 mb-4">
              Magyar lovas íjász hagyományok őrzése 2003 óta.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Gyors linkek</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#tortenet" className="text-foreground/70 hover:text-primary">
                  Történetünk
                </Link>
              </li>
              <li>
                <Link href="#tevekenysegek" className="text-foreground/70 hover:text-primary">
                  Tevékenységek
                </Link>
              </li>
              <li>
                <Link href="#rendezvenyek" className="text-foreground/70 hover:text-primary">
                  Rendezvények
                </Link>
              </li>
              <li>
                <Link href="#lovarda" className="text-foreground/70 hover:text-primary">
                  Lovarda
                </Link>
              </li>
              <li>
                <Link href="#oktatas" className="text-foreground/70 hover:text-primary">
                  Oktatás
                </Link>
              </li>
              <li>
                <Link href="#tanulmany" className="text-foreground/70 hover:text-primary">
                  Tanulmány
                </Link>
              </li>
              <li>
                <Link href="#kapcsolat" className="text-foreground/70 hover:text-primary">
                  Kapcsolat
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Kapcsolat</h3>
            <address className="not-italic">
              <p className="mb-2">Kürtgyarmat Hagyományőrző Íjász Egyesület</p>
              <p className="mb-2">4900 Fehérgyarmat, Szabó Lovasudvar</p>
              <p className="mb-2">
                <a href="tel:+36701234567" className="hover:text-primary">
                  +36 70 123 4567
                </a>
              </p>
              <p className="mb-2">
                <a href="mailto:info@kurtgyarmat.hu" className="hover:text-primary">
                  info@kurtgyarmat.hu
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-foreground/10">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-foreground/60">
              &copy; {currentYear} Kürtgyarmat Hagyományőrző Íjász Egyesület. Minden jog fenntartva.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}