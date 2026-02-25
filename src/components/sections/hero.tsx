'use client';

import Image from 'next/image';
import { Bot, ArrowRight, Star } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import KelvinImg from '@/imagens/Kelvin.png';
import { KeepAdsLogo } from '@/components/ui/brand';
import { buildWhatsAppLink } from '@/lib/whatsapp';
import LogoSrc from '@/imagens/logo.webp';

const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15.5 15.5a4.5 4.5 0 1 1-6.7-6.7 4.5 4.5 0 1 1 6.7 6.7z" />
    <path d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0z" />
    <path d="M12 4v0a8 8 0 0 1 8 8h-4a4 4 0 0 0-4-4z" />
  </svg>
);

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-team');
  const shouldReduceMotion = useReducedMotion();
  
  const containerVariants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0 },
    visible: shouldReduceMotion
      ? { opacity: 1 }
      : {
          opacity: 1,
          transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
          },
        },
  };

  const itemVariants = {
    hidden: shouldReduceMotion ? { y: 0, opacity: 1, filter: 'blur(0px)' } : { y: 30, opacity: 0, filter: 'blur(10px)' },
    visible: shouldReduceMotion
      ? { y: 0, opacity: 1, filter: 'blur(0px)' }
      : {
          y: 0,
          opacity: 1,
          filter: 'blur(0px)',
          transition: { type: 'spring', stiffness: 100, damping: 20 },
        },
  };

  const starPulseVariants = {
    pulse: (i: number) => ({
      scale: shouldReduceMotion ? 1 : [1, 1.15, 1],
      transition: shouldReduceMotion
        ? undefined
        : {
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.1,
          },
    }),
  };

  return (
    <section id="hero" className="relative w-full overflow-hidden bg-white pt-2 md:pt-4">
      <div className="w-full max-w-7xl mx-auto container-premium box-border">
        <div className="grid grid-cols-1 items-start pt-2 pb-4 md:pt-4 md:pb-8 lg:grid-cols-2 lg:pt-6">
          <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="relative z-10 flex w-full flex-col items-start text-left"
            >
            
            <div className="w-full">
              <div className="mb-1 md:mb-2">
                <KeepAdsLogo className="scale-90 md:scale-100 opacity-95" />
              </div>
              <h1 className="w-full text-balance text-left text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-[3.4rem] lg:leading-[1.12] mb-1 md:mb-3">
                <motion.span variants={itemVariants}>
                  Mais Leads, mais clientes,
                  <br className="hidden md:block" />
                </motion.span>
                <motion.span
                  variants={itemVariants}
                  className="relative inline-block bg-gradient-to-r from-emerald-500 to-emerald-400 bg-clip-text pb-2 text-transparent drop-shadow-sm"
                >
                  {' '}mais vendas para seu negócio
                </motion.span>
              </h1>

              <motion.p
                variants={itemVariants}
                className="w-full text-justify text-lg leading-relaxed text-gray-600 md:text-xl mb-3 md:mb-5"
              >
                <strong className="font-extrabold text-gray-900">Escale o seu faturamento</strong> e transforme <strong className="font-extrabold text-gray-900">visitantes em compradores</strong> com estratégias inteligentes de tráfego pago que geram resultados reais.
              </motion.p>

              <motion.div variants={itemVariants} className="w-full space-y-2 md:space-y-3">
                  <a
                    href={buildWhatsAppLink('Olá! Quero solicitar um Diagnóstico Estratégico com a Keep Ads.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full lg:w-auto"
                  >
                      <button className="group btn-glass-green w-full justify-center lg:w-auto">
                          Falar no WhatsApp agora
                          <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                      </button>
                  </a>
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 pt-2">
                    <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            custom={i}
                            animate={shouldReduceMotion ? undefined : "pulse"}
                            variants={starPulseVariants}
                          >
                            <Star className="w-5 h-5 fill-current" />
                          </motion.div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-600 font-medium">
                      Confiado por +50 negócios digitais
                    </p>
                  </div>
              </motion.div>
            </div>
          </motion.div>

          <div className="relative mt-0 h-[50vh] w-full flex justify-center md:h-[55vh] lg:mt-0 lg:h-auto lg:aspect-[4/4.5]">
            {heroImage && (
              <div className="relative z-10 w-full">
                <Image
                  src={KelvinImg}
                  alt="Kelvin - Keep Ads"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  quality={60}
                  className="z-10 w-full object-contain object-bottom"
                  data-ai-hint="kelvin portrait"
                />
              </div>
            )}
            <motion.div
              className="absolute top-[25%] right-[5%] w-14 h-14"
              animate={shouldReduceMotion ? undefined : { y: [0, -10, 0] }}
              transition={shouldReduceMotion ? undefined : { duration: 3, ease: 'easeInOut', repeat: Infinity, delay: 0 }}
            >
              <div className="w-full h-full bg-white/70 backdrop-blur-md rounded-full shadow-lg hidden lg:flex items-center justify-center" title="Keep Ads">
                <Image src={LogoSrc} alt="Keep Ads" width={26} height={26} priority />
              </div>
            </motion.div>

            
            
            <motion.div
              className="absolute top-[65%] left-[15%] w-14 h-14"
              animate={shouldReduceMotion ? undefined : { y: [0, -10, 0] }}
              transition={shouldReduceMotion ? undefined : { duration: 3.5, ease: 'easeInOut', repeat: Infinity, delay: 1 }}
            >
              <div className="w-full h-full bg-white/70 backdrop-blur-md rounded-full shadow-lg hidden lg:flex items-center justify-center" title="Keep Ads">
                <Image src={LogoSrc} alt="Keep Ads" width={26} height={26} priority />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
