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
    <section id="casos" className="bg-white py-[56px] md:py-[120px]">
      <div className="container-inner">
        <div className="max-w-[760px]">
          <div className="eyebrow">Casos de uso</div>
          <h2 className="h2 mt-5 text-ink">
            Aplicações reais em diferentes camadas do sistema de saúde.
          </h2>
        </div>

        <div className="mt-10 md:mt-16 m-carousel md:flex md:flex-col md:space-y-px md:gap-0 md:bg-border md:border md:border-border md:rounded-2xl md:overflow-hidden">
          {cases.map((c) => (
            <div
              key={c.sector}
              className="bg-white lg:grid lg:grid-cols-[260px_1fr_1fr] gap-6 lg:gap-10 p-6 lg:px-9 lg:py-10 rounded-xl md:rounded-none border md:border-0 border-border"
            >
              <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-primary lg:text-muted-foreground">
                {c.sector}
              </div>
              <div className="mt-3 lg:mt-0">
                <h3 className="h3 text-ink">{c.title}</h3>
                <p className="mt-2 lg:mt-3 text-[14px] lg:text-[15px] leading-[1.6] lg:leading-[1.65] text-muted-foreground">
                  {c.body}
                </p>
              </div>
              <ul className="mt-4 lg:mt-0 space-y-2.5">
                {c.bullets.map((b) => (
                  <li
                    key={b}
                    className="text-[13.5px] lg:text-[14px] leading-[1.55] text-ink flex gap-3"
                  >
                    <span className="mt-1.5 lg:mt-2 w-1.5 h-1.5 rounded-full bg-ink shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-3 md:hidden font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground/70">
          ← deslize para ver mais →
        </div>
      </div>
    </section>
  );
}
