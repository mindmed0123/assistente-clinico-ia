import { Star } from "lucide-react";

const items = [
  {
    quote:
      "O Avicena virou parte do meu raciocínio clínico. Antes eu passava minutos pesquisando interações medicamentosas. Hoje recebo a resposta em segundos, com a referência bibliográfica já incluída.",
    name: "Dr. Rafael M.",
    role: "Clínico Geral · São Paulo",
    avatar: "https://i.pravatar.cc/96?img=12",
  },
  {
    quote:
      "A telemedicina integrada foi o que me fez escolher a MindMed. Não preciso mais de 3 plataformas diferentes. Consulto, documento e assino tudo no mesmo lugar.",
    name: "Dra. Camila S.",
    role: "Cirurgiã Vascular · Rio de Janeiro",
    avatar: "https://i.pravatar.cc/96?img=47",
  },
  {
    quote:
      "Reduzi 40% do tempo que eu passava documentando. Meus templates são completamente personalizados para cirurgia vascular. A MindMed me devolveu tempo para cuidar de mais pacientes.",
    name: "Dr. André P.",
    role: "Angiologista · Porto Alegre",
    avatar: "https://i.pravatar.cc/96?img=33",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-white py-[64px] md:py-[100px]">
      <div className="container-inner">
        <div className="text-center mb-14">
          <span className="section-label">Depoimentos</span>
          <h2 className="h2 mt-4">
            Médicos que transformaram sua rotina com a MindMed.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {items.map((t) => (
            <div
              key={t.name}
              className="rounded-[20px] p-8"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <div className="flex gap-0.5 mb-4" style={{ color: "#FBBF24" }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-[15px] leading-[1.65] text-foreground/85">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 mt-6">
                <img
                  src={t.avatar}
                  alt={t.name}
                  loading="lazy"
                  className="w-11 h-11 rounded-full object-cover"
                  style={{ background: "var(--primary-light)" }}
                />
                <div>
                  <div className="font-bold text-[14px]">{t.name}</div>
                  <div className="text-[13px] text-muted-foreground">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
