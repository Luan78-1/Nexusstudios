import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

export default function Contato() {
  return (
    <section id="contato" className="bg-navy text-cream">
      <div className="mx-auto max-w-shell px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="grid grid-cols-1 gap-x-10 gap-y-14 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal className="flex items-center gap-3">
              <span className="h-px w-8 bg-cream/50" aria-hidden />
              <span className="text-[11px] font-medium tracking-eyebrow text-cream/60">
                CONTATO
              </span>
            </Reveal>

            <Reveal
              as="h2"
              delay={60}
              className="mt-8 font-display text-[2.4rem] leading-[1.04] tracking-[-0.015em] sm:text-[3.2rem] lg:text-[4rem] lg:leading-[0.98]"
            >
              Vamos conversar
              <br className="hidden sm:block" /> sobre o seu caso.
            </Reveal>

            <Reveal
              delay={140}
              className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-9"
            >
              <a
                href={site.cta.schedule.href}
                className="group inline-flex items-center gap-2 text-base font-medium text-cream"
              >
                <span className="border-b border-cream/40 pb-1 transition-colors duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:border-cream">
                  Agendar uma consulta
                </span>
                <span
                  aria-hidden
                  className="transition-transform duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                >
                  ↗
                </span>
              </a>

              <a
                href={site.cta.whatsapp.href}
                className="group inline-flex items-center gap-2 text-base font-medium text-cream/80"
              >
                <span className="border-b border-cream/20 pb-1 transition-colors duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:border-cream/70">
                  Falar pelo WhatsApp
                </span>
                <span
                  aria-hidden
                  className="transition-transform duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                >
                  ↗
                </span>
              </a>
            </Reveal>
          </div>

          <Reveal
            delay={100}
            className="flex flex-col justify-end lg:col-span-3 lg:col-start-10"
          >
            <div className="space-y-3 border-t border-white/15 pt-5">
              <p className="text-sm font-medium tracking-wide text-cream">
                {site.lawyer.fullName}
              </p>
              <p className="text-[11px] uppercase tracking-[0.16em] text-cream/60">
                {site.lawyer.oab}
              </p>
              <p className="text-[11px] uppercase tracking-[0.16em] text-cream/60">
                {site.lawyer.city} · {site.lawyer.uf}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
