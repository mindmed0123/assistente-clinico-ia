const stats = [
  {
    value: "US$ 12 tri",
    label: "Gasto global em saúde em 2025",
    source: "WHO Global Health Expenditure",
  },
  {
    value: "R$ 900 bi",
    label: "Mercado brasileiro de saúde",
    source: "IESS / ANS",
  },
  {
    value: "40%",
    label: "Tempo do médico em documentação",
    source: "JAMA Internal Medicine",
  },
  {
    value: "+27% a.a.",
    label: "Crescimento do mercado de IA clínica",
    source: "Frost & Sullivan",
  },
];

export function MarketData() {
  return (
    <section className="py-[120px]" style={{ background: "var(--surface)" }}>
      <div className="container-inner">
        <div className="max-w-[760px]">
          <div className="eyebrow">Mercado</div>
          <h2 className="h2 mt-5 text-ink">
            O sistema global de saúde opera sob pressão estrutural.
          </h2>
          <p className="lede mt-6">
            Dados de referência sobre o setor que justificam a urgência de uma
            infraestrutura clínica nativa, segura e escalável.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s) => (
            <div key={s.label} className="data-card">
              <div className="num">{s.value}</div>
              <div className="mt-4 text-[14px] text-ink font-medium leading-snug">
                {s.label}
              </div>
              <div className="mt-3 pt-3 border-t border-border font-mono text-[10.5px] tracking-[0.1em] uppercase text-muted-foreground">
                Fonte · {s.source}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
