import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { History } from "@/components/history";
import { Activities } from "@/components/activities";
import { Gallery } from "@/components/gallery";
import { Study } from "@/components/study";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <History />
      <Activities />
      <Study />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
