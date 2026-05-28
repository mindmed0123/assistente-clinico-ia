import { Check } from "lucide-react";

const plans = [
  {
    label: "BÁSICO",

    price: "R$ 149",
    period: "por mês · 7 dias grátis para começar",
    features: [
      "Avicena IA (50 consultas/mês)",
      "Documentação automática",
      "5 templates personalizados",
      "Exportação para qualquer prontuário",
    ],
    cta: "Começar grátis",
    ctaHref: "https://acesso.mindmed.online",
    variant: "outline" as const,
  },
  {
    label: "PROFISSIONAL",
    price: "R$ 299",
    period: "por mês · 7 dias grátis para começar",
    features: [
      "Avicena IA ilimitado",
      "Telemedicina integrada",
      "Templates ilimitados",
      "Exportação avançada (PDF, API, e-mail)",
      "Suporte prioritário",
      "Relatórios e estatísticas",
    ],
    cta: "Começar trial gratuito",
    ctaHref: "https://acesso.mindmed.online",
    highlighted: true,
  },
  {
    label: "CLÍNICA / GRUPO",
    price: "Sob consulta",
    period: "para múltiplos médicos",
    priceSmall: true,
    features: [
      "Tudo do Profissional",
      "Multi-usuário",
      "Dashboard administrativo",
      "Integração customizada",
      "Treinamento da equipe",
    ],
    cta: "Falar com vendas",
    ctaHref: "mailto:mindmedcontato@gmail.com",
    variant: "outline" as const,
  },
];


export function Pricing() {
  return (
    <section
      id="planos"
      className="py-[100px]"
      style={{ background: "var(--surface)" }}
    >
      <div className="container-inner">
        <div className="text-center mb-14">
          <span className="section-label">Planos</span>
          <h2 className="h2 mt-4">
            Quanto custa ter uma IA clínica ao seu lado?
          </h2>
          <p className="mt-4 text-[17px] text-muted-foreground">
            Comece grátis por 7 dias. Cancele quando quiser.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 items-center">
          {plans.map((p) => {
            const highlighted = p.highlighted;
            return (
              <div
                key={p.label}
                className="rounded-[20px] p-9"
                style={{
                  background: highlighted ? "#0A1628" : "#fff",
                  border: highlighted
                    ? "1.5px solid var(--primary)"
                    : "1.5px solid var(--border)",
                  boxShadow: highlighted ? "var(--shadow-blue-lg)" : "none",
                  color: highlighted ? "#fff" : undefined,
                  transform: highlighted ? "scale(1.02)" : undefined,
                }}
              >
                {highlighted && (
                  <span
                    className="pill mb-5"
                    style={{ background: "var(--primary)", color: "#fff" }}
                  >
                    Mais escolhido
                  </span>
                )}
                <div
                  className="text-[12px] font-bold tracking-[1px]"
                  style={{
                    color: highlighted
                      ? "rgba(255,255,255,0.50)"
                      : "var(--muted-foreground)",
                  }}
                >
                  {p.label}
                </div>
                <div
                  className="mt-2 font-black tracking-[-1.5px]"
                  style={{
                    fontSize: p.priceSmall ? 32 : 44,
                    color: highlighted ? "#fff" : "var(--foreground)",
                    lineHeight: 1,
                  }}
                >
                  {p.price}
                </div>
                <div
                  className="mt-1 text-[14px]"
                  style={{
                    color: highlighted
                      ? "rgba(255,255,255,0.50)"
                      : "var(--muted-foreground)",
                  }}
                >
                  {p.period}
                </div>

                <ul className="mt-7 space-y-3">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-[14px]"
                      style={{
                        color: highlighted
                          ? "rgba(255,255,255,0.85)"
                          : "var(--foreground)",
                      }}
                    >
                      <Check
                        size={17}
                        className="shrink-0 mt-0.5"
                        style={{ color: "#10B981" }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={p.ctaHref}
                  className={
                    highlighted
                      ? "btn-primary mt-8 w-full"
                      : "btn-outline mt-8 w-full"
                  }
                >
                  {p.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
