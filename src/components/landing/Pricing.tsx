import { Check, ShieldCheck } from "lucide-react";

const plans = [
  {
    code: "Starter",
    name: "Médico Individual",
    price: "R$ 149",
    period: "/mês",
    badge: "Menos de R$ 5 por consulta",
    outcome: "Documente cada consulta em segundos.",
    desc: "Para o médico autônomo que quer recuperar tempo imediatamente.",
    features: [
      "Avicena IA · 50 consultas/mês",
      "Documentação clínica automática",
      "5 templates personalizados",
      "Exportação para qualquer prontuário",
    ],
    cta: "Começar agora",
    ctaHref: "https://acesso.mindmed.online",
    highlighted: false,
  },
  {
    code: "Pro",
    name: "Prática Profissional",
    price: "R$ 299",
    period: "/mês",
    badge: "Economize até 60 horas por mês",
    outcome: "Volte a focar 100% no paciente.",
    desc: "Para o médico que atende em volume e quer máxima produtividade clínica.",
    features: [
      "Avicena IA · ilimitado",
      "Telemedicina integrada",
      "Templates ilimitados por especialidade",
      "Exportação avançada (PDF, API, e-mail)",
      "Suporte prioritário",
      "Relatórios e estatísticas",
    ],
    cta: "Começar teste gratuito",
    ctaHref: "https://acesso.mindmed.online",
    highlighted: true,
  },
  {
    code: "Enterprise",
    name: "Clínicas e Hospitais",
    price: "Sob consulta",
    period: "",
    badge: "Escala institucional",
    outcome: "Padronize a documentação em toda a operação.",
    desc: "Para clínicas, grupos médicos, hospitais e redes assistenciais.",
    features: [
      "Tudo do Pro, sem limite",
      "Multi-usuário · SSO corporativo",
      "Dashboard administrativo",
      "Integração HIS/EMR",
      "Treinamento da equipe clínica",
      "SLA e ambiente dedicado",
    ],
    cta: "Falar com vendas",
    ctaHref: "mailto:mindmedcontato@gmail.com",
    highlighted: false,
  },
];

const costs = [
  { label: "Secretária adicional", value: "R$ 2.000 – 4.000", period: "/mês" },
  { label: "Digitador clínico", value: "R$ 1.500 – 3.000", period: "/mês" },
  { label: "MindMed Pro", value: "R$ 299", period: "/mês", highlight: true },
];

