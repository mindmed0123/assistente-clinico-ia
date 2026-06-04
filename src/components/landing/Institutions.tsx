const partners = [
  { name: "SBACV", desc: "Sociedade Brasileira de Angiologia e Cirurgia Vascular", tag: "Parceria oficial" },
  { name: "Rede hospitalar nacional", desc: "Operação em avaliação institucional", tag: "Em homologação" },
  { name: "Operadoras de saúde", desc: "Discussões em andamento sobre integração assistencial", tag: "Em diálogo" },
  { name: "Sociedades médicas", desc: "Programa aberto a especialidades médicas brasileiras", tag: "Em expansão" },
];

const quote = {
  text: "A MindMed se posiciona como uma infraestrutura clínica nacional. Trata governança de dados e responsabilidade médica como pilares, não como acessórios.",
  author: "Diretoria Médica · Parceiro institucional",
};

export function Institutions() {
  return (
    <section
      id="instituicoes"
      className="py-[72px] md:py-[120px]"
      style={{ background: "var(--surface)" }}
    >
      <div className="container-inner">
        <div className="max-w-[760px]">
          <div className="eyebrow">Instituições</div>
          <h2 className="h2 mt-5 text-ink">
            Construída com — e para — a comunidade institucional brasileira.
          </h2>
        </div>

        <div className="mt-14 grid lg:grid-cols-[1.2fr_1fr] gap-10 items-stretch">
          <div className="bg-white border border-border rounded-2xl overflow-hidden">
            {partners.map((p, i) => (
              <div
                key={p.name}
                className="grid grid-cols-[1fr_auto] gap-6 px-8 py-7"
                style={{
                  borderTop: i === 0 ? "none" : "1px solid var(--border)",
                }}
              >
                <div>
                  <div className="text-[15.5px] font-semibold text-ink">
                    {p.name}
                  </div>
                  <div className="mt-1 text-[14px] text-muted-foreground leading-snug">
                    {p.desc}
                  </div>
                </div>
                <div className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-ink-3 self-center px-3 py-1.5 rounded-md border border-border">
                  {p.tag}
                </div>
              </div>
            ))}
          </div>

          <figure
            className="rounded-2xl p-10 flex flex-col justify-between"
            style={{ background: "var(--ink)" }}
          >
            <blockquote
              className="text-white text-[22px] leading-[1.4] tracking-[-0.015em]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              “{quote.text}”
            </blockquote>
            <figcaption className="mt-10 font-mono text-[11px] tracking-[0.14em] uppercase text-white/55">
              {quote.author}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
