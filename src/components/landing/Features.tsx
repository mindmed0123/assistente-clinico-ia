import { FileText, ClipboardList, Pill, FileCheck2, LayoutTemplate, Video } from "lucide-react";

const items = [
  {
    icon: ClipboardList,
    title: "Anamnese e evolução",
    body: "Estruturadas a partir do que foi dito, no formato da sua especialidade.",
  },
  {
    icon: FileText,
    title: "Laudos",
    body: "Prontos para revisão, com a terminologia que você já usa.",
  },
  {
    icon: Pill,
    title: "Receituário",
    body: "Medicação, posologia e orientações, a partir do que você ditou.",
  },
  {
    icon: FileCheck2,
    title: "Atestados e encaminhamentos",
    body: "Em segundos, com os dados do paciente já preenchidos.",
  },
  {
    icon: LayoutTemplate,
    title: "Templates por especialidade",
    body: "Crie os seus. A MindMed aprende o seu formato.",
  },
  {
    icon: Video,
    title: "Telemedicina integrada",
    body: "Consulta por vídeo com a documentação sendo gerada durante o atendimento.",
  },
];

/** Seção "O que a MindMed escreve" — usada na /medicos. */
export function Features() {
  return (
    <section className="py-[56px] md:py-[120px]" style={{ background: "var(--surface)" }}>
      <div className="container-inner">
        <div className="max-w-[760px]">
          <div className="eyebrow">O que a MindMed escreve</div>
          <h2 className="h2 mt-4 text-ink">
            Tudo que você escreve <em>depois da consulta.</em>
          </h2>
        </div>

        <div className="mt-8 md:mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {items.map((it) => (
            <div key={it.title} className="data-card">
              <div
                className="w-9 h-9 rounded-md flex items-center justify-center"
                style={{ background: "rgba(44,112,221,0.08)", color: "var(--primary)" }}
              >
                <it.icon size={17} strokeWidth={1.75} />
              </div>
              <h3 className="h3 mt-4 text-ink">{it.title}</h3>
              <p className="mt-2 text-[14.5px] leading-[1.65] text-muted-foreground">
                {it.body}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-[14.5px] text-ink-3 leading-[1.65] max-w-[720px]">
          Tudo exportável em PDF assinado, com hash de verificação e trilha de
          auditoria.
        </p>
      </div>
    </section>
  );
}
