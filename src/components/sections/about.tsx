import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import EquipeImg from "@/imagens/Equipe Keep ADS.png";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const aboutImage = PlaceHolderImages.find(p => p.id === "hero-team");

export default function AboutSection() {
  return (
    <section id="quem-somos" className="relative bg-white overflow-hidden">
      <div className="w-full max-w-7xl mx-auto container-premium box-border py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-in fade-in slide-in-from-left-12 duration-1000">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight lg:text-5xl mb-6">
              Quem está por trás da{" "}
              <span className="bg-gradient-to-r from-emerald-500 to-emerald-400 bg-clip-text text-transparent">
                Keep Ads
              </span>
              ?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              A Keep Ads é uma agência focada exclusivamente em gerar lucro para negócios através de tráfego pago. Unimos técnica, copy e acompanhamento diário para colocar sua empresa na frente de quem realmente importa: o seu próximo cliente.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Não somos apenas "gestores de tráfego", somos parceiros estratégicos obcecados por resultados mensuráveis.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <a
                href={buildWhatsAppLink("Olá! Gostaria de falar com a equipe da Keep Ads.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <span className="btn-glass-green w-full inline-flex">
                  Falar com a equipe
                </span>
              </a>
              <Button asChild variant="outline" size="lg" className="w-full">
                <Link href="https://www.instagram.com/keepads.performance/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="mr-2 h-5 w-5" />
                  Ver nosso Instagram
                </Link>
              </Button>
            </div>
          </div>
          <div className="animate-in fade-in slide-in-from-right-12 duration-1000 w-full relative">
            {aboutImage && (
              <Image 
                src={EquipeImg}
                alt="Equipe Keep Ads"
                width={1600}
                height={1200}
                sizes="(min-width: 1024px) 50vw, 100vw"
                quality={75}
                className="max-w-full h-auto origin-bottom scale-125 sm:scale-125 md:scale-110 translate-y-4 sm:translate-y-6 md:translate-y-0 -mb-8 sm:-mb-10 md:mb-0"
                data-ai-hint="team photo"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
