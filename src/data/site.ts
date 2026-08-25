/**
 * Informações editáveis do escritório.
 * Nesta fase (Identidade Digital) mantemos apenas o necessário para Header e Hero.
 *
 * ATENÇÃO: campos com valor "#" são placeholders e devem ser preenchidos com os
 * dados reais confirmados com a Dra. Naila antes de publicar. Nada aqui deve ser
 * inventado (telefone, e-mail, endereço, redes, áreas de atuação).
 */
export const site = {
  name: "Naila Figueiredo",
  brand: "Advocacia",
  lawyer: {
    fullName: "Naila Sabina Figueiredo",
    oab: "OAB/SP 347.761",
    city: "São Paulo",
    uf: "SP",
  },
  nav: [
    { label: "Início", href: "#inicio" },
    { label: "O Escritório", href: "#escritorio" },
    { label: "Atuação", href: "#atuacao" },
    { label: "Conteúdos", href: "#conteudos" },
    { label: "Contato", href: "#contato" },
  ],
  cta: {
    // Preencher com o link real de agendamento quando definido.
    schedule: { label: "Agendar consulta", href: "#agendar" },
    // Preencher com o link real do WhatsApp (https://wa.me/55...) quando confirmado.
    whatsapp: { label: "Falar pelo WhatsApp", href: "#" },
  },
} as const;

export type Site = typeof site;
