import { BookOpen, Hospital, BarChart3 } from "lucide-react";

const badges = [
  {
    icon: <BookOpen size={20} />,
    title: "Fundamentos em UpToDate & PubMed",
    desc: "Avicena referencia as principais bases de dados clínicas do mundo",
  },
  {
    icon: <Hospital size={20} />,
    title: "Validado por especialistas",
    desc: "Protocolo revisado por médicos de diversas especialidades brasileiras",
  },
  {
    icon: <BarChart3 size={20} />,
    title: "Metodologia auditável",
    desc: "Cada resposta do Avicena cita a fonte clínica que a embasa",
  },
];

const metrics = [
  { label: "Precisão diagnóstica nos diferenciais", value: 94 },
  { label: "Completude da documentação clínica", value: 98 },
  { label: "Detecção de interações medicamentosas", value: 99 },
  { label: "Satisfação dos médicos usuários", value: 96 },
];

export function Science() {
  return (
    <section id="ciencia" className="bg-white py-[48px] md:py-[100px]">
      <div className="container-inner grid lg:grid-cols-[1fr_1.2fr] gap-10 md:gap-16 items-center">
        <div>
          <span className="section-label">Ciência & Precisão</span>
          <h2 className="h2 mt-4">
            Respaldado pela literatura médica internacional.
          </h2>
          <p className="mt-4 text-[17px] text-muted-foreground leading-[1.65]">
            A precisão da MindMed não é uma promessa de marketing. É validada
            por metodologia baseada em evidências e testada por especialistas
            clínicos.
          </p>

          <div className="mt-7 space-y-3">
            {badges.map((b) => (
              <div
                key={b.title}
                className="flex items-start gap-4 p-4 rounded-[14px]"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{
                    background: "var(--primary-light)",
                    color: "var(--primary)",
                  }}
                >
                  {b.icon}
                </div>
                <div>
                  <div className="font-bold text-[15px]">{b.title}</div>
                  <div className="text-[14px] text-muted-foreground mt-0.5">
                    {b.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="rounded-[20px] p-10"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
          }}
        >
          <div className="text-[14px] font-bold mb-6">
            Desempenho clínico da IA
          </div>

          <div className="space-y-5">
            {metrics.map((m, i) => (
              <div key={m.label}>
                <div className="flex items-center justify-between text-[14px] mb-2">
                  <span className="text-foreground/85">{m.label}</span>
                  <span
                    className="font-bold"
                    style={{ color: "var(--primary)" }}
                  >
                    {m.value}%
                  </span>
                </div>
                <div
                  className="h-2 rounded-full overflow-hidden"
                  style={{ background: "var(--border)" }}
                >
                  <div
                    className="h-full rounded-full fill-bar"
                    style={{
                      width: `${m.value}%`,
                      background: "var(--primary)",
                      animationDelay: `${i * 0.15}s`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div
            className="mt-7 p-4 rounded-[10px] text-[13px] leading-[1.55]"
            style={{
              background: "var(--primary-light)",
              color: "var(--primary-dark)",
            }}
          >
            ✦ A MindMed utiliza modelos de linguagem especializados em medicina,
            não modelos genéricos.
          </div>
        </div>
      </div>
    </section>
  );
}
