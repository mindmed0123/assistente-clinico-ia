/**
 * Demonstração do produto. O vídeo final ainda não existe:
 * o espaço fica reservado, limpo e vazio, no formato exato do player.
 */
export function VideoDemoMedicos() {
  return (
    <section className="py-[48px] md:py-[110px]" style={{ background: "var(--surface)" }}>
      <div className="container-inner">
        <div className="max-w-[760px]">
          <div className="eyebrow">Demonstração</div>
          <h2 className="h2 mt-4 text-ink">Veja acontecendo, sem corte.</h2>
        </div>

        <div className="mt-8 md:mt-12 max-w-[900px]">
          <div
            aria-hidden
            className="rounded-2xl aspect-video"
            style={{
              background: "var(--surface-2)",
              border: "1px solid var(--border)",
            }}
          />

          <p className="mt-4 text-[14px] text-muted-foreground leading-[1.6]">
            Áudio real de um atendimento virando laudo estruturado, revisado e
            assinado.
          </p>
        </div>
      </div>
    </section>
  );
}

