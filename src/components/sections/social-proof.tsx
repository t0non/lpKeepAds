'use client';

import * as React from "react";
import { Volume2, VolumeX } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const videos = ["/videos/videoautoridade.mp4", "/videos/videoautoridade2.mp4"] as const;

export default function SocialProofSection() {
  const [muted, setMuted] = React.useState<boolean[]>([true, true]);
  const refs = React.useRef<(HTMLVideoElement | null)[]>([]);

  const toggleMute = (idx: number) => {
    const video = refs.current[idx];
    if (!video) return;
    const newMuted = !video.muted;
    video.muted = newMuted;
    if (video.paused) {
      void video.play().catch(() => {});
    }
    setMuted((m) => {
      const next = [...m];
      next[idx] = newMuted;
      return next;
    });
  };

  return (
    <section id="parceiros" className="relative bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none -z-0">
        <div className="w-full h-full opacity-10 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.15),transparent_60%)]"></div>
        <div className="absolute inset-0 opacity-5 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.15)_0px,rgba(255,255,255,0.15)_2px,transparent_2px,transparent_6px)]"></div>
      </div>
      <div className="w-full max-w-7xl mx-auto container-premium box-border py-16 md:py-24 relative z-10">
        <div className="w-full text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12">
            Negócios locais que já dominam sua região com nossa gestão.
          </h2>
          <div className="mt-6 mx-auto h-1 w-28 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400"></div>
        </div>

        {/* Grade de vídeos com autoplay mudo e clique para ouvir */}
        <div className="mt-12 grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          {videos.map((src, index) => (
            <div
              key={index}
              className="group relative w-full overflow-hidden rounded-xl ring-1 ring-white/10 hover:ring-white/20 transition-all shadow-2xl shadow-black/40 bg-black"
            >
              <video
                ref={(el) => {
                  refs.current[index] = el;
                }}
                src={src}
                className="w-full h-auto object-contain"
                autoPlay
                muted
                playsInline
                loop
                preload="metadata"
                poster="/_next/static/media/logo.744c5bd2.webp"
                style={{ objectPosition: 'center center' }}
              />
              {/* Overlay para controle de áudio */}
              <button
                type="button"
                onClick={() => toggleMute(index)}
                className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-gradient-to-t from-black/45 via-black/0 to-black/0 opacity-100 hover:opacity-100 focus:opacity-100 transition-opacity"
                aria-label={muted[index] ? "Ativar áudio" : "Desativar áudio"}
              >
                <span className="inline-flex items-center gap-3 rounded-full bg-white/15 px-4 py-2 ring-1 ring-white/25 backdrop-blur-md">
                  {muted[index] ? (
                    <VolumeX className="h-6 w-6" />
                  ) : (
                    <Volume2 className="h-6 w-6" />
                  )}
                  <span className="text-sm font-semibold">
                    {muted[index] ? "Toque para ouvir" : "Toque para silenciar"}
                  </span>
                </span>
              </button>
            </div>
          ))}
        </div>

        {/* Subheadline + CTA */}
        <div className="mt-10 md:mt-14 text-center">
          <p className="text-lg md:text-xl text-gray-300 mb-4">
            Quer ter os mesmos resultados?
          </p>
          <a
            href={buildWhatsAppLink("Olá! Quero solicitar um Diagnóstico Estratégico com a Keep Ads.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <span className="btn-glass-green inline-flex">
              Conversar com especialista no WhatsApp
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
