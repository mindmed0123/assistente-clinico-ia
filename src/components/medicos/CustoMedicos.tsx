const rows = [
  {
    label: "Profissional dedicado a digitar prontuário",
    value: "R$ 2.000 a R$ 4.000 / mês",
  },
  {
    label: "Seu tempo, duas horas por dia, no que ninguém gosta de fazer",
    value: "não tem preço, e você já está pagando",
  },
  {
    label: "MindMed Pro",
    value: "R$ 299 / mês",
    highlight: true,
  },
];

export function CustoMedicos() {
  return (
    <section className="py-[56px] md:py-[120px]" style={{ background: "var(--surface)" }}>
      <div className="container-inner">
        <div className="max-w-[760px]">
          <div className="eyebrow">Custo</div>
          <h2 className="h2 mt-4 text-ink">
            A conta que <em>todo consultório já fez.</em>
          </h2>
        </div>

        <div
          className="mt-8 md:mt-12 rounded-2xl overflow-hidden bg-white"
          style={{ border: "1px solid var(--border)" }}
        >
          {rows.map((r, i) => (
            <div
              key={r.label}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-6 px-6 md:px-8 py-5"
              style={{
                borderTop: i === 0 ? undefined : "1px solid var(--border)",
                background: r.highlight ? "var(--primary-light)" : undefined,
              }}
            >
              <span
                className="text-[14.5px] md:text-[15.5px] leading-[1.5]"
                style={{ color: r.highlight ? "var(--ink)" : "var(--ink-3)", fontWeight: r.highlight ? 600 : 400 }}
              >
                {r.label}
              </span>
              <span
                className="text-[15px] md:text-[17px] font-semibold tabular-nums shrink-0"
                style={{ color: r.highlight ? "var(--primary)" : "var(--ink)" }}
              >
                {r.value}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-6 text-[14.5px] md:text-[15px] leading-[1.7] text-muted-foreground max-w-[760px]">
          A MindMed não substitui a sua equipe. Ela devolve o tempo dela para o
          que só gente consegue fazer: receber bem o paciente, organizar a
          agenda, resolver convênio. O que a IA assume é a parte que ninguém
          disputa — transformar o que foi dito em documento estruturado.
        </p>
      </div>
    </section>
  );
}
