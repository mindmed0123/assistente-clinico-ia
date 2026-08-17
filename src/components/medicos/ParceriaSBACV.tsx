export function ParceriaSBACV() {
  return (
    <section className="py-[56px] md:py-[110px]" style={{ background: "var(--surface)" }}>
      <div className="container-inner">
        <div className="grid lg:grid-cols-[0.9fr_1.3fr] gap-10 md:gap-16 items-center">
          <div>
            <div className="eyebrow-muted">Parceria oficial · desde maio de 2026</div>
            <div
              className="mt-6 rounded-2xl bg-white flex flex-col items-center justify-center px-8 py-14"
              style={{ border: "1px solid var(--border)" }}
            >
              <span
                className="text-ink"
                style={{
                  fontSize: "clamp(40px, 7vw, 64px)",
                  fontWeight: 600,
                  letterSpacing: "0.02em",
                  lineHeight: 1,
                }}
              >
                SBACV
              </span>
              <span className="mt-4 text-center text-[12px] leading-[1.5] text-muted-foreground max-w-[260px]">
                Sociedade Brasileira de Angiologia e de Cirurgia Vascular
              </span>
            </div>
          </div>

          <div>
            <h2 className="h2 text-ink">
              A MindMed é <em>parceira oficial</em> da SBACV.
            </h2>
            <p className="lede mt-5">
              A Sociedade Brasileira de Angiologia e de Cirurgia Vascular é a
              entidade nacional da especialidade: publica as diretrizes, edita a
              Revista SBACV e o Jornal Vascular, mantém regionais em todo o país
              e realiza o Congresso Brasileiro da área.
            </p>
            <p className="lede mt-4">
              Em maio de 2026 a SBACV firmou parceria institucional com a
              MindMed. Os médicos associados têm acesso à plataforma em condição
              exclusiva, negociada diretamente com a sociedade.
            </p>

            <div
              className="mt-7 rounded-xl p-5 md:p-6"
              style={{ border: "1px solid var(--primary-mid)", background: "var(--primary-light)" }}
            >
              <p className="text-[14.5px] leading-[1.65] text-ink-3">
                <span className="font-semibold text-ink">
                  Você é associado à SBACV?
                </span>{" "}
                Há uma condição exclusiva negociada com a sociedade. O código de
                acesso é enviado pelos canais oficiais da SBACV aos associados —
                é só aplicá-lo no checkout.
              </p>
            </div>

            <p className="mt-5 text-[13px] leading-[1.6] text-muted-foreground">
              Trabalhamos com sociedades médicas para levar documentação clínica
              auditável a cada especialidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
