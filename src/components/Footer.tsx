import { site } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-cream">
      <div className="mx-auto max-w-shell px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-10 border-t border-white/15 py-14 sm:flex-row sm:items-start sm:justify-between">
          <div className="leading-none">
            <span className="block text-sm font-medium tracking-[0.14em] text-cream">
              NAILA FIGUEIREDO
            </span>
            <span className="mt-1 block text-[10px] tracking-[0.34em] text-cream/60">
              ADVOCACIA
            </span>
          </div>

          <nav aria-label="Rodapé" className="flex flex-wrap gap-x-8 gap-y-3">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[13px] text-cream/70 transition-colors duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-cream"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-8 text-[11px] leading-relaxed text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.lawyer.fullName} · {site.lawyer.oab}
          </p>
          <p className="max-w-md sm:text-right">
            Conteúdo de caráter meramente informativo, em conformidade com o
            Código de Ética e o Provimento nº 205/2021 da OAB.
          </p>
        </div>
      </div>
    </footer>
  );
}
