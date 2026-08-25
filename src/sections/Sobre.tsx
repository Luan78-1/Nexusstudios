import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

const METODO = [
  {
    title: "Análise",
    desc: "Ler o caso a fundo antes de recomendar qualquer caminho.",
  },
  {
    title: "Estratégia",
    desc: "Definir o próximo passo a partir do resultado que importa para você.",
  },
  {
    title: "Comunicação",
    desc: "Manter você a par de cada etapa, em linguagem direta e sem juridiquês.",
  },
];

export default function Sobre() {
  return (
    <section id="escritorio" className="border-t border-line">
      <div className="mx-auto max-w-shell px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="grid grid-cols-1 gap-x-10 gap-y-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-navy" aria-hidden />
              <span className="text-[11px] font-medium tracking-eyebrow text-muted">
                O ESCRITÓRIO
              </span>
            </div>
            <p className="mt-8 text-[13px] uppercase tracking-[0.16em] text-muted">
              {site.lawyer.education}
            </p>
          </Reveal>

          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal
              as="h2"
              className="font-display text-[2.2rem] leading-[1.08] tracking-[-0.01em] text-ink sm:text-[2.8rem] lg:text-[3.3rem] lg:leading-[1.02]"
            >
              Cada caso começa por entender a decisão que você precisa tomar.
            </Reveal>

            <Reveal
              as="p"
              delay={80}
              className="mt-8 max-w-xl text-base leading-relaxed text-muted lg:text-[1.05rem]"
            >
              O trabalho não parte de fórmulas prontas. Parte da leitura do seu
              contexto, dos riscos envolvidos e do que está de fato em jogo — para
              que a orientação chegue clara e o próximo passo seja uma escolha
              consciente, não um salto no escuro.
            </Reveal>

            <dl className="mt-14 grid grid-cols-1 gap-px border-t border-line sm:grid-cols-3">
              {METODO.map((item, i) => (
                <Reveal
                  key={item.title}
                  delay={i * 90}
                  className="border-b border-line pt-5 sm:border-b-0 sm:pr-6"
                >
                  <dt className="font-display text-xl text-ink">{item.title}</dt>
                  <dd className="mt-2 pb-5 text-sm leading-relaxed text-muted">
                    {item.desc}
                  </dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
