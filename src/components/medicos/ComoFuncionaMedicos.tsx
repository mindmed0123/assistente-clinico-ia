import { Mic, FileText, PenLine } from "lucide-react";
import { CtaMedicos } from "./CtaMedicos";

const steps = [
  {
    n: "01",
    icon: Mic,
    title: "Grave",
    body: "Ligue a gravação no início da consulta, ou envie o áudio depois. Funciona no celular e no computador.",
  },
  {
    n: "02",
    icon: FileText,
    title: "A MindMed escreve",
    body: "O áudio vira anamnese, evolução ou laudo estruturado — no seu template, com a sua linguagem.",
  },
  {
    n: "03",
    icon: PenLine,
    title: "Você revisa e assina",
    body: "Ajuste o que quiser. Exporte em PDF assinado, com hash de verificação. Nada sai sem o seu aval.",
  },
];

export function ComoFuncionaMedicos() {
  return (
    <section className="py-[56px] md:py-[120px] bg-white">
      <div className="container-inner">
        <div className="max-w-[760px]">
          <div className="eyebrow">Como funciona</div>
          <h2 className="h2 mt-4 text-ink">
            Três passos. <em>Nenhum deles é digitar.</em>
          </h2>
        </div>

        <div className="mt-8 md:mt-14 grid md:grid-cols-3 gap-4 md:gap-5">
          {steps.map((s) => (
            <div key={s.n} className="data-card">
              <div className="flex items-center justify-between">
                <div
                  className="w-9 h-9 rounded-md flex items-center justify-center"
                  style={{ background: "rgba(44,112,221,0.08)", color: "var(--primary)" }}
                >
                  <s.icon size={17} strokeWidth={1.75} />
                </div>
                <span className="font-mono text-[11px] tracking-[0.14em] text-muted-foreground">
                  {s.n}
                </span>
              </div>
              <h3 className="h3 mt-5 text-ink">{s.title}</h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.65] text-muted-foreground">
                {s.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 md:mt-14">
          <CtaMedicos />
        </div>
      </div>
    </section>
  );
}
