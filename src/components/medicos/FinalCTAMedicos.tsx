import { CtaMedicos } from "./CtaMedicos";

export function FinalCTAMedicos() {
  return (
    <section className="py-[64px] md:py-[130px]" style={{ background: "var(--ink)" }}>
      <div className="container-inner">
        <div className="max-w-[780px] mx-auto text-center">
          <h2
            className="text-white"
            style={{
              fontSize: "clamp(30px, 5vw, 56px)",
              fontWeight: 500,
              letterSpacing: "-0.032em",
              lineHeight: 1.07,
            }}
          >
            O prontuário de hoje pode estar{" "}
            <span
              style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400 }}
            >
              pronto hoje.
            </span>
          </h2>
          <p className="mt-6 text-[16px] md:text-[17px] leading-[1.6]" style={{ color: "rgba(255,255,255,0.65)" }}>
            7 dias de teste. Nada é cobrado agora. Garantia de 30 dias se você
            continuar.
          </p>

          <div className="mt-9 flex justify-center">
            <CtaMedicos align="center" microTone="dark" />
          </div>
        </div>
      </div>
    </section>
  );
}
