import { TrendingUp, Search, MousePointerClick, Eye } from "lucide-react";
import React from "react";

const solutions = [
  {
    icon: TrendingUp,
    title: "Otimização Contínua",
    description: "Monitoramos cada centavo para garantir a melhor performance e o menor custo por resultado."
  },
  {
    icon: Search,
    title: "Diagnóstico Preciso",
    description: "Identificamos exatamente onde sua empresa está perdendo dinheiro e oportunidades."
  },
  {
    icon: MousePointerClick,
    title: "Anúncios Estratégicos",
    description: "Campanhas desenhadas para impactar o cliente que já tem o cartão de crédito na mão, pronto para comprar."
  },
  {
    icon: Eye,
    title: "Transparência Total",
    description: "Acompanhamento detalhado e relatórios claros. Você sabe exatamente de onde vem cada venda."
  }
];

export default function SolutionSection() {
  return (
    <section id="solucao" className="bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 -z-0 pointer-events-none">
        <div className="w-full h-full opacity-25 bg-[linear-gradient(135deg,#10b981_0%,#34d399_40%,#059669_100%)]"></div>
        <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.18)_0px,rgba(255,255,255,0.18)_2px,transparent_2px,transparent_6px)]"></div>
      </div>
      
      <div className="w-full max-w-7xl mx-auto container-premium box-border relative z-10 pt-12 pb-16 md:pb-24">
        <div className="w-full text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-4 text-white">
            Na Keep Ads, a inteligência do tráfego se traduz em:
          </h2>
        </div>

        <div className="mt-20 grid w-full gap-12 md:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution, index) => (
            <div key={index} className="w-full h-full [perspective:1000px]">
              <div 
                className="relative flex h-full flex-col justify-start rounded-2xl p-6
                          bg-black/30 border border-white/20 shadow-2xl shadow-black/40
                          backdrop-blur-lg
                          transition-transform duration-500 [transform-style:preserve-3d]
                          [transform:rotateX(10deg)_rotateY(-10deg)]
                          hover:[transform:none]"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none"></div>
                
                <div className="relative">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center">
                      <solution.icon className="h-7 w-7 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{solution.title}</h3>
                  <p className="text-white/70 leading-relaxed flex-grow">{solution.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
