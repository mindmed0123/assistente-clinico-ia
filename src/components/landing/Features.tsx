import { Check, Sparkles, MonitorPlay, FileText } from "lucide-react";

function AvicenaChat() {
  return (
    <div
      className="rounded-[20px] p-7"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="flex items-center gap-3 pb-5 border-b border-white/5">
        <div
          className="w-[42px] h-[42px] rounded-full flex items-center justify-center text-white"
          style={{
            background: "linear-gradient(135deg, #2C70DD, #60A5FA)",
          }}
        >
          <Sparkles size={18} />
        </div>
        <div>
          <div className="text-white text-[15px] font-bold">Avicena</div>
          <div className="text-[12px]" style={{ color: "rgba(255,255,255,0.40)" }}>
            Avicena IA · Chat Clínico

          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-4">
        <div className="flex justify-end">
          <div
            className="max-w-[85%] p-3.5 text-[14px] text-white/90"
            style={{
              background: "rgba(255,255,255,0.08)",
              borderRadius: "16px 4px 16px 16px",
            }}
          >
            Paciente com 58 anos, HAS, creatinina 2,1. Qual a melhor opção
            anti-hipertensiva?
          </div>
        </div>

        <div className="flex gap-2.5">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-white shrink-0"
            style={{ background: "linear-gradient(135deg, #2C70DD, #60A5FA)" }}
          >
            <Sparkles size={14} />
          </div>
          <div
            className="p-3.5 text-[14px] leading-[1.55]"
            style={{
              background: "rgba(44,112,221,0.15)",
              borderRadius: "4px 16px 16px 16px",
              color: "rgba(255,255,255,0.92)",
            }}
          >
            Para esse perfil, considere{" "}
            <span style={{ color: "#93C5FD", fontWeight: 700 }}>
              Anlodipino 5mg
            </span>{" "}
            como primeira escolha. Evitar IECAs nessa função renal (Kidney Int,
            2022). Monitorar K⁺.
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {["Baseado em evidências", "Contexto do paciente", "Tempo real"].map(
          (t) => (
            <span
              key={t}
              className="pill text-[11px]"
              style={{
                background: "rgba(44,112,221,0.20)",
                color: "#93C5FD",
              }}
            >
              {t}
            </span>
          ),
        )}
      </div>
    </div>
  );
}

export function Features() {
  return (
    <section id="funcionalidades" className="bg-white py-[100px]">
      <div className="container-inner">
        <div className="text-center mb-14">
          <span className="section-label">Funcionalidades</span>
          <h2 className="h2 mt-4">Tudo que você precisa, em um só lugar.</h2>
          <p className="mt-4 mx-auto max-w-[640px] text-[17px] text-muted-foreground leading-[1.6]">
            Do raciocínio clínico à telemedicina, passando pela documentação
            automática — a MindMed integra o que estava separado.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* AVICENA */}
          <div
            className="lg:col-span-2 rounded-[24px] p-8 lg:p-12"
            style={{
              background:
                "linear-gradient(135deg, #0A1628 0%, #142038 100%)",
              border: "1px solid rgba(44,112,221,0.30)",
            }}
          >
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <span
                  className="pill"
                  style={{
                    background: "rgba(44,112,221,0.20)",
                    color: "#93C5FD",
                  }}
                >
                  ✦ Avicena IA
                </span>
                <h3 className="mt-5 text-[28px] font-extrabold tracking-[-0.5px] text-white leading-tight">
                  Tire suas dúvidas clínicas em segundos.
                </h3>
                <p
                  className="mt-4 text-[15px] leading-[1.65]"
                  style={{ color: "rgba(255,255,255,0.60)" }}
                >
                  Um chat clínico em tempo real para o médico consultar durante
                  o atendimento — interações medicamentosas, diagnósticos
                  diferenciais e protocolos, com respostas baseadas em
                  evidências e fontes citadas.
                </p>
                <p
                  className="mt-3 italic text-[13px]"
                  style={{ color: "rgba(255,255,255,0.30)" }}
                >
                  Nomeado em homenagem a Ibn Sina (980–1037), o maior médico da
                  história e autor do Cânone da Medicina.
                </p>

                <ul className="mt-6 space-y-3">
                  {[
                    "Diagnósticos diferenciais com evidências",
                    "Interações medicamentosas instantâneas",
                    "Sinais de alerta e contraindicações",
                    "Protocolos clínicos atualizados (UpToDate, PubMed)",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[14px]"
                      style={{ color: "rgba(255,255,255,0.75)" }}
                    >
                      <Check
                        size={18}
                        className="shrink-0 mt-0.5"
                        style={{ color: "#10B981" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <AvicenaChat />
            </div>
          </div>

          {/* Telemedicina */}
          <div className="feature-card">
            <div className="icon-box">
              <MonitorPlay size={26} style={{ color: "var(--primary)" }} />
            </div>
            <h3 className="h3 mt-5">Telemedicina integrada</h3>
            <p className="mt-3 text-[15px] text-muted-foreground leading-[1.65]">
              Atenda seus pacientes de onde estiver com sala virtual segura,
              alta qualidade de vídeo e documentação automática ao final de cada
              consulta.
            </p>
            <ul className="mt-5 space-y-2.5">
              {[
                "Sala virtual criptografada",
                "Laudo automático pós-consulta",
                "Resolução CFM 2.314/2022",
              ].map((i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-[14px] text-foreground/80"
                >
                  <Check size={16} style={{ color: "#10B981" }} />
                  {i}
                </li>
              ))}
            </ul>
            <span
              className="pill mt-6"
              style={{
                background: "var(--primary-light)",
                color: "var(--primary)",
              }}
            >
              Exclusivo MindMed
            </span>
          </div>

          {/* Documentação */}
          <div className="feature-card">
            <div className="icon-box">
              <FileText size={26} style={{ color: "var(--primary)" }} />
            </div>
            <h3 className="h3 mt-5">Documentação automática</h3>
            <p className="mt-3 text-[15px] text-muted-foreground leading-[1.65]">
              A MindMed escuta a consulta, organiza as informações clínicas e
              gera anamneses, laudos e atestados completos em segundos — sem
              você precisar digitar uma linha.
            </p>
            <ul className="mt-5 space-y-2.5">
              {[
                "Templates por especialidade",
                "Criação de modelos personalizados",
                "Exportação para qualquer prontuário",
              ].map((i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-[14px] text-foreground/80"
                >
                  <Check size={16} style={{ color: "#10B981" }} />
                  {i}
                </li>
              ))}
            </ul>
            <span
              className="pill mt-6"
              style={{
                background: "var(--primary-light)",
                color: "var(--primary)",
              }}
            >
              Economize 12min por consulta
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
