export function FinalCTA() {
  return (
    <section
      className="relative overflow-hidden py-[120px] text-center"
      style={{
        background: "linear-gradient(135deg, #0A1628 0%, #142038 100%)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(44,112,221,0.15), transparent 70%)",
        }}
      />
      <div className="relative container-inner">
        <h2
          className="h2 text-white"
          style={{ letterSpacing: "-1.5px" }}
        >
          Pronto para exercer <br /> medicina de outro nível?
        </h2>
        <p
          className="mt-5 mx-auto max-w-[560px] text-[18px]"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          Junte-se aos médicos que já deixaram a burocracia com a MindMed.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-[14px]">
          <a href="https://acesso.mindmed.online" className="btn-primary">
            Começar gratuitamente — 7 dias

          </a>
          <a href="mailto:mindmedcontato@gmail.com" className="btn-outline-dark">
            Falar com a equipe
          </a>
        </div>
      </div>
    </section>
  );
}
