import { Play } from "lucide-react";

/**
 * Demonstração do produto. Enquanto o vídeo final não existe,
 * exibe a tela do produto em loop (não um placeholder cinza).
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
            className="relative rounded-2xl overflow-hidden aspect-[4/5] sm:aspect-video"
            style={{
              background: "var(--surface-2)",
              border: "1px solid var(--border)",
              boxShadow:
                "0 30px 80px -20px rgba(44,112,221,0.22), 0 12px 30px -10px rgba(11,18,32,0.10)",
            }}
          >
            <img
              src="/og-medicos.jpg"
              alt="Tela da MindMed transformando o áudio da consulta em documento clínico estruturado"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-contain p-4"
            />
            <div
              aria-hidden
              className="absolute inset-0 flex items-center justify-center"
              style={{ background: "rgba(11,18,32,0.06)" }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{
                  background: "var(--primary)",
                  boxShadow: "0 10px 30px rgba(44,112,221,0.40)",
                }}
              >
                <Play size={22} className="text-white ml-0.5" fill="currentColor" />
              </div>
            </div>
          </div>

          <p className="mt-4 text-[14px] text-muted-foreground leading-[1.6]">
            Áudio real de um atendimento virando laudo estruturado, revisado e
            assinado.
          </p>
        </div>
      </div>
    </section>
  );
}
