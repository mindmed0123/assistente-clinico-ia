const stats = [
  { value: "12min", label: "economizados por consulta" },
  { value: "98%", label: "precisão na documentação clínica" },
  { value: "3×", label: "mais rápido que documentação manual" },
  { value: "100%", label: "aderência à LGPD e ao CFM" },
];

export function StatsBar() {
  return (
    <section className="py-16" style={{ background: "var(--primary-light)" }}>
      <div className="container-inner grid grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-white rounded-2xl p-8"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div
              className="text-[42px] font-black tracking-[-2px] leading-none"
              style={{ color: "var(--primary)" }}
            >
              {s.value}
            </div>
            <div className="mt-2 text-[14px] font-medium text-muted-foreground">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
