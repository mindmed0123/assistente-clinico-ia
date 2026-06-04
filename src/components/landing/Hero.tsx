export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-[140px] pb-[120px] bg-white overflow-hidden"
    >
      {/* subtle grid background */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, #000 30%, transparent 80%)",
        }}
      />

      <div className="container-inner relative">
        <div className="max-w-[920px]">
          <div className="eyebrow fade-up">
            MindMed Platform · Edição 2026
          </div>

          <h1 className="display mt-7 text-ink fade-up" style={{ animationDelay: ".05s" }}>
            A infraestrutura de <em>inteligência clínica</em> para a medicina moderna.
          </h1>

          <p
            className="lede mt-7 max-w-[640px] fade-up"
            style={{ animationDelay: ".12s" }}
          >
            Uma camada unificada de documentação, raciocínio clínico e
            governança de dados — projetada para operar em escala hospitalar,
            com conformidade regulatória e auditabilidade ponta a ponta.
          </p>

          <div
            className="mt-10 flex flex-wrap items-center gap-3 fade-up"
            style={{ animationDelay: ".18s" }}
          >
            <a href="mailto:mindmedcontato@gmail.com" className="btn-primary">
              Falar com a equipe institucional
            </a>
            <a href="#plataforma" className="btn-outline">
              Conhecer a plataforma →
            </a>
          </div>
        </div>

        {/* Status bar */}
        <div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden fade-up"
          style={{ animationDelay: ".28s", border: "1px solid var(--border)" }}
        >
          {[
            { k: "Uptime SLA", v: "99.95%" },
            { k: "Conformidade", v: "LGPD · CFM 2.314" },
            { k: "Criptografia", v: "AES-256 / TLS 1.3" },
            { k: "Disponibilidade", v: "Multi-região BR" },
          ].map((s) => (
            <div key={s.k} className="bg-white px-6 py-5">
              <div className="text-[11px] font-mono uppercase tracking-[0.12em] text-muted-foreground">
                {s.k}
              </div>
              <div className="mt-1.5 text-[15px] font-medium text-ink">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
