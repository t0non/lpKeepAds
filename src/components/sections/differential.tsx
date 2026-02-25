import React from "react";
import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function DifferentialSection() {
  return (
    <section id="diferencial" className="relative bg-gray-50">
      <div className="absolute inset-0 pointer-events-none -z-0">
        <div className="w-full h-full opacity-40 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.1),transparent_60%)]"></div>
      </div>
      <div className="w-full max-w-7xl mx-auto container-premium box-border py-16 md:py-24 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Diferencial Estratégico
          </h2>
          <p className="text-lg text-gray-600">
            Operamos com mentalidade de performance, não de volume.
          </p>
          <div className="mt-6 mx-auto h-1 w-28 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400"></div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="card-glass-premium group p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Inteligência Financeira Antes da Escala
            </h3>
            <ul className="text-gray-700 space-y-2 list-disc list-inside">
              <li>CAC aceitável</li>
              <li>Meta de ROI</li>
              <li>Margem mínima segura</li>
              <li>Capacidade de escala</li>
            </ul>
            <p className="mt-4 text-sm text-gray-500">
              Sem isso, tráfego vira risco.
            </p>
          </div>
          <div className="card-glass-premium group p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Estratégia Proprietária de Aquisição
            </h3>
            <ul className="text-gray-700 space-y-2 list-disc list-inside">
              <li>Atrair compradores qualificados</li>
              <li>Reduzir dispersão de verba</li>
              <li>Maximizar retorno por real investido</li>
            </ul>
          </div>
          <div className="card-glass-premium group p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Transparência Total de Performance
            </h3>
            <ul className="text-gray-700 space-y-2 list-disc list-inside">
              <li>Receita gerada por canal</li>
              <li>ROI consolidado</li>
              <li>Evolução do CAC</li>
              <li>Oportunidades de escala</li>
            </ul>
            <p className="mt-4 text-sm text-gray-500">
              Gestão baseada em números. Não em narrativa.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="card-glass-premium p-6 text-center">
            <p className="text-3xl font-extrabold metallic-green-text tracking-tight">-20% a -35%</p>
            <p className="text-sm text-gray-600 mt-1">CPL após 60–90 dias</p>
          </div>
          <div className="card-glass-premium p-6 text-center">
            <p className="text-3xl font-extrabold metallic-green-text tracking-tight">+30% a +60%</p>
            <p className="text-sm text-gray-600 mt-1">ROI médio estimado</p>
          </div>
          <div className="card-glass-premium p-6 text-center">
            <p className="text-3xl font-extrabold metallic-green-text tracking-tight">100%</p>
            <p className="text-sm text-gray-600 mt-1">Transparência nos relatórios</p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href={buildWhatsAppLink("Olá! Quero solicitar um Diagnóstico Estratégico com a Keep Ads.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <span className="btn-glass-green inline-flex">
              Quero meu diagnóstico no WhatsApp
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
