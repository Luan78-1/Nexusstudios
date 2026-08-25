import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

export default function Atuacao() {
  return (
    <section id="atuacao" className="border-t border-line bg-stone/40">
      <div className="mx-auto max-w-shell px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-12 lg:gap-x-10">
          <Reveal className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-navy" aria-hidden />
              <span className="text-[11px] font-medium tracking-eyebrow text-muted">
                ATUAÇÃO
              </span>
            </div>
            <h2 className="mt-8 font-display text-[2.2rem] leading-[1.08] tracking-[-0.01em] text-ink sm:text-[2.8rem] lg:text-[3.3rem] lg:leading-[1.02]">
              Áreas em que o escritório atende.
            </h2>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
              Se o seu caso não estiver listado aqui, vale conversar mesmo assim —
              o primeiro passo é entender o que você precisa.
            </p>
          </Reveal>

          <ol className="lg:col-span-6 lg:col-start-7">
            {site.areas.map((area, i) => (
              <Reveal
                key={area.title}
                as="li"
                delay={i * 60}
                className="group border-t border-line py-6 last:border-b"
              >
                <div className="flex items-baseline gap-5">
                  <span className="text-[11px] font-medium tabular-nums tracking-widest text-navy/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl text-ink">
                      {area.title}
                    </h3>
                    <p className="mt-1.5 max-w-md text-sm leading-relaxed text-muted">
                      {area.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
