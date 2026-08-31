import { Check } from "lucide-react";
import { CtaButton } from "@/components/CtaButton";

/** Total de vagas da turma fundadora. */
const TOTAL_VAGAS = 100;
/** Vagas já ocupadas. Atualizar à mão a cada venda enquanto
 *  a integração com a tabela do app não existir. */
const VAGAS_OCUPADAS = 0;

const beneficios = [
  "Todos os recursos do plano Pro, sem limite",
  "Preço travado enquanto a assinatura durar",
  "Kit de Adequação CFM 2.454/2026 incluído (R$ 497)",
  "Garantia de 30 dias",
];

export function FundadoresMedicos() {
  const restantes = Math.max(0, TOTAL_VAGAS - VAGAS_OCUPADAS);
  if (restantes === 0) return null;

  const textoVagas =
    VAGAS_OCUPADAS === 0
      ? `${TOTAL_VAGAS} vagas abertas`
      : `Restam ${restantes} de ${TOTAL_VAGAS} vagas`;

  return (
    <section className="py-[56px] md:py-[120px] bg-white">
      <div className="container-inner">
        <div className="max-w-[760px]">
          <div className="eyebrow">{TOTAL_VAGAS} vagas · turma fundadora</div>
          <h2 className="h2 mt-4 text-ink">
            Seja um dos <em>100 primeiros.</em>
          </h2>
          <p className="lede mt-5 max-w-[680px]">
            Estamos abrindo cem vagas de fundador da MindMed. Quem entrar agora
            paga R$ 1.990 pelo ano — em vez de R$ 2.990 — e mantém esse preço
            enquanto a assinatura durar, mesmo depois de a tabela voltar ao
            normal.
          </p>
        </div>

        <div className="mt-8 md:mt-12 max-w-[560px] mx-auto">
          <div
            className="relative rounded-2xl p-5 pt-7 md:p-8"
            style={{
              background: "var(--ink)",
              border: "1px solid var(--ink)",
              boxShadow: "0 30px 70px -25px rgba(11,18,32,0.45)",
            }}
          >
            <span
              className="absolute -top-3 left-6 font-mono text-[10.5px] tracking-[0.12em] uppercase px-3 py-1.5 rounded-md"
              style={{
                background: "var(--primary)",
                color: "#fff",
                border: "1px solid var(--primary)",
              }}
            >
              Recomendado
            </span>

            <div
              className="font-mono text-[11px] tracking-[0.14em] uppercase"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              MindMed Pro Anual · Fundador
            </div>

            <div className="mt-4 flex items-baseline gap-1.5">
              <span
                className="text-[36px] md:text-[42px] font-semibold tracking-[-0.04em] leading-none"
                style={{ color: "#fff" }}
              >
                R$ 1.990
              </span>
              <span className="text-[14px]" style={{ color: "rgba(255,255,255,0.6)" }}>
                /ano
              </span>
            </div>
            <p className="mt-2 text-[13.5px]" style={{ color: "rgba(255,255,255,0.6)" }}>
              equivale a R$ 166/mês
            </p>

            <ul className="mt-6 space-y-2.5">
              {beneficios.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-[14px] leading-[1.5]">
                  <Check size={15} className="mt-0.5 shrink-0" style={{ color: "#7FA9F0" }} />
                  <span style={{ color: "rgba(255,255,255,0.88)" }}>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7">
              <CtaButton
                path="/medicos/teste-gratis"
                plan="mindmed_fundador"
                className="btn-primary min-h-[52px] text-[15px]"
                style={{ width: "100%" }}
              >
                Garantir minha vaga de fundador
              </CtaButton>
              <p
                className="mt-3 text-[12px] leading-[1.5]"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                {textoVagas}
              </p>
            </div>
          </div>

          <p className="mt-5 text-[13px] leading-[1.6] text-muted-foreground text-center">
            Quando as cem vagas acabarem, o plano anual volta para R$ 2.990.
          </p>
        </div>
      </div>
    </section>
  );
}
