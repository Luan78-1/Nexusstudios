"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper">
      <div className="mx-auto flex max-w-shell items-center justify-between px-6 py-5 lg:px-10">
        <a
          href="#inicio"
          onClick={() => setOpen(false)}
          className="leading-none"
          aria-label={`${site.name} — ${site.brand}, ir para o início`}
        >
          <span className="block text-sm font-medium tracking-[0.14em] text-ink">
            NAILA FIGUEIREDO
          </span>
          <span className="mt-1 block text-[10px] tracking-[0.34em] text-muted">
            ADVOCACIA
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Navegação principal">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] text-ink/75 transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={site.cta.schedule.href}
            className="group inline-flex items-center gap-1.5 text-[13px] font-medium text-petrol"
          >
            <span className="border-b border-petrol/40 pb-0.5 transition-colors group-hover:border-petrol">
              Agendar consulta
            </span>
            <span
              aria-hidden
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            >
              ↗
            </span>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="-mr-1 p-1 text-ink lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="menu-mobile"
        >
          {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>

      {open && (
        <div id="menu-mobile" className="border-t border-line bg-paper lg:hidden">
          <nav
            className="mx-auto flex max-w-shell flex-col px-6 pb-8 pt-2"
            aria-label="Navegação mobile"
          >
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-line/70 py-4 font-display text-2xl text-ink"
              >
                {item.label}
              </a>
            ))}
            <a
              href={site.cta.schedule.href}
              onClick={() => setOpen(false)}
              className="mt-8 inline-flex items-center gap-2 text-[15px] font-medium text-petrol"
            >
              <span className="border-b border-petrol/50 pb-1">Agendar consulta</span>
              <span aria-hidden>↗</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
