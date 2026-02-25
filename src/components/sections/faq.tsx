import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle, Wallet, Clock, ShieldCheck, Users, MessageSquare, Target, TrendingUp } from "lucide-react"
import Link from "next/link"

const faqItems = [
  {
    icon: HelpCircle,
    question: "O que exatamente fazemos no tráfego?",
    answer:
      "Planejamos, rodamos e otimizamos campanhas no Google e Meta para alcançar quem está mais perto de comprar. Trabalhamos com segmentações inteligentes, palavras‑chave negativas, criativos de alta performance e testes semanais para reduzir o custo por resultado.",
  },
  {
    icon: Target,
    question: "Como evitam desperdício de verba?",
    answer:
      "Mapeamos funil e intenção de busca, bloqueamos públicos ruins e termos inúteis, criamos variações de anúncios com hipóteses claras e pausamos o que não converte. Toda semana ajustamos lances, posicionamentos e criativos com base em dados.",
  },
  {
    icon: Wallet,
    question: "Qual investimento preciso para começar?",
    answer:
      "Definimos juntos. Para negócios locais, valores iniciais comuns ficam entre R$ 1.500 e R$ 4.000/mês de mídia. O ideal é caber no seu caixa e gerar retorno rápido. A gestão é cobrada separadamente, de forma transparente.",
  },
  {
    icon: Clock,
    question: "Quando começam a chegar oportunidades?",
    answer:
      "Em muitos casos na primeira semana já há leads. O período de 30 a 90 dias é onde consolidamos otimizações para escalar com segurança.",
  },
  {
    icon: Users,
    question: "Quem cuida da minha conta?",
    answer:
      "Um gestor sênior, com apoio de analista e copy/design. Você terá um canal direto e acompanhamento contínuo.",
  },
  {
    icon: MessageSquare,
    question: "Como é a comunicação e os relatórios?",
    answer:
      "Grupo no WhatsApp, alinhamentos quinzenais e relatório semanal com métricas de CAC, CPL e ROI. Acesso a painel com os números mais importantes.",
  },
  {
    icon: ShieldCheck,
    question: "Tem fidelidade ou multa?",
    answer:
      "Sem fidelidade. Recomendamos 3 meses de projeto para maturação, mas você pode pausar a qualquer momento.",
  },
  {
    icon: TrendingUp,
    question: "Vocês atendem o meu segmento?",
    answer:
      "Atendemos clínicas, estética, lojas, concessionárias, óticas, farmácias, educação e mais. Se há demanda no Google ou no Social, podemos atrair os clientes certos.",
  },
]

export default function FaqSection() {
  return (
    <section id="faq" className="relative bg-gray-50">
      <div className="absolute inset-0 pointer-events-none -z-0">
        <div className="w-full h-full opacity-40 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.1),transparent_60%)]"></div>
      </div>
      <div className="w-full max-w-7xl mx-auto container-premium box-border py-16 md:py-24 relative z-10">
        <div className="w-full text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-4">
            Perguntas que aceleram sua decisão
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Respostas objetivas para você começar a gerar resultados com segurança.
          </p>
          <div className="mt-6 mx-auto h-1 w-28 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400"></div>
        </div>
        <div className="mt-12 w-full">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="mb-4 rounded-xl border border-emerald-100 bg-white/90 shadow-sm backdrop-blur-sm px-2"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-800 px-4 py-3 hover:no-underline data-[state=open]:text-emerald-700">
                  <span className="flex items-center gap-3">
                    <item.icon className="h-5 w-5 text-emerald-500" />
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-600 pt-0 px-4 pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="mt-10 text-center">
          <p className="text-lg text-gray-700 mb-4">Quer um diagnóstico rápido do seu caso?</p>
          <Link href="#orcamento" className="inline-block">
            <span className="btn-glass-green inline-flex">
              Solicitar Diagnóstico Estratégico
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
