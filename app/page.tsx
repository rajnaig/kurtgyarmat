import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Hero } from '@/components/sections/hero'
import { History } from '@/components/sections/history'
import { Activities } from '@/components/sections/activities'
import { Study } from '@/components/sections/study'
import { Gallery } from '@/components/sections/gallery'
import { Contact } from '@/components/sections/contact'

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