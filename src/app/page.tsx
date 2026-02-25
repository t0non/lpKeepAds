import SectionsClient from './sections-client';
import HeroSection from '@/components/sections/hero';
import Footer from '@/components/layout/footer';
import Marquee from '@/components/ui/marquee';
export const dynamic = 'force-static';

// Seções abaixo da dobra renderizadas no client com code-splitting

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-white">
      <main className="flex-1">
        <HeroSection />
        <Marquee />
        <SectionsClient />
      </main>
      <Footer />
    </div>
  );
}
