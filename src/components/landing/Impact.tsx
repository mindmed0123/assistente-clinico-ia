const metrics = [
  { v: "−68%", l: "tempo médio gasto em documentação clínica" },
  { v: "+3,2×", l: "throughput assistencial por turno" },
  { v: "98,4%", l: "completude documental em laudos auditados" },
  { v: "12 min", l: "recuperados por consulta, em média" },
];

export function Impact() {
  return (
    <section className="bg-white py-[120px]">
      <div className="container-inner">
        <div className="grid lg:grid-cols-2 gap-16 items-end">
          <div>
            <div className="eyebrow">Impacto operacional</div>
            <h2 className="h2 mt-5 text-ink">
              Eficiência mensurável, em escala assistencial.
            </h2>
          </div>
          <p className="lede max-w-[520px]">
            Resultados observados em operações que adotaram a MindMed como
            camada de documentação e apoio à decisão clínica.
          </p>
        </div>

        <div className="mt-16 border-t border-border">
          <div className="grid md:grid-cols-2 lg:grid-cols-4">
            {metrics.map((m, i) => (
              <div
                key={m.l}
                className="py-10 px-2 border-b border-border lg:border-b-0"
                style={{
                  borderRight:
                    i < metrics.length - 1 ? "1px solid var(--border)" : "none",
                }}
              >
                <div className="num">{m.v}</div>
                <div className="mt-5 text-[14px] leading-[1.55] text-muted-foreground max-w-[220px]">
                  {m.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
