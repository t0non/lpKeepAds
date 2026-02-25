import Link from 'next/link';
import { Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';
import { KeepAdsLogo } from '@/components/ui/brand';

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t-2 border-primary">
      <div className="w-full max-w-7xl mx-auto container-premium box-border py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col">
            <KeepAdsLogo />
            <p className="mt-2 text-sm text-gray-500">
              Transformando cliques em clientes.
            </p>
          </div>
          <div className="flex flex-col">
            <h4 className="font-semibold text-gray-800">Navegação</h4>
            <nav className="mt-4 flex flex-col gap-2">
              <Link href="#quem-somos" className="text-sm text-gray-600 hover:text-primary">Quem Somos</Link>
              <Link href="#metodologia" className="text-sm text-gray-600 hover:text-primary">Nossa Metodologia</Link>
              <Link href="#parceiros" className="text-sm text-gray-600 hover:text-primary">Parceiros</Link>
              <Link href="#faq" className="text-sm text-gray-600 hover:text-primary">FAQ</Link>
            </nav>
          </div>
          <div className="flex flex-col">
            <h4 className="font-semibold text-gray-800">Contato</h4>
            <p className="mt-4 text-sm text-gray-600">contato@keepads.com.br</p>
            <Link href="#orcamento" className="text-sm font-semibold text-primary mt-2">
                Solicitar Orçamento &rarr;
            </Link>
          </div>
          <div className="flex flex-col">
            <h4 className="font-semibold text-gray-800">Redes Sociais</h4>
            <div className="mt-4 flex gap-4">
              <Link href="https://www.instagram.com/keepads.performance/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-6 w-6 text-gray-500 transition-colors hover:text-gray-700" />
              </Link>
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-6 w-6 text-gray-500 transition-colors hover:text-[#1877F2]" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6 text-gray-500 transition-colors hover:text-[#0A66C2]" />
              </Link>
              <Link href="#" aria-label="YouTube">
                <Youtube className="h-6 w-6 text-gray-500 transition-colors hover:text-gray-700" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center">
          <p className="text-sm text-gray-500">
            2026 © Keep Ads – Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
