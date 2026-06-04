const tiers = [
  {
    code: "Tier I",
    name: "Consultório Individual",
    desc: "Médico autônomo com prática própria.",
    range: "1 — 5 médicos",
    items: [
      "Onboarding em horas",
      "Documentação clínica e Avicena",
      "Telemedicina integrada",
    ],
  },
  {
    code: "Tier II",
    name: "Clínicas e Grupos Médicos",
    desc: "Operação multi-médico com governança compartilhada.",
    range: "5 — 100 médicos",
    items: [
      "Templates institucionais",
      "Dashboard administrativo",
      "Trilha auditável por equipe",
    ],
  },
  {
    code: "Tier III",
    name: "Hospitais e Redes",
    desc: "Operação assistencial de escala regional ou nacional.",
    range: "100+ médicos",
    items: [
      "SSO corporativo · SAML/OIDC",
      "Integração HIS/EMR existente",
      "SLA institucional · ambiente dedicado",
    ],
  },
];

export function Scale() {
  return (
    <section className="bg-white py-[120px]">
      <div className="container-inner">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16">
          <div>
            <div className="eyebrow">Escalabilidade</div>
            <h2 className="h2 mt-5 text-ink">
              Infraestrutura para consultórios, clínicas e <em>redes hospitalares</em>.
            </h2>
          </div>
          <p className="lede max-w-[560px] lg:pt-12">
            A mesma plataforma escala do médico autônomo a uma rede com
            centenas de unidades — sem reescrita, sem migração, sem perda
            de governança.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-3 gap-5">
          {tiers.map((t, i) => (
            <div
              key={t.code}
              className="rounded-2xl p-9 relative overflow-hidden bg-white border"
              style={{
                borderColor: i === 2 ? "var(--primary)" : "var(--border)",
                boxShadow:
                  i === 2
                    ? "0 20px 50px -20px rgba(44,112,221,0.30)"
                    : "none",
              }}
            >
              {i === 2 && (
                <div
                  className="absolute top-0 left-0 right-0 h-[3px]"
                  style={{ background: "linear-gradient(90deg,#2C70DD,#1A56C4)" }}
                />
              )}
              <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-primary">
                {t.code}
              </div>
              <h3 className="mt-3 text-[22px] font-semibold tracking-tight text-ink">
                {t.name}
              </h3>
              <div className="mt-2 text-[13px] text-muted-foreground">
                {t.desc}
              </div>

              <div
                className="mt-6 inline-block font-mono text-[10.5px] tracking-[0.14em] uppercase px-2.5 py-1 rounded border"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--surface)",
                  color: "var(--ink-3)",
                }}
              >
                {t.range}
              </div>

              <ul className="mt-7 space-y-2.5">
                {t.items.map((it) => (
                  <li
                    key={it}
                    className="text-[14px] leading-[1.5] text-ink flex gap-3"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {it}
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
