const cases = [
  {
    sector: "Hospitais e redes",
    title: "Padronização documental em escala",
    body: "Unificação de templates clínicos entre unidades, redução de variabilidade documental e governança centralizada sobre o uso de IA assistencial.",
    bullets: [
      "Templates institucionais por especialidade",
      "Auditoria por unidade e por equipe",
      "Integração com HIS/EMR existente",
    ],
  },
  {
    sector: "Operadoras e medicina diagnóstica",
    title: "Documentação consistente e auditável",
    body: "Laudos estruturados, completude verificável e trilha auditável para uso em processos regulatórios, glosa e jornada do beneficiário.",
    bullets: [
      "Estruturação semântica de laudos",
      "Relatórios regulatórios sob demanda",
      "Conformidade ANS e LGPD",
    ],
  },
  {
    sector: "Clínicas especializadas",
    title: "Produtividade clínica sem perda de profundidade",
    body: "Liberação de tempo do corpo clínico, mantendo o rigor técnico das especialidades e o padrão documental institucional.",
    bullets: [
      "Reuso de protocolos por especialidade",
      "Telemedicina integrada nativa",
      "Implantação em dias, não meses",
    ],
  },
];

export function UseCases() {
  return (
    <section id="casos" className="bg-white py-[72px] md:py-[120px]">
      <div className="container-inner">
        <div className="max-w-[760px]">
          <div className="eyebrow">Casos de uso</div>
          <h2 className="h2 mt-5 text-ink">
            Aplicações reais em diferentes camadas do sistema de saúde.
          </h2>
        </div>

        <div className="mt-10 md:mt-16 space-y-px bg-border border border-border rounded-2xl overflow-hidden">
          {cases.map((c) => (
            <div
              key={c.sector}
              className="bg-white grid lg:grid-cols-[260px_1fr_1fr] gap-10 px-5 md:px-9 py-7 md:py-10"
            >
              <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-foreground">
                {c.sector}
              </div>
              <div>
                <h3 className="h3 text-ink">{c.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.65] text-muted-foreground">
                  {c.body}
                </p>
              </div>
              <ul className="space-y-2.5">
                {c.bullets.map((b) => (
                  <li
                    key={b}
                    className="text-[14px] leading-[1.55] text-ink flex gap-3"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-ink shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
