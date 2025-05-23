// components/sections/contact.tsx
import { Phone, Mail, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="kapcsolat" className="py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="section-title">Kapcsolat</h2>
          <div className="mt-4 h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-6 max-w-2xl mx-auto text-foreground/70">
            Kérdésed van vagy csatlakoznál programjainkhoz? Vedd fel velünk a kapcsolatot.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-parchment rounded-xl p-8 shadow-md">
            <h3 className="text-2xl font-bold mb-8">Elérhetőségeink</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Telefon</h4>
                  <a href="tel:+36701234567" className="text-foreground/70 hover:text-primary">
                    +36 70 123 4567
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Email</h4>
                  <a href="mailto:info@kurtgyarmat.hu" className="text-foreground/70 hover:text-primary">
                    info@kurtgyarmat.hu
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Cím</h4>
                  <address className="not-italic text-foreground/70">
                    Kürtgyarmat Hagyományőrző Íjász Egyesület<br />
                    4900 Fehérgyarmat, Szabó Lovasudvar<br />
                    Szatmár megye
                  </address>
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-[400px] rounded-xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21382.09832005787!2d22.504632!3d47.984631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4737e785dafffff9%3A0x5564a4b35a41bf1e!2zRmVow6lyZ3lhcm1hdCwgNDkwMA!5e0!3m2!1shu!2shu!4v1615629870537!5m2!1shu!2shu"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}