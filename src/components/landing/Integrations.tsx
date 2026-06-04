import { FileText, Code2, Mail, ClipboardCopy, Zap, Lock } from "lucide-react";

const exportOptions = [
  { name: "PDF", desc: "Exportação de laudos", icon: FileText, color: "#DC2626" },
  { name: "API", desc: "Integração programática", icon: Code2, color: "#2C70DD" },
  { name: "E-mail", desc: "Envio direto", icon: Mail, color: "#7C3AED" },
  { name: "Copiar/Colar", desc: "Compatível com qualquer sistema", icon: ClipboardCopy, color: "#10B981" },
  { name: "Tempo real", desc: "Documentação ao vivo", icon: Zap, color: "#F59E0B" },
  { name: "Segurança", desc: "Criptografia ponta a ponta", icon: Lock, color: "#0A1628" },
];

function ExportCard({
  name,
  desc,
  icon: Icon,
  color,
}: {
  name: string;
  desc: string;
  icon: typeof FileText;
  color: string;
}) {
  return (
    <div
      className="rounded-[14px] p-5 flex flex-col items-center justify-center text-center transition-all"
      style={{
        background: "var(--surface)",
        border: "1.5px solid var(--border)",
      }}
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center text-white mb-2"
        style={{ background: color }}
      >
        <Icon size={18} />
      </div>
      <div className="font-bold text-[14px]">{name}</div>
      <div className="text-[12px] text-muted-foreground mt-0.5">{desc}</div>
    </div>
  );
}

const partnerships = [
  {
    micro: "SBACV",
    name: "Sociedade Brasileira de Angiologia e de Cirurgia Vascular",
    desc: "A SBACV endossa a MindMed como ferramenta de apoio clínico para cirurgiões vasculares brasileiros.",
    badge: "● Parceria oficial",
    badgeColor: "#10B981",
    bg: "linear-gradient(135deg, #0A1628 0%, #142038 100%)",
    overlay: true,
  },
  {
    micro: "SEJA PARCEIRO",
    name: "Sua sociedade médica aqui",
    desc: "A MindMed está aberta a parcerias com sociedades e associações médicas de todas as especialidades.",
    badge: "● Fale conosco",
    badgeColor: "#93C5FD",
    bg: "#142038",
  },
];

export function Integrations() {
  return (
    <section id="integracoes" className="bg-white py-[64px] md:py-[100px]">
      <div className="container-inner">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <span className="section-label">Integrações</span>
            <h2 className="h2 mt-4">
              Funciona com o prontuário que você já usa.
            </h2>
            <p className="mt-4 text-[17px] text-muted-foreground leading-[1.65]">
              A MindMed não é um prontuário eletrônico. A documentação clínica
              sai pronta para ser usada no sistema que você já tem — via PDF,
              API, e-mail ou copiar e colar.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3.5">
            {exportOptions.map((s) => (
              <ExportCard key={s.name} {...s} />
            ))}
          </div>
        </div>

        <div className="mt-10 md:mt-16">
          <h3 className="h3 mb-7">Parcerias institucionais</h3>
          <div className="grid md:grid-cols-2 gap-5">
            {partnerships.map((p) => (
              <div
                key={p.name}
                className="relative overflow-hidden rounded-[20px] p-8 text-white"
                style={{ background: p.bg }}
              >
                {p.overlay && (
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(circle at top right, rgba(44,112,221,0.25), transparent 60%)",
                    }}
                  />
                )}
                <div className="relative">
                  <div
                    className="text-[11px] font-bold tracking-[2px]"
                    style={{ color: "rgba(255,255,255,0.40)" }}
                  >
                    {p.micro}
                  </div>
                  <div className="mt-3 text-[17px] font-bold leading-snug">
                    {p.name}
                  </div>
                  <p
                    className="mt-3 text-[14px] leading-[1.6]"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                  >
                    {p.desc}
                  </p>
                  <div
                    className="mt-5 inline-flex text-[12px] font-bold"
                    style={{ color: p.badgeColor }}
                  >
                    {p.badge}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
