// components/sections/contact.tsx
"use client";

import { useEffect } from "react";

export function Contact() {
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

    const elements = document.querySelectorAll(".contact-animate");
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
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth">
            Kapcsolat
          </h2>
          <div className="mt-4 h-1 w-20 bg-earth mx-auto"></div>
          <p className="mt-6 max-w-2xl mx-auto text-stone/80">
            Kérdésed van vagy csatlakoznál programjainkhoz? Vedd fel velünk a
            kapcsolatot.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="contact-animate bg-parchment rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-serif font-bold text-earth mb-8">
              Elérhetőségeink
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-earth/10 p-3 rounded-full">
                  <span className="text-earth font-bold">Tel</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-earth">Telefon</h4>
                  <a
                    href="tel:+36701234567"
                    className="text-stone/80 hover:text-earth transition-colors"
                  >
                    +36 70 123 4567
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-earth/10 p-3 rounded-full">
                  <span className="text-earth font-bold">@</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-earth">Email</h4>
                  <a
                    href="mailto:info@kurtgyarmat.hu"
                    className="text-stone/80 hover:text-earth transition-colors"
                  >
                    info@kurtgyarmat.hu
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-earth/10 p-3 rounded-full">
                  <span className="text-earth font-bold">H</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-earth">Cím</h4>
                  <address className="not-italic text-stone/80">
                    Kürtgyarmat Hagyományőrző Íjász Egyesület
                    <br />
                    4900 Fehérgyarmat, Szabó Lovasudvar
                    <br />
                    Szatmár megye
                  </address>
                </div>
              </div>
            </div>
          </div>

          <div
            className="contact-animate h-[400px] rounded-xl overflow-hidden shadow-lg"
            style={{ animationDelay: "200ms" }}
          >
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

      {/* CSS for animations */}
      <style jsx global>{`
        .contact-animate {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .contact-animate.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}