export function Pricing() {
  return (
    <section id="planos" className="py-[72px] md:py-[120px] bg-white">
      <div className="container-inner">
        {/* Intro */}
        <div className="max-w-[820px]">
          <div className="eyebrow">Planos</div>
          <h2 className="h2 mt-5 text-ink">
            Quanto vale <em>recuperar horas</em> do seu dia?
          </h2>
          <p className="lede mt-6">
            Médicos utilizam a MindMed para reduzir burocracia, acelerar
            documentação clínica e voltar a focar no que realmente importa:
            o paciente.
          </p>
        </div>

        {/* Plans */}
        <div className="mt-10 md:mt-16 grid lg:grid-cols-3 gap-5 items-stretch">
          {plans.map((p) => {
            const hi = p.highlighted;
            return (
              <div
                key={p.code}
                className="relative rounded-2xl p-8 flex flex-col"
                style={{
                  background: hi ? "var(--ink)" : "#fff",
                  border: hi
                    ? "1px solid var(--primary)"
                    : "1px solid var(--border)",
                  color: hi ? "#fff" : undefined,
                  boxShadow: hi
                    ? "0 30px 60px -25px rgba(44,112,221,0.45), 0 0 0 1px rgba(44,112,221,0.20)"
                    : "none",
                  transform: hi ? "translateY(-8px)" : "none",
                }}
              >
                {hi && (
                  <>
                    <div
                      className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                      style={{
                        background:
                          "linear-gradient(90deg,#60A5FA,#2C70DD,#1A56C4)",
                      }}
                    />
                    <span
                      className="absolute -top-3 left-1/2 -translate-x-1/2 font-mono text-[10.5px] tracking-[0.14em] uppercase px-3 py-1.5 rounded-full"
                      style={{
                        background: "var(--primary)",
                        color: "#fff",
                        boxShadow: "0 6px 16px rgba(44,112,221,0.45)",
                      }}
                    >
                      Mais escolhido
                    </span>
                  </>
                )}

                <div className="flex items-center justify-between">
                  <div
                    className="font-mono text-[11px] tracking-[0.16em] uppercase"
                    style={{
                      color: hi ? "rgba(255,255,255,0.55)" : "var(--primary)",
                    }}
                  >
                    {p.code}
                  </div>
                </div>

                <h3
                  className="mt-3 text-[22px] font-semibold tracking-tight"
                  style={{ color: hi ? "#fff" : "var(--ink)" }}
                >
                  {p.name}
                </h3>
                <p
                  className="mt-1.5 text-[13.5px] leading-snug"
                  style={{
                    color: hi
                      ? "rgba(255,255,255,0.60)"
                      : "var(--muted-foreground)",
                  }}
                >
                  {p.desc}
                </p>

                {/* Outcome */}
                <div
                  className="mt-6 rounded-lg p-4"
                  style={{
                    background: hi
                      ? "rgba(96,165,250,0.10)"
                      : "var(--primary-light)",
                    border: hi
                      ? "1px solid rgba(96,165,250,0.25)"
                      : "1px solid rgba(44,112,221,0.18)",
                  }}
                >
                  <div
                    className="font-mono text-[10px] tracking-[0.14em] uppercase mb-1.5"
                    style={{
                      color: hi
                        ? "rgba(147,197,253,0.85)"
                        : "var(--primary-dark)",
                    }}
                  >
                    Resultado
                  </div>
                  <div
                    className="text-[15.5px] font-medium leading-snug"
                    style={{
                      color: hi ? "#fff" : "var(--ink)",
                      letterSpacing: "-0.012em",
                    }}
                  >
                    {p.outcome}
                  </div>
                </div>

                {/* Value badge */}
                <div
                  className="mt-5 inline-flex items-center self-start font-mono text-[10.5px] tracking-[0.14em] uppercase px-2.5 py-1 rounded border"
                  style={{
                    background: hi
                      ? "rgba(255,255,255,0.06)"
                      : "var(--surface)",
                    borderColor: hi
                      ? "rgba(255,255,255,0.18)"
                      : "var(--border)",
                    color: hi ? "#93C5FD" : "var(--primary)",
                  }}
                >
                  ✦ {p.badge}
                </div>

                {/* Price */}
                <div className="mt-7 pb-7 border-b" style={{ borderColor: hi ? "rgba(255,255,255,0.10)" : "var(--border)" }}>
                  <div className="flex items-baseline gap-1.5">
                    <div
                      className="font-semibold tracking-[-0.035em] tabular-nums"
                      style={{
                        fontSize: p.price.length > 8 ? 32 : 44,
                        color: hi ? "#fff" : "var(--ink)",
                        lineHeight: 1,
                      }}
                    >
                      {p.price}
                    </div>
                    {p.period && (
                      <div
                        className="text-[14px]"
                        style={{
                          color: hi
                            ? "rgba(255,255,255,0.55)"
                            : "var(--muted-foreground)",
                        }}
                      >
                        {p.period}
                      </div>
                    )}
                  </div>
                  <div
                    className="mt-1.5 text-[12.5px]"
                    style={{
                      color: hi
                        ? "rgba(255,255,255,0.50)"
                        : "var(--muted-foreground)",
                    }}
                  >
                    14 dias grátis · sem cartão de crédito
                  </div>
                </div>

                {/* Features */}
                <ul className="mt-6 space-y-3 flex-1">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-[14px] leading-[1.5]"
                      style={{
                        color: hi
                          ? "rgba(255,255,255,0.85)"
                          : "var(--ink)",
                      }}
                    >
                      <Check
                        size={16}
                        className="shrink-0 mt-0.5"
                        style={{ color: hi ? "#60A5FA" : "var(--primary)" }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={p.ctaHref}
                  className={hi ? "btn-primary mt-8 w-full" : "btn-outline mt-8 w-full"}
                  style={
                    hi
                      ? {
                          background: "#fff",
                          color: "var(--primary-dark)",
                          borderColor: "#fff",
                          boxShadow: "0 8px 24px rgba(255,255,255,0.18)",
                        }
                      : undefined
                  }
                >
                  {p.cta}
                </a>

                <div
                  className="mt-4 flex items-center justify-center gap-2 text-[12px]"
                  style={{
                    color: hi
                      ? "rgba(255,255,255,0.55)"
                      : "var(--muted-foreground)",
                  }}
                >
                  <ShieldCheck size={13} />
                  Garantia de 14 dias · cancele a qualquer momento
                </div>
              </div>
            );
          })}
        </div>

        {/* Cost comparison */}
        <div className="mt-24">
          <div className="max-w-[720px]">
            <div className="eyebrow-muted">Comparação de custo</div>
            <h3 className="h2 mt-5 text-ink" style={{ fontSize: "clamp(24px, 3vw, 36px)" }}>
              O custo de não automatizar.
            </h3>
            <p className="lede mt-5">
              Profissionais de apoio resolvem parte da carga documental — mas
              a um custo mensal incompatível com a escala de uma prática
              clínica moderna.
            </p>
          </div>

          <div className="mt-10 bg-white border border-border rounded-2xl overflow-hidden">
            {costs.map((c, i) => (
              <div
                key={c.label}
                className="grid grid-cols-[1fr_auto] items-center gap-6 px-7 md:px-10 py-7"
                style={{
                  borderTop: i === 0 ? "none" : "1px solid var(--border)",
                  background: c.highlight ? "var(--primary-light)" : "#fff",
                }}
              >
                <div>
                  <div
                    className="text-[15.5px] font-semibold"
                    style={{
                      color: c.highlight ? "var(--primary-dark)" : "var(--ink)",
                    }}
                  >
                    {c.label}
                  </div>
                  {c.highlight && (
                    <div className="mt-1 font-mono text-[10.5px] tracking-[0.14em] uppercase text-primary">
                      ✦ Plano recomendado
                    </div>
                  )}
                </div>
                <div className="text-right">
                  <div
                    className="text-[22px] md:text-[28px] font-semibold tabular-nums tracking-[-0.025em]"
                    style={{
                      color: c.highlight ? "var(--primary)" : "var(--ink)",
                    }}
                  >
                    {c.value}
                    <span
                      className="text-[14px] font-normal ml-1"
                      style={{
                        color: c.highlight
                          ? "var(--primary-dark)"
                          : "var(--muted-foreground)",
                      }}
                    >
                      {c.period}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground">
            Fontes · Catho / Glassdoor · Faixas salariais médias no Brasil, 2025
          </div>
        </div>
      </div>
    </section>
  );
}
