'use client';

import { cn } from '@/lib/utils';

const MarqueeText = () => (
    <span className="mx-8 text-xs md:text-sm uppercase tracking-[0.2em]">
        <span className="bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent font-medium drop-shadow-sm">+60 NEGÓCIOS ESCALADOS</span>
        <span className="text-gray-600 mx-6">&bull;</span>
        <span className="bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent font-medium drop-shadow-sm">TRÁFEGO PAGO DE ALTA PERFORMANCE</span>
        <span className="text-gray-600 mx-6">&bull;</span>
        <span className="bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent font-medium drop-shadow-sm">FOCO EM LUCRO REAL</span>
        <span className="text-gray-600 mx-6">&bull;</span>
        <span className="bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent font-medium drop-shadow-sm">ESPECIALISTAS EM VENDAS</span>
        <span className="text-gray-600 mx-6">&bull;</span>
    </span>
);


const Marquee = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "w-full overflow-hidden bg-gray-950 border-y border-gray-800 py-4 flex items-center relative marquee-shimmer",
        className
      )}
      {...props}
    >
      <div
        className="animate-marquee flex whitespace-nowrap"
      >
        <MarqueeText />
        <MarqueeText />
      </div>
    </div>
  );
};

export default Marquee;
