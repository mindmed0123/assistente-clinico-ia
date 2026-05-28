import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
  {
    q: "A MindMed substitui meu prontuário eletrônico?",
    a: "Não. A MindMed é uma camada de inteligência clínica que funciona junto ao seu prontuário atual. Ela documenta, apoia o raciocínio clínico e oferece telemedicina — exportando tudo para o sistema que você já usa, via PDF, e-mail, API ou copiar e colar.",
  },
  {
    q: "O que é o Avicena e como ele é diferente de outros chatbots médicos?",
    a: "Avicena é um chat clínico em tempo real onde o médico tira dúvidas durante o atendimento — interações medicamentosas, diagnósticos diferenciais e protocolos. Diferente de chatbots genéricos, entende o contexto do caso e cita as fontes clínicas (UpToDate, PubMed) em cada resposta.",
  },
  {
    q: "A plataforma está em conformidade com o CFM para telemedicina?",
    a: "Sim. A telemedicina da MindMed foi desenvolvida em conformidade com a Resolução CFM 2.314/2022, que regulamenta a prática de telemedicina no Brasil.",
  },
  {
    q: "Preciso pedir autorização ao paciente para usar a MindMed?",
    a: "Não é necessária autorização formal adicional. A MindMed funciona como ferramenta de apoio clínico ao médico. Os dados são anonimizados e os áudios descartados automaticamente.",
  },
  {
    q: "Posso criar meus próprios templates de laudos?",
    a: "Sim, com total liberdade. Você pode criar modelos do zero, editar templates pré-existentes por especialidade e salvar diferentes formatos para cada tipo de consulta.",
  },
  {
    q: "Como funciona o período de teste gratuito?",
    a: "Você tem 7 dias de acesso completo ao plano Profissional sem necessidade de cartão de crédito. Ao final, escolha seu plano ou cancele sem cobranças automáticas.",
  },

];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-[100px]" style={{ background: "var(--surface)" }}>
      <div className="container-inner max-w-[760px] mx-auto">
        <div className="text-center mb-12">
          <span className="section-label">Perguntas frequentes</span>
          <h2 className="h2 mt-4">O que os médicos mais perguntam</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="bg-white rounded-[14px] overflow-hidden"
                style={{ border: "1px solid var(--border)" }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left flex items-center justify-between gap-4 py-5 px-7"
                >
                  <span className="text-[16px] font-semibold">{f.q}</span>
                  <Plus
                    size={20}
                    className="shrink-0 transition-transform"
                    style={{
                      transform: isOpen ? "rotate(45deg)" : "none",
                      color: "var(--primary)",
                    }}
                  />
                </button>
                <div
                  className="grid transition-all duration-300"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="px-7 pb-5 text-[15px] text-muted-foreground leading-[1.65]">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
