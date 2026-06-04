const products = [
  {
    code: "MM · Clinical",
    name: "Documentação Clínica",
    desc: "Geração estruturada de anamneses, evoluções, laudos e atestados, com modelos institucionais e exportação para qualquer prontuário.",
    tag: "Disponível",
  },
  {
    code: "MM · Care",
    name: "Telemedicina Integrada",
    desc: "Atendimento remoto seguro, em conformidade com a Resolução CFM 2.314/2022, integrado à documentação clínica.",
    tag: "Disponível",
  },
  {
    code: "MM · Avicena",
    name: "Apoio à Decisão Clínica",
    desc: "Consulta contextual baseada em evidências, com citação obrigatória de fontes e rastreabilidade integral das respostas.",
    tag: "Disponível",
  },
  {
    code: "MM · Insights",
    name: "Analytics Assistencial",
    desc: "Indicadores operacionais e clínicos consolidados para diretorias médicas e gestores assistenciais.",
    tag: "2026",
  },
  {
    code: "MM · Integrations",
    name: "Conectividade Institucional",
    desc: "APIs e conectores para sistemas HIS, prontuários eletrônicos, laboratórios e operadoras.",
    tag: "Em parceria",
  },
  {
    code: "MM · Governance",
    name: "Governança de Dados Clínicos",
    desc: "Painel de conformidade, gestão de consentimento, trilhas auditáveis e relatórios regulatórios.",
    tag: "Institucional",
  },
];

export function Ecosystem() {
  return (
    <section id="ecossistema" className="bg-white py-[72px] md:py-[120px]">
      <div className="container-inner">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 md:gap-16">
          <div>
            <div className="eyebrow">Ecossistema</div>
            <h2 className="h2 mt-5 text-ink">
              Um portfólio modular para a operação assistencial.
            </h2>
          </div>
          <p className="lede max-w-[560px] lg:pt-12">
            Produtos independentes que se integram nativamente. Instituições
            adotam o que faz sentido para sua maturidade digital e escalam ao
            longo do tempo, sem fricção contratual.
          </p>
        </div>

        <div className="mt-10 md:mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-xl overflow-hidden">
          {products.map((p) => (
            <div
              key={p.code}
              className="bg-white p-6 md:p-8 flex flex-col min-h-[230px]"
            >
              <div className="flex items-center justify-between">
                <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-foreground">
                  {p.code}
                </div>
                <span
                  className="font-mono text-[10px] tracking-[0.12em] uppercase px-2 py-0.5 rounded-full border border-border text-ink-3"
                >
                  {p.tag}
                </span>
              </div>
              <h3 className="h3 mt-5 text-ink">{p.name}</h3>
              <p className="mt-3 text-[14.5px] leading-[1.6] text-muted-foreground flex-1">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
