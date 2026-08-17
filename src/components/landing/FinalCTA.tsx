import { CtaButton } from "@/components/CtaButton";

export function FinalCTA() {
  return (
    <section className="py-[64px] md:py-[140px]" style={{ background: "var(--ink)" }}>
      <div className="container-inner">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 md:gap-16 items-end">
          <div>
            <div
              className="eyebrow"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Conversa executiva
            </div>
            <h2
              className="mt-6 text-white"
              style={{
                fontSize: "clamp(36px, 5.4vw, 64px)",
                fontWeight: 500,
                letterSpacing: "-0.032em",
                lineHeight: 1.05,
              }}
            >
              Avalie a MindMed como{" "}
              <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400 }}>
                infraestrutura clínica
              </span>{" "}
              da sua instituição.
            </h2>
            <p
              className="mt-7 max-w-[560px] text-[17px] leading-[1.6]"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              Apresentação institucional, arquitetura técnica, modelo de
              governança e plano de adoção — em uma única conversa com a
              equipe executiva.
            </p>
          </div>

          <div className="flex flex-col gap-3 lg:items-end">
            <a
              href="mailto:mindmedcontato@gmail.com"
              className="btn-primary"
              style={{
                background: "#fff",
                color: "var(--ink)",
                borderColor: "#fff",
              }}
            >
              Solicitar apresentação institucional
            </a>
            <CtaButton path="/" className="btn-outline-dark">
              Acessar a plataforma
            </CtaButton>
            <div
              className="mt-6 font-mono text-[11px] tracking-[0.12em] uppercase"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              mindmedcontato@gmail.com
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
