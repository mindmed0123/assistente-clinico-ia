/** URL do vídeo de demonstração. Enquanto for null, a seção não é renderizada. */
const VIDEO_URL: string | null = null;

export function VideoDemoMedicos() {
  if (!VIDEO_URL) return null;

  return (
    <section className="py-[48px] md:py-[110px] bg-white">
      <div className="container-inner">
        <div className="max-w-[760px]">
          <div className="eyebrow">Demonstração</div>
          <h2 className="h2 mt-4 text-ink">Veja acontecendo, sem corte.</h2>
        </div>

        <div className="mt-8 md:mt-12 max-w-[900px]">
          <video
            className="rounded-2xl w-full aspect-video"
            src={VIDEO_URL}
            controls
            playsInline
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
