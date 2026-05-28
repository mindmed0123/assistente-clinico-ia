import { Volume2, Lock, Building2, CheckCircle2, ShieldCheck, ClipboardCheck } from "lucide-react";

const items = [
  {
    icon: <Volume2 size={26} />,
    title: "Áudios descartados automaticamente",
    desc: "Nenhum arquivo de áudio das suas consultas fica armazenado. A transcrição ocorre em tempo real e o áudio é eliminado imediatamente.",
  },
  {
    icon: <Lock size={26} />,
    title: "Dados anonimizados e criptografados",
    desc: "Todas as informações clínicas são anonimizadas e criptografadas com AES-256. Em conformidade total com a LGPD e as resoluções do CFM.",
  },
  {
    icon: <Building2 size={26} />,
    title: "Dados exclusivamente na MindMed",
    desc: "Nenhum dado clínico transita por aplicações de terceiros. O processamento ocorre em infraestrutura própria, controlada e auditada.",
  },
  {
    icon: <CheckCircle2 size={26} />,
    title: "Sem autorização do paciente necessária",
    desc: "O uso da MindMed não requer consentimento formal adicional do paciente, enquadrado como ferramenta de apoio clínico ao médico.",
  },
  {
    icon: <ShieldCheck size={26} />,
    title: "Infraestrutura de nível hospitalar",
    desc: "Servidores com uptime 99,9%, backups automatizados e logs de auditoria completos para cada ação.",
  },
  {
    icon: <ClipboardCheck size={26} />,
    title: "Conformidade CFM & CRM",
    desc: "Desenvolvida em conformidade com as resoluções do Conselho Federal de Medicina, incluindo normas de telemedicina.",
  },
];

export function Security() {
  return (
    <section
      id="seguranca"
      className="py-[100px]"
      style={{ background: "var(--surface)" }}
    >
      <div className="container-inner">
        <div className="text-center max-w-[720px] mx-auto mb-14">
          <span className="section-label">Segurança</span>
          <h2 className="h2 mt-4">Proteção em padrão clínico. Zero concessões.</h2>
          <p className="mt-4 text-[17px] text-muted-foreground leading-[1.65]">
            Dados de pacientes exigem o mais alto nível de proteção. A MindMed
            foi construída com segurança no núcleo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((i) => (
            <div
              key={i.title}
              className="bg-white rounded-[20px] p-8 border border-border transition-all hover:border-[color:var(--primary-mid)]"
              style={{ transition: "all .25s ease" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow = "var(--shadow-card)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow = "none")
              }
            >
              <div className="icon-box" style={{ color: "var(--primary)" }}>
                {i.icon}
              </div>
              <h3 className="mt-5 text-[18px] font-bold leading-snug">
                {i.title}
              </h3>
              <p className="mt-3 text-[14px] text-muted-foreground leading-[1.65]">
                {i.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-10 border-t border-border text-center">
          <div className="text-[13px] font-bold uppercase tracking-[1px] text-muted-foreground mb-5">
            Certificações e compliance
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "🛡️ LGPD Compliant",
              "🏥 CFM Res. 2.314/2022",
              "🔒 ISO 27001",
              "✅ HIPAA Ready",
            ].map((t) => (
              <span
                key={t}
                className="px-4 py-2 rounded-full text-[13px] font-semibold bg-white"
                style={{ border: "1.5px solid #CBD5E1" }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
