import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

export default function Conteudos() {
  return (
    <section id="conteudos" className="border-t border-line">
      <div className="mx-auto max-w-shell px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
        <Reveal className="flex items-center gap-3">
          <span className="h-px w-8 bg-navy" aria-hidden />
          <span className="text-[11px] font-medium tracking-eyebrow text-muted">
            CONTEÚDOS
          </span>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-8 lg:grid-cols-12">
          <Reveal
            as="h2"
            className="font-display text-[2.2rem] leading-[1.08] tracking-[-0.01em] text-ink sm:text-[2.8rem] lg:col-span-7 lg:text-[3.3rem] lg:leading-[1.02]"
          >
            Direito explicado sem juridiquês — em preparação.
          </Reveal>

          <Reveal
            delay={80}
            className="flex flex-col justify-end lg:col-span-4 lg:col-start-9"
          >
            <p className="max-w-sm text-base leading-relaxed text-muted">
              Materiais para você entender seus direitos e tomar decisões
              melhores estão sendo preparados. Enquanto isso, uma dúvida pode ser
              resolvida em uma conversa direta.
            </p>
            <a
              href={site.cta.whatsapp.href}
              className="group mt-6 inline-flex items-center gap-2 self-start text-[15px] font-medium text-navy"
            >
              <span className="border-b border-navy/40 pb-1 transition-colors duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:border-navy">
                Tirar uma dúvida
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

        <Reveal className="mt-14 border-t border-line pt-5">
          <span className="text-[11px] uppercase tracking-[0.24em] text-muted">
            Novos conteúdos em breve
          </span>
        </Reveal>
      </div>
    </section>
  );
}
