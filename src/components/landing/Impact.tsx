const metrics = [
  { v: "−68%", l: "tempo médio gasto em documentação clínica" },
  { v: "+3,2×", l: "throughput assistencial por turno" },
  { v: "98,4%", l: "completude documental em laudos auditados" },
  { v: "12 min", l: "recuperados por consulta, em média" },
];

export function Impact() {
  return (
    <section className="bg-white py-[56px] md:py-[120px]">
      <div className="container-inner">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-end">
          <div>
            <div className="eyebrow">Impacto operacional</div>
            <h2 className="h2 mt-5 text-ink">
              Eficiência <em>mensurável</em>, em escala assistencial.
            </h2>
          </div>
          <p className="lede max-w-[520px]">
            Resultados observados em operações que adotaram a MindMed como
            camada de documentação e apoio à decisão clínica.
          </p>
        </div>

        <div className="mt-10 md:mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border rounded-2xl overflow-hidden">
          {metrics.map((m) => (
            <div key={m.l} className="bg-white p-6 md:p-9 relative">
              <div className="num text-primary">{m.v}</div>
              <div className="mt-6 text-[14px] leading-[1.55] text-muted-foreground max-w-[240px]">
                {m.l}
              </div>
              <div
                className="absolute left-0 top-0 h-[3px] w-12"
                style={{ background: "var(--primary)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
