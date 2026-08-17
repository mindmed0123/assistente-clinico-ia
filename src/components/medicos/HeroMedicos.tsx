import { ShieldCheck } from "lucide-react";
import { CtaMedicos } from "./CtaMedicos";

export function HeroMedicos() {
  return (
    <section className="relative overflow-hidden pt-[56px] pb-[48px] md:pt-[110px] md:pb-[100px]">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 20%, #000 30%, transparent 80%)",
        }}
      />
      <div className="container-inner relative">
        <div className="max-w-[880px]">
          <div className="eyebrow fade-up">Documentação clínica · MindMed</div>

          <h1 className="display mt-6 text-ink fade-up" style={{ animationDelay: ".05s" }}>
            Você termina a consulta. <em>O prontuário já está escrito.</em>
          </h1>

          <p className="lede mt-6 max-w-[660px] fade-up" style={{ animationDelay: ".12s" }}>
            A MindMed transforma o áudio do seu atendimento em anamnese, evolução
            e laudo estruturados. Você revisa, ajusta e assina — em minutos, não
            à noite.
          </p>

          <div className="mt-9 fade-up" style={{ animationDelay: ".18s" }}>
            <CtaMedicos />
          </div>

          <div
            className="mt-7 inline-flex items-center gap-2 rounded-lg px-3.5 py-2 fade-up"
            style={{
              animationDelay: ".22s",
              border: "1px solid var(--border)",
              background: "var(--surface)",
            }}
          >
            <ShieldCheck size={15} className="text-primary" />
            <span className="text-[12.5px] text-ink-3">
              Construída de acordo com a Resolução CFM 2.454/2026
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
