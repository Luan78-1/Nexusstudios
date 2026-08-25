/**
 * Informações editáveis do escritório.
 *
 * ATENÇÃO — nada aqui deve ser inventado. Campos marcados como "CONFIRMAR"
 * usam os dados tentativos do briefing e precisam ser validados com a Dra. Naila
 * antes de publicar. Não adicionar telefone, e-mail, endereço, redes, anos de
 * experiência, número de clientes, resultados, prêmios ou depoimentos sem
 * confirmação.
 */
export const site = {
  name: "Naila Figueiredo",
  brand: "Advocacia",
  lawyer: {
    fullName: "Naila Sabina Figueiredo",
    oab: "OAB/SP 347.761",
    city: "São Paulo",
    uf: "SP",
    // Única informação profissional confirmada no briefing.
    education: "Pós-graduação em Direito Público",
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
  /**
   * CONFIRMAR — áreas de atuação ainda tentativas (briefing). As descrições
   * abaixo são neutras (o que a área abrange, em geral), sem prometer resultado.
   * Ajustar/remover conforme a atuação real da Dra. Naila.
   */
  areas: [
    {
      title: "Direito Cível",
      desc: "Contratos, responsabilidade civil e conflitos entre particulares.",
    },
    {
      title: "Direito Trabalhista",
      desc: "Relações de trabalho e demandas de empregados e empregadores.",
    },
    {
      title: "Direito do Consumidor",
      desc: "Relações de consumo, cobranças indevidas e conflitos com fornecedores.",
    },
    {
      title: "Direito Penal",
      desc: "Acompanhamento em investigações e processos na esfera criminal.",
    },
    {
      title: "Direito Tributário",
      desc: "Questões fiscais e discussões sobre a cobrança de tributos.",
    },
    {
      title: "Direito Digital",
      desc: "Questões jurídicas do ambiente digital, dados e responsabilidade online.",
    },
  ],
} as const;

export type Site = typeof site;
