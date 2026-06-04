const layers = [
  {
    code: "L4",
    name: "Aplicações Clínicas",
    desc: "Documentação assistida, consulta remota, gestão de laudos e templates institucionais por especialidade.",
    items: ["Clinical", "Care", "Avicena"],
  },
  {
    code: "L3",
    name: "Camada de Inteligência",
    desc: "Modelos clínicos especializados com referência a literatura médica auditável e diretrizes nacionais.",
    items: ["Avicena Engine", "Clinical Reasoning", "Evidence Index"],
  },
  {
    code: "L2",
    name: "Governança & Identidade",
    desc: "Controle de acesso, trilhas de auditoria, gestão de consentimento e políticas de retenção.",
    items: ["IAM", "Audit Trail", "Consent"],
  },
  {
    code: "L1",
    name: "Infraestrutura de Dados",
    desc: "Armazenamento criptografado, residência de dados em território nacional, alta disponibilidade multi-região.",
    items: ["Data Plane", "Vault", "Multi-region"],
  },
];

export function Platform() {
  return (
    <section
      id="plataforma"
      className="py-[56px] md:py-[120px]"
      style={{ background: "var(--surface)" }}
    >
      <div className="container-inner">
        <div className="max-w-[800px]">
          <div className="eyebrow">A plataforma</div>
          <h2 className="h2 mt-5 text-ink">
            Uma <em>arquitetura clínica</em> em quatro camadas.
          </h2>
          <p className="lede mt-6">
            A MindMed Platform foi desenhada como uma stack vertical — da
            infraestrutura física à experiência do médico — para suportar
            operações assistenciais de qualquer escala.
          </p>
        </div>

        <div
          className="mt-10 md:mt-16 bg-white border border-border rounded-2xl overflow-hidden"
          style={{ boxShadow: "0 20px 60px -30px rgba(44,112,221,0.20)" }}
        >
          {layers.map((l, i) => (
            <div
              key={l.code}
              className="grid grid-cols-1 md:grid-cols-[120px_1.1fr_1.6fr_1fr] gap-3 md:gap-10 px-5 md:px-10 py-7 md:py-9 relative"
              style={{
                borderTop: i === 0 ? "none" : "1px solid var(--border)",
              }}
            >
              <div
                className="absolute left-0 top-0 bottom-0 w-1"
                style={{
                  background: "var(--primary)",
                  opacity: 1 - i * 0.18,
                }}
              />
              <div className="font-mono text-[11px] md:text-[12px] tracking-[0.16em] text-primary md:pt-1">
                {l.code}
              </div>
              <div className="h3 text-ink">{l.name}</div>
              <div className="text-[14.5px] md:text-[15px] leading-[1.6] text-muted-foreground">
                {l.desc}
              </div>
              <div className="flex flex-wrap gap-1.5 md:justify-end mt-1 md:mt-0">
                {l.items.map((it) => (
                  <span
                    key={it}
                    className="font-mono text-[10.5px] tracking-[0.1em] uppercase px-2.5 py-1 rounded border border-border bg-surface text-ink-3"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
