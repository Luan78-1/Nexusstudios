import { site } from "@/data/site";

export default function Hero() {
  return (
    <section id="inicio" className="border-t border-line">
      <div className="mx-auto flex min-h-[86vh] max-w-shell flex-col justify-center px-6 py-14 lg:px-10 lg:py-20">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-petrol" aria-hidden />
          <span className="text-[11px] font-medium tracking-eyebrow text-muted">
            ADVOCACIA · SÃO PAULO
          </span>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-14 lg:mt-14 lg:grid-cols-12">
          {/* Bloco editorial — headline protagonista */}
          <div className="lg:col-span-7 lg:row-start-1">
            <h1 className="font-display text-[2.7rem] leading-[1.03] tracking-[-0.015em] text-ink sm:text-[3.6rem] lg:text-[4.7rem] lg:leading-[0.98]">
              Clareza jurídica para
              <br className="hidden sm:block" /> decisões que não podem
              <br className="hidden sm:block" /> ser tomadas no escuro.
            </h1>

            <p className="mt-9 max-w-md text-base leading-relaxed text-muted lg:text-[1.05rem]">
              Atuação jurídica conduzida com análise, estratégia e comunicação
              direta em cada etapa.
            </p>

            <div className="mt-11 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-9">
              <a
                href={site.cta.schedule.href}
                className="group inline-flex items-center gap-2 text-[15px] font-medium text-petrol"
              >
                <span className="border-b border-petrol/40 pb-1 transition-colors group-hover:border-petrol">
                  Agendar uma consulta
                </span>
                <span
                  aria-hidden
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                >
                  ↗
                </span>
              </a>

              <a
                href={site.cta.whatsapp.href}
                className="group inline-flex items-center gap-2 text-[15px] font-medium text-ink"
              >
                <span className="border-b border-line pb-1 transition-colors group-hover:border-ink">
                  Falar pelo WhatsApp
                </span>
                <span
                  aria-hidden
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                >
                  ↗
                </span>
              </a>
            </div>
          </div>

          {/* Retrato editorial (placeholder) + informação profissional */}
          <div className="lg:col-span-4 lg:col-start-9 lg:row-start-1">
            {/*
              Placeholder para a fotografia real da Dra. Naila (proporção 4/5).
              Para inserir a foto definitiva, substituir o conteúdo abaixo por:

              import Image from "next/image";
              <Image src="/naila.jpg" alt="Naila Sabina Figueiredo" fill
                     sizes="(max-width: 1024px) 100vw, 33vw"
                     className="object-cover" />
            */}
            <div className="relative aspect-[4/5] w-full bg-mist ring-1 ring-line">
              <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 p-5">
                <span className="h-px w-5 bg-muted/60" aria-hidden />
                <span className="text-[10px] tracking-[0.24em] text-muted">
                  RETRATO
                </span>
              </div>
            </div>

            <div className="mt-5 space-y-2 border-t border-line pt-4">
              <p className="text-[13px] font-medium tracking-wide text-ink">
                {site.lawyer.fullName}
              </p>
              <div className="flex items-center gap-3 text-[11px] tracking-[0.16em] text-muted">
                <span>{site.lawyer.oab}</span>
                <span className="h-3 w-px bg-line" aria-hidden />
                <span className="uppercase">{site.lawyer.city}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
