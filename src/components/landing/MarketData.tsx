const stats = [
  {
    value: "US$ 12 tri",
    label: "Gasto global em saúde em 2025",
    source: "WHO Global Health Expenditure",
    bars: [40, 52, 58, 64, 71, 78, 84, 92],
  },
  {
    value: "R$ 900 bi",
    label: "Mercado brasileiro de saúde",
    source: "IESS / ANS",
    bars: [30, 36, 42, 48, 55, 62, 70, 78],
  },
  {
    value: "40%",
    label: "Tempo do médico em documentação",
    source: "JAMA Internal Medicine",
    bars: [44, 46, 48, 52, 56, 58, 60, 62],
  },
  {
    value: "+27% a.a.",
    label: "Crescimento do mercado de IA clínica",
    source: "Frost & Sullivan",
    bars: [12, 20, 28, 38, 50, 64, 78, 94],
  },
];

function MiniBars({ data }: { data: number[] }) {
  return (
    <div className="flex items-end gap-1 h-10 mt-5">
      {data.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-[2px]"
          style={{
            height: `${h}%`,
            background:
              i === data.length - 1
                ? "linear-gradient(180deg, #2C70DD, #1A56C4)"
                : "var(--primary-mid)",
          }}
        />
      ))}
    </div>
  );
}

export function MarketData() {
  return (
    <section className="py-[120px]" style={{ background: "var(--surface)" }}>
      <div className="container-inner">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16">
          <div>
            <div className="eyebrow">Mercado</div>
            <h2 className="h2 mt-5 text-ink">
              O sistema global de saúde opera sob <em>pressão estrutural</em>.
            </h2>
          </div>
          <p className="lede max-w-[560px] lg:pt-12">
            Indicadores de referência que justificam a urgência de uma
            infraestrutura clínica nativa, segura e escalável — em mercado
            doméstico e internacional.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s) => (
            <div key={s.label} className="data-card">
              <div className="num text-primary">{s.value}</div>
              <MiniBars data={s.bars} />
              <div className="mt-5 text-[14px] text-ink font-medium leading-snug">
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
