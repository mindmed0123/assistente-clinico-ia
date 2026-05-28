import { Shield, Zap, Clock } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-[140px] pb-[100px] overflow-hidden"
      style={{
        background:
          "linear-gradient(155deg, #0A1628 0%, #142038 50%, #1a3060 100%)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(44,112,221,0.18), transparent 70%)",
        }}
      />
      <div className="relative container-inner text-center">
        <div
          className="pill fade-up inline-flex items-center gap-2 mb-7"
          style={{
            background: "rgba(44,112,221,0.15)",
            border: "1px solid rgba(44,112,221,0.35)",
            color: "#93C5FD",
          }}
        >
          <span
            className="pulse-dot inline-block w-1.5 h-1.5 rounded-full"
            style={{ background: "#10B981" }}
          />
          ✦ Avicena IA · Chat Clínico

        </div>

        <h1 className="h1 text-white fade-up max-w-[900px] mx-auto" style={{ animationDelay: ".05s" }}>
          Cuide do paciente. <br />
          A <span style={{ color: "#60A5FA" }}>MindMed</span> cuida do resto.
        </h1>

        <p
          className="mt-6 mx-auto max-w-[560px] text-[18px] leading-[1.6] fade-up"
          style={{ color: "rgba(255,255,255,0.65)", animationDelay: ".15s" }}
        >
          IA clínica com raciocínio médico real, telemedicina integrada e
          documentação automática — tudo em uma plataforma feita para médicos
          brasileiros.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-[14px] fade-up" style={{ animationDelay: ".25s" }}>
          <a href="https://acesso.mindmed.online" className="btn-primary">
            Começar teste gratuito →
          </a>
          <a href="#funcionalidades" className="btn-outline-dark">
            Ver como funciona
          </a>
        </div>

        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-6 text-[13px] fade-up"
          style={{ color: "rgba(255,255,255,0.50)", animationDelay: ".35s" }}
        >
          <span className="inline-flex items-center gap-2">
            <Shield size={15} /> LGPD Compliance
          </span>
          <span className="w-px h-3.5 bg-white/15" />
          <span className="inline-flex items-center gap-2">
            <Zap size={15} /> Sem cartão de crédito
          </span>
          <span className="w-px h-3.5 bg-white/15" />
          <span className="inline-flex items-center gap-2">
            <Clock size={15} /> 7 dias grátis
          </span>

        </div>
      </div>
    </section>
  );
}
