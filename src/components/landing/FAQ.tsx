import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Preciso trocar o sistema que já uso?",
    a: "Não. A MindMed gera o documento pronto para você colar, exportar ou baixar em PDF. Ela convive com o que você já tem.",
  },
  {
    q: "Funciona na minha especialidade?",
    a: "Sim. Os templates são configuráveis e a MindMed se ajusta ao formato que você já usa. Se o seu modelo de laudo for muito específico, a gente monta ele com você no primeiro dia de teste.",
  },
  {
    q: "E se a IA escrever alguma coisa errada?",
    a: "Ela não assina nada. Todo documento passa pela sua revisão antes de sair, e você edita qualquer linha. A MindMed estrutura o que foi dito — a responsabilidade clínica continua sendo sua, como determina a Resolução CFM 2.454/2026.",
  },
  {
    q: "A MindMed dá diagnóstico?",
    a: "Não, e isso é uma decisão de projeto. A MindMed faz documentação clínica. Diagnóstico, prognóstico e conduta são seus.",
  },
  {
    q: "Meus dados e os dos meus pacientes ficam seguros?",
    a: "Criptografia AES-256 em repouso e TLS 1.3 em trânsito, isolamento por usuário, hospedagem no Brasil e trilha de auditoria imutável de cada acesso. Arquitetura desenhada segundo a LGPD.",
  },
  {
    q: "Por que vocês pedem cartão se o teste é grátis?",
    a: "Para o acesso não ser interrompido no oitavo dia, no meio de um atendimento. Nada é cobrado durante os 7 dias, e você cancela em dois cliques dentro da plataforma. Se cancelar antes do fim do teste, não há cobrança nenhuma.",
  },
  {
    q: "Como funciona a garantia de 30 dias?",
    a: "Se você continuar depois do teste e, na primeira cobrança, achar que não valeu, responda o e-mail da cobrança. Devolvemos 100% do valor. Sem formulário e sem pergunta.",
  },
  {
    q: "Como faço para cancelar?",
    a: "Dois cliques, dentro da plataforma, a qualquer momento. Não tem ligação de retenção nem fidelidade.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-[48px] md:py-[100px] bg-white">
      <div className="container-inner max-w-[760px] mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <span className="eyebrow">Perguntas frequentes</span>
          <h2 className="h2 mt-4">O que os médicos mais perguntam</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="bg-white rounded-[14px] overflow-hidden"
                style={{ border: "1px solid var(--border)" }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left flex items-center justify-between gap-4 py-5 px-6 md:px-7"
                >
                  <span className="text-[15px] md:text-[16px] font-semibold">{f.q}</span>
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
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 md:px-7 pb-5 text-[15px] text-muted-foreground leading-[1.65]">
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
