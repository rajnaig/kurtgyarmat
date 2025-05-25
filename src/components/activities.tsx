"use client";
import { motion } from "framer-motion";
import { Target, Zap, Hammer } from "lucide-react";

interface ActivityCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

function ActivityCard({ title, description, icon, index }: ActivityCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group bg-cream rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="p-8">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-earth/10 mb-6 group-hover:bg-earth/20 transition-colors">
          {icon}
        </div>

        {/* Content */}
        <h3 className="text-2xl font-serif font-bold text-earth mb-4">
          {title}
        </h3>
        <p className="text-stone/70 leading-relaxed mb-6">{description}</p>

        {/* Hover indicator */}
        <div className="flex items-center text-earth font-medium group-hover:translate-x-2 transition-transform">
          <span>Tudj meg többet</span>
          <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
            →
          </span>
        </div>
      </div>

      {/* Decorative bottom border */}
      <div className="h-1 bg-gradient-to-r from-earth to-gold"></div>
    </motion.div>
  );
}

export function Activities() {
  const activities = [
    {
      title: "Íjászat",
      description:
        "Rendszeres gyalogos íjász edzések, versenyek szervezése, korhű eszközök használata. Minden korosztály számára elérhető sportág, amely fejleszti a koncentrációt és a pontosságot.",
      icon: <Target className="w-8 h-8 text-earth" />,
    },
    {
      title: "Lovas íjászat",
      description:
        "Kassai Lajos módszere alapján oktatott és gyakorolt lovas íjászat, nemzetközi versenyrendszer szerint. Kelet-Magyarországon egyedülálló pálya áll rendelkezésre.",
      icon: <Zap className="w-8 h-8 text-earth" />,
    },
    {
      title: "Kézművesség",
      description:
        "Hagyományos kézműves technikák: nemezelés, bőrözés, kovácsolás, fafaragás, fazekasság. Rendszeres foglalkozások és bemutatók tartása az érdeklődők számára.",
      icon: <Hammer className="w-8 h-8 text-earth" />,
    },
  ];

  return (
    <section id="activities" className="py-24 bg-parchment/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-steel text-sm font-medium tracking-wider uppercase">
              Amit csinálunk
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-earth mt-2 mb-6">
              Tevékenységeink
            </h2>
            <div className="w-20 h-1 bg-earth mx-auto mb-6"></div>
            <p className="text-lg text-stone/70 max-w-2xl mx-auto">
              Fedezd fel mindazt, amivel egyesületünk foglalkozik a magyar lovas
              hagyományok őrzése érdekében.
            </p>
          </div>

          {/* Activities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <ActivityCard
                key={activity.title}
                title={activity.title}
                description={activity.description}
                icon={activity.icon}
                index={index}
              />
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-earth/10 to-gold/10 rounded-2xl p-8 border border-earth/20">
              <h3 className="text-2xl font-serif font-bold text-earth mb-4">
                Csatlakozz hozzánk!
              </h3>
              <p className="text-stone/70 mb-6 max-w-md mx-auto">
                Érdeklődsz a lovas hagyományok és az íjászat iránt? Várunk
                szeretettel minden korosztályt!
              </p>
              <button
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    const offset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition =
                      elementPosition + window.pageYOffset - offset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                  }
                }}
                className="btn-primary"
              >
                Kapcsolat felvétele
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
