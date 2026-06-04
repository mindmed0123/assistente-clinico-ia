const points = [
  {
    n: "01",
    title: "Fragmentação operacional",
    body: "Prontuários, sistemas de telemedicina, ferramentas de documentação e bases de evidência operam em silos — sem governança unificada.",
  },
  {
    n: "02",
    title: "Sobrecarga documental",
    body: "Médicos dedicam até 40% do tempo assistencial à documentação manual, com impacto direto sobre produtividade e qualidade.",
  },
  {
    n: "03",
    title: "Ausência de inteligência contextual",
    body: "Decisões clínicas seguem dependentes de consulta manual à literatura. Não há camada contextual que opere dentro do fluxo.",
  },
  {
    n: "04",
    title: "Governança de dados limitada",
    body: "Instituições de saúde carecem de infraestrutura auditável para uso responsável de IA em contexto clínico, sob LGPD e normas do CFM.",
  },
];

export function Problem() {
  return (
    <section className="bg-white py-[120px] border-t border-border">
      <div className="container-inner">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16">
          <div>
            <div className="eyebrow">O contexto</div>
            <h2 className="h2 mt-5 text-ink">
              A documentação médica é o gargalo silencioso do sistema de saúde.
            </h2>
          </div>
          <div className="lede max-w-[560px] lg:pt-12">
            A operação assistencial moderna não falha por escassez de
            tecnologia, mas por ausência de uma infraestrutura comum — capaz
            de unificar dados, decisões e responsabilidade clínica.
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-px bg-border rounded-xl overflow-hidden border border-border">
          {points.map((p) => (
            <div key={p.n} className="bg-white p-9">
              <div className="font-mono text-[12px] text-muted-foreground tracking-widest">
                {p.n}
              </div>
              <h3 className="h3 mt-3 text-ink">{p.title}</h3>
              <p className="mt-3 text-[15px] leading-[1.65] text-muted-foreground">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
