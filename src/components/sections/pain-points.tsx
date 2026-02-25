"use client";

import { motion } from 'framer-motion';
import BouncingDots from '@/components/ui/bouncing-dots';

const AnimatedAlertIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#ef4444"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-7 w-7 alert-bob"
  >
    <defs>
      <linearGradient id="alertStroke" x1="0" y1="0" x2="0" y2="24">
        <stop offset="0%" stopColor="#7f1d1d" />
        <stop offset="35%" stopColor="#b91c1c" />
        <stop offset="55%" stopColor="#ef4444" />
        <stop offset="75%" stopColor="#b91c1c" />
        <stop offset="100%" stopColor="#7f1d1d" />
      </linearGradient>
      <linearGradient id="alertFill" x1="0" y1="0" x2="0" y2="24">
        <stop offset="0%" stopColor="rgba(239,68,68,0.25)" />
        <stop offset="50%" stopColor="rgba(239,68,68,0.08)" />
        <stop offset="100%" stopColor="rgba(127,29,29,0.25)" />
      </linearGradient>
      <filter id="metalSheen" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="0.4" result="blur" />
        <feSpecularLighting
          in="blur"
          surfaceScale="2"
          specularConstant="0.65"
          specularExponent="18"
          lightingColor="#ffffff"
          result="spec"
        >
          <fePointLight x="-50" y="-30" z="80" />
        </feSpecularLighting>
        <feComposite in="spec" in2="SourceAlpha" operator="in" />
      </filter>
    </defs>
    <path
      d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
      fill="url(#alertFill)"
    />
    <path d="M12 9v4" />
    <path d="M12 17h.01" />
  </svg>
);

const painPoints = [
  {
    title: "Ralo de Investimento",
    text: "Você coloca dinheiro no Google e Meta, mas o lucro real simplesmente não aparece no caixa no fim do mês."
  },
  {
    title: "Chuva de Curiosos",
    text: "Seu WhatsApp até apita, mas são pessoas querendo 'só dar uma olhadinha' e que nunca compram."
  },
  {
    title: "Zero Previsibilidade",
    text: "Cada mês é um sufoco diferente porque você não tem uma máquina que traga clientes de forma constante."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function PainPointsSection() {
  return (
    <section 
      id="dor" 
      className="relative w-full overflow-hidden bg-white"
    >
      <div 
        className="absolute inset-0 z-0 bg-[radial-gradient(theme(colors.gray.100)_1px,transparent_1px)] [background-size:24px_24px]"
      ></div>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2, margin: '-10%' }}
        className="relative z-10 w-full max-w-7xl mx-auto container-premium box-border pt-12 pb-8 md:pt-16 md:pb-12"
      >
        <div className="w-full text-center">
          <motion.div variants={itemVariants} className="mb-6 flex justify-center">
            <BouncingDots />
          </motion.div>
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-gray-900 mb-12"
          >
            Se o cenário do seu negócio hoje é este:
          </motion.h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3, margin: '-10%' }}
          className="mt-12 grid w-full gap-6 md:grid-cols-3"
        >
          {painPoints.map((point, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="group h-full"
            >
              <div className="text-center p-8 bg-white border border-gray-100 rounded-2xl shadow-md shadow-gray-200/50 h-full transition-all duration-300 ease-out hover:-translate-y-3 hover:shadow-2xl hover:border-red-200 card-red-glow-premium">
                <div className="mx-auto icon-glass-premium">
                  <AnimatedAlertIcon />
                </div>
                <div className="mt-6">
                  <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-2">{point.title}</h3>
                  <p className="text-base text-gray-600 leading-relaxed">{point.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="mt-16 text-center w-full"
        >
          <p className="text-xl md:text-2xl font-semibold text-gray-800">
            ...seus anúncios deveriam ser{" "}
            <span className="font-bold bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
              máquinas de vendas,
            </span>
            <br className="sm:hidden" /> não um{" "}
            <span className="text-gray-800 font-bold">
              ralo de dinheiro.
            </span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
