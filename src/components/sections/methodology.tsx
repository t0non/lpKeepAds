"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from 'framer-motion';
import { Search, DraftingCompass, Rocket, TrendingUp } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const timelineSteps = [
  {
    icon: Search,
    title: "Diagnóstico Estratégico Profundo",
    description:
      "Análise de posicionamento, oferta, margem, estrutura comercial e histórico de campanhas para entender onde está o ganho real.",
  },
  {
    icon: DraftingCompass,
    title: "Arquitetura de Crescimento",
    description:
      "Desenho da estratégia de aquisição, estrutura de campanhas, distribuição de orçamento e metas claras de performance.",
  },
  {
    icon: Rocket,
    title: "Execução de Alta Performance",
    description:
      "Copy persuasiva, criativos orientados à conversão e segmentação estratégica. Lançamento com critérios e hipóteses.",
  },
  {
    icon: TrendingUp,
    title: "Otimização e Escala Controlada",
    description:
      "Análise diária, cortes inteligentes e escala progressiva e sustentável baseada em ROI e capacidade operacional.",
  },
];


const GlassCard = ({ stepNumber, title, description }: { stepNumber: string; title: string; description: string; }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" }}
  };

  return (
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        whileHover={{ y: -6, scale: 1.01 }}
        viewport={{ once: true, amount: 0.6, margin: '-10%' }}
        className="relative group bg-white p-8 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 transition-shadow duration-300 hover:shadow-2xl hover:shadow-gray-500/10"
      >
        <div className="relative z-20">
          <span className="text-gray-700 font-bold text-sm uppercase tracking-widest mb-3 block">{stepNumber}</span>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
          <p className="text-gray-600 leading-relaxed text-lg">{description}</p>
        </div>
      </motion.div>
  );
};


export default function MethodologySection() {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ["start 0.9", "end 0.1"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [progress, setProgress] = useState(0);
  const iconRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [filled, setFilled] = useState<boolean[]>(
    Array(timelineSteps.length).fill(false)
  );

  const rafRef = useRef<number | null>(null);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => setProgress(v));
  });
  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    const tl = timelineRef.current as unknown as HTMLElement | null;
    if (!tl) return;
    const rect = tl.getBoundingClientRect();
    const total = rect.height;
    const filledPx = total * progress;
    const top = window.scrollY + rect.top;
    const states = iconRefs.current.map((el) => {
      if (!el) return false;
      const r = el.getBoundingClientRect();
      const center = window.scrollY + r.top - top + r.height / 2;
      return filledPx >= center;
    });
    setFilled(states);
  }, [progress]);

  

  return (
    <section id="metodologia" className="bg-gray-50">
      <div className="w-full max-w-7xl mx-auto container-premium box-border py-16 md:py-24">
        <div className="w-full text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 tracking-tight">
            Como funciona nossa operação
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Nosso processo comprovado para transformar seu investimento em lucro.
          </p>
        </div>

        <div className="relative mt-20" ref={timelineRef}>
          <div className="absolute left-5 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gray-200 rounded-full" />
          <motion.div
            style={{
              height: lineHeight,
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)',
              boxShadow: '0 0 14px rgba(16,185,129,0.5)',
            }}
            className="absolute left-5 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-emerald-600 via-emerald-400 to-teal-300 rounded-full origin-top z-0 will-change-[height]"
          />

          <div className="relative flex flex-col gap-16 md:gap-8">
            {timelineSteps.map((step, index) => {
              const isEven = index % 2 !== 0;
              return (
                <div
                  key={index}
                  className={cn(
                    "relative z-10 grid grid-cols-[2.5rem_1fr] gap-3 items-start md:flex md:flex-row",
                    isEven ? "md:justify-end" : "md:justify-start"
                  )}
                >
                  <div className="row-start-1 col-start-1 md:absolute md:left-1/2 md:top-8 md:-translate-x-1/2 z-20">
                    <motion.div
                      ref={(el) => {
                        iconRefs.current[index] = el;
                      }}
                      whileInView={{ opacity: [0, 1], scale: [0.9, 1.03, 1] }}
                      transition={{ duration: 0.9, ease: 'easeOut', times: [0, 0.7, 1], delay: 0.1 }}
                      viewport={{ once: true, amount: 0.6, margin: '-10%' }}
                      className={cn(
                        "mx-auto flex items-center justify-center w-10 h-10 md:w-16 md:h-16 rounded-full text-white border-4 shadow-[0_0_16px_rgba(0,0,0,0.25)] will-change-transform transition-colors duration-300",
                        filled[index]
                          ? "bg-gray-800 border-emerald-500"
                          : "bg-gray-800 border-white"
                      )}
                      animate={
                        filled[index]
                          ? { scale: [1, 1.1, 1], boxShadow: "0 0 22px rgba(16,185,129,0.55)" }
                          : { scale: 1, boxShadow: "0 0 16px rgba(0,0,0,0.25)" }
                      }
                    >
                      <step.icon className="h-5 w-5 md:h-6 md:w-6" />
                    </motion.div>
                  </div>

                  <div className={cn("col-start-2 w-full md:w-[calc(50%-2.5rem)]")}>
                    <GlassCard 
                      stepNumber={`Passo ${index + 1}`}
                      title={step.title}
                      description={step.description}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
