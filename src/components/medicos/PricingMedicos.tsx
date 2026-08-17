import { Check, ShieldCheck } from "lucide-react";
import { CtaButton } from "@/components/CtaButton";
import { CTA_LABEL, CTA_MICRO } from "./CtaMedicos";

const plans = [
  {
    code: "Starter",
    price: "R$ 149",
    period: "/mês",
    desc: "Para o consultório que está começando a automatizar.",
    features: [
      "Documentação clínica por áudio",
      "Templates da sua especialidade",
      "Exportação em PDF assinado",
      "Suporte por e-mail",
    ],
    appPlan: "mindmed_starter",
    highlighted: false,
    badge: null as string | null,
  },
  {
    code: "Pro",
    price: "R$ 299",
    period: "/mês",
    desc: "Para quem atende todos os dias e não quer limite.",
    features: [
      "Tudo do Starter, sem limite de uso",
      "Telemedicina integrada",
      "Templates ilimitados e personalizados",
      "Receituário e atestados",
      "Suporte prioritário",
    ],
    appPlan: "mindmed_pro",
    highlighted: true,
    badge: "Mais escolhido",
  },
  {
    code: "Pro Anual",
    price: "R$ 2.990",
    period: "/ano",
    desc: "Tudo do Pro. Equivale a R$ 249/mês.",
    features: ["Economia de R$ 598 por ano", "Mesma garantia de 30 dias"],
    appPlan: "mindmed_pro_anual",
    highlighted: false,
    badge: "2 meses grátis",
  },
];

export function PricingMedicos() {
  return (
    <section className="py-[56px] md:py-[120px] bg-white">
      <div className="container-inner">
        <div className="max-w-[760px]">
          <div className="eyebrow">Planos</div>
          <h2 className="h2 mt-4 text-ink">
            Escolha e <em>comece hoje.</em>
          </h2>
        </div>

        <div className="mt-8 md:mt-14 grid lg:grid-cols-3 gap-5 items-stretch">
          {plans.map((p) => {
            const hi = p.highlighted;
            return (
              <div
                key={p.code}
                className="relative rounded-2xl p-5 pt-7 md:p-8 flex flex-col"
                style={{
                  background: hi ? "var(--ink)" : "#fff",
                  border: hi ? "1px solid var(--ink)" : "1px solid var(--border)",
                  boxShadow: hi ? "0 30px 70px -25px rgba(11,18,32,0.45)" : undefined,
                }}
              >
                {p.badge && (
                  <span
                    className="absolute -top-3 left-6 font-mono text-[10.5px] tracking-[0.12em] uppercase px-3 py-1.5 rounded-md"
                    style={{
                      background: hi ? "var(--primary)" : "var(--primary-light)",
                      color: hi ? "#fff" : "var(--primary)",
                      border: hi ? "1px solid var(--primary)" : "1px solid var(--primary-mid)",
                    }}
                  >
                    {p.badge}
                  </span>
                )}

                <div
                  className="font-mono text-[11px] tracking-[0.14em] uppercase"
                  style={{ color: hi ? "rgba(255,255,255,0.55)" : "var(--muted-foreground)" }}
                >
                  {p.code}
                </div>

                <div className="mt-4 flex items-baseline gap-1.5">
                  <span
                    className="text-[36px] md:text-[42px] font-semibold tracking-[-0.04em] leading-none"
                    style={{ color: hi ? "#fff" : "var(--ink)" }}
                  >
                    {p.price}
                  </span>
                  <span
                    className="text-[14px]"
                    style={{ color: hi ? "rgba(255,255,255,0.6)" : "var(--muted-foreground)" }}
                  >
                    {p.period}
                  </span>
                </div>

                <p
                  className="mt-3 text-[14px] leading-[1.6]"
                  style={{ color: hi ? "rgba(255,255,255,0.7)" : "var(--muted-foreground)" }}
                >
                  {p.desc}
                </p>

                <ul className="mt-6 space-y-2.5 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[14px] leading-[1.5]">
                      <Check
                        size={15}
                        className="mt-0.5 shrink-0"
                        style={{ color: hi ? "#7FA9F0" : "var(--primary)" }}
                      />
                      <span style={{ color: hi ? "rgba(255,255,255,0.88)" : "var(--ink-3)" }}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7">
                  <CtaButton
                    path="/medicos/teste-gratis"
                    plan={p.appPlan}
                    className={`${hi ? "btn-primary" : "btn-outline"} min-h-[52px] text-[15px]`}
                    style={{ width: "100%" }}
                  >
                    {CTA_LABEL}
                  </CtaButton>
                  <p
                    className="mt-3 text-[12px] leading-[1.5]"
                    style={{ color: hi ? "rgba(255,255,255,0.55)" : "var(--muted-foreground)" }}
                  >
                    {CTA_MICRO}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className="mt-6 md:mt-8 rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row gap-4"
          style={{ border: "1px solid var(--primary-mid)", background: "var(--primary-light)" }}
        >
          <ShieldCheck size={22} className="text-primary shrink-0" />
          <p className="text-[14.5px] md:text-[15px] leading-[1.7] text-ink-3">
            <span className="font-semibold text-ink">Garantia de 30 dias.</span>{" "}
            Você testa 7 dias sem nenhuma cobrança. Se decidir continuar e, na
            primeira cobrança, achar que não valeu — devolvemos 100% do valor.
            Sem formulário e sem pergunta. Basta responder o e-mail da cobrança.
          </p>
        </div>
      </div>
    </section>
  );
}
