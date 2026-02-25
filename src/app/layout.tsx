import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { Instrument_Sans } from 'next/font/google';

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-instrument-sans',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Keep Ads - Mais Leads, Mais Clientes, Mais Crescimento',
  description:
    'Escale o seu faturamento e transforme visitantes em compradores com estratégias inteligentes de tráfego pago que geram resultados reais.',
  icons: {
    icon: '/icon.svg',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#10b981',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head />
      <body className={cn('min-h-screen bg-background antialiased', instrumentSans.className)}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
