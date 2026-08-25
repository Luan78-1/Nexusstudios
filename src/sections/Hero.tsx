import { site } from "@/data/site";
import type { CSSProperties } from "react";

/** animation-delay como custom property (--d) para o stagger de entrada. */
const delay = (ms: number) => ({ "--d": `${ms}ms` } as CSSProperties);

/** Hover Premium: easing de assinatura, sem overshoot. */
const linkMotion =
  "transition-[transform,border-color,color] duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]";

export default function Hero() {
  return (
    <section id="inicio" className="relative border-t border-line">
      {/* Painel navy sangrando na metade direita (desktop) */}
      <div
        className="absolute inset-y-0 right-0 hidden w-1/2 bg-navy lg:block"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-shell grid-cols-1 lg:min-h-[88vh] lg:grid-cols-2">
        {/* ESQUERDA — bloco editorial claro, headline protagonista */}
        <div className="flex flex-col justify-center px-6 py-16 sm:px-8 lg:py-20 lg:pr-14">
          <div className="flex items-center gap-3">
            <span
              className="reveal-line h-px w-8 bg-navy"
              style={delay(0)}
              aria-hidden
            />
            <span
              className="reveal text-[11px] font-medium tracking-eyebrow text-muted"
              style={delay(120)}
            >
              ADVOCACIA · SÃO PAULO
            </span>
          </div>

          <h1
            className="reveal mt-9 font-display text-[2.7rem] leading-[1.03] tracking-[-0.015em] text-ink sm:text-[3.4rem] lg:text-[4.3rem] lg:leading-[0.98]"
            style={delay(200)}
          >
            Clareza jurídica para
            <br className="hidden sm:block" /> decisões que não podem
            <br className="hidden sm:block" /> ser tomadas no escuro.
          </h1>

          <p
            className="reveal mt-8 max-w-md text-base leading-relaxed text-muted lg:text-[1.05rem]"
            style={delay(320)}
          >
            Atuação jurídica conduzida com análise, estratégia e comunicação
            direta em cada etapa.
          </p>

          <div
            className="reveal mt-11 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-9"
            style={delay(420)}
          >
            <a
              href={site.cta.schedule.href}
              className="group inline-flex items-center gap-2 text-[15px] font-medium text-navy"
            >
              <span
                className={`border-b border-navy/40 pb-1 group-hover:border-navy ${linkMotion}`}
              >
                Agendar uma consulta
              </span>
              <span
                aria-hidden
                className={`group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${linkMotion}`}
              >
                ↗
              </span>
            </a>

            <a
              href={site.cta.whatsapp.href}
              className="group inline-flex items-center gap-2 text-[15px] font-medium text-ink"
            >
              <span
                className={`border-b border-line pb-1 group-hover:border-ink ${linkMotion}`}
              >
                Falar pelo WhatsApp
              </span>
              <span
                aria-hidden
                className={`group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${linkMotion}`}
              >
                ↗
              </span>
            </a>
          </div>
        </div>

        {/* DIREITA — painel navy com retrato e informação profissional */}
        <div className="relative flex flex-col justify-center bg-navy px-6 py-16 text-cream sm:px-8 lg:bg-transparent lg:py-20 lg:pl-14">
          {/*
            Placeholder para a fotografia real da Dra. Naila (proporção 4/5).
            Para inserir a foto definitiva, substituir o conteúdo interno por:

            import Image from "next/image";
            <Image src="/naila.jpg" alt="Naila Sabina Figueiredo" fill
                   sizes="(max-width: 1024px) 100vw, 40vw"
                   className="object-cover" />
          */}
          <div
            className="reveal relative aspect-[4/5] w-full max-w-md bg-white/[0.04] ring-1 ring-white/15"
            style={delay(300)}
          >
            <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 p-5">
              <span className="h-px w-5 bg-cream/40" aria-hidden />
              <span className="text-[10px] tracking-[0.24em] text-cream/60">
                RETRATO
              </span>
            </div>
          </div>

          <div
            className="reveal mt-6 max-w-md space-y-2 border-t border-white/15 pt-4"
            style={delay(520)}
          >
            <p className="text-[13px] font-medium tracking-wide text-cream">
              {site.lawyer.fullName}
            </p>
            <div className="flex items-center gap-3 text-[11px] tracking-[0.16em] text-cream/60">
              <span>{site.lawyer.oab}</span>
              <span className="h-3 w-px bg-white/20" aria-hidden />
              <span className="uppercase">{site.lawyer.city}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
