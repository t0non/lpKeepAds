"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { KeepAdsLogo } from '@/components/ui/brand';

const navLinks = [
  { href: '#quem-somos', label: 'Quem Somos' },
  { href: '#metodologia', label: 'Nossa Metodologia' },
  { href: '#parceiros', label: 'Parceiros' },
  { href: '#faq', label: 'FAQ' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200/80">
      <div className="w-full max-w-7xl mx-auto container-premium box-border flex h-20 items-center justify-between">
        <KeepAdsLogo priority />
        <nav className="hidden md:flex md:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Link href="#orcamento" id="orcamento" className="text-sm font-bold text-gray-800 hover:text-primary transition-colors">
            Solicitar Diagnóstico Estratégico &rarr;
          </Link>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 p-6">
                <KeepAdsLogo />
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium text-gray-600 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <Button asChild>
                   <Link href="#orcamento">Solicitar Diagnóstico Estratégico</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
