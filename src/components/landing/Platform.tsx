const layers = [
  {
    code: "L4",
    name: "Aplicações Clínicas",
    desc: "Documentação assistida, consulta remota, gestão de laudos e templates institucionais por especialidade.",
  },
  {
    code: "L3",
    name: "Camada de Inteligência",
    desc: "Modelos clínicos especializados com referência a literatura médica auditável (UpToDate, PubMed, diretrizes nacionais).",
  },
  {
    code: "L2",
    name: "Governança & Identidade",
    desc: "Controle de acesso, trilhas de auditoria, gestão de consentimento e políticas de retenção compatíveis com LGPD.",
  },
  {
    code: "L1",
    name: "Infraestrutura de Dados",
    desc: "Armazenamento criptografado em repouso e em trânsito, residência de dados em território nacional, alta disponibilidade multi-região.",
  },
];

export function Platform() {
  return (
    <section
      id="plataforma"
      className="py-[120px]"
      style={{ background: "var(--surface)" }}
    >
      <div className="container-inner">
        <div className="max-w-[780px]">
          <div className="eyebrow">A plataforma</div>
          <h2 className="h2 mt-5 text-ink">
            Uma arquitetura clínica em quatro camadas.
          </h2>
          <p className="lede mt-6">
            A MindMed Platform foi desenhada como uma stack vertical — da
            infraestrutura física à experiência do médico — para suportar
            operações assistenciais de qualquer escala.
          </p>
        </div>

        <div className="mt-16 bg-white rounded-2xl border border-border overflow-hidden">
          {layers.map((l, i) => (
            <div
              key={l.code}
              className="grid grid-cols-[100px_1fr] md:grid-cols-[140px_1fr_1.4fr] gap-6 md:gap-10 px-7 md:px-10 py-8"
              style={{
                borderTop: i === 0 ? "none" : "1px solid var(--border)",
              }}
            >
              <div className="font-mono text-[12px] tracking-[0.14em] text-muted-foreground pt-1">
                {l.code}
              </div>
              <div className="h3 text-ink">{l.name}</div>
              <div className="text-[15px] leading-[1.65] text-muted-foreground col-span-2 md:col-span-1">
                {l.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
