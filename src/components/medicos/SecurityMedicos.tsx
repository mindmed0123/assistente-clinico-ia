const cards = [
  {
    code: "01",
    title: "A decisão continua sendo sua",
    body: "A MindMed estrutura o que foi dito na consulta. Ela não diagnostica, não sugere conduta e não assina nada. Documentação clínica — não decisão clínica.",
  },
  {
    code: "02",
    title: "Você revisa antes de assinar",
    body: "Nenhum documento é finalizado sem a sua aprovação explícita. Você edita qualquer linha, a qualquer momento.",
  },
  {
    code: "03",
    title: "O uso fica registrado",
    body: "Trilha de auditoria imutável de cada geração e cada alteração, com data, hora e autor.",
  },
  {
    code: "04",
    title: "LGPD desde a arquitetura",
    body: "Criptografia AES-256 e TLS 1.3, isolamento por usuário, dados hospedados no Brasil.",
  },
];

export function SecurityMedicos() {
  return (
    <section className="py-[56px] md:py-[130px] bg-white">
      <div className="container-inner">
        <div className="max-w-[900px]">
          <div className="eyebrow">Conformidade · CFM 2.454/2026</div>
          <h2
            className="mt-6 text-ink"
            style={{
              fontSize: "clamp(30px, 5vw, 58px)",
              fontWeight: 500,
              letterSpacing: "-0.032em",
              lineHeight: 1.06,
            }}
          >
            A resolução do CFM sobre IA já está em vigor.{" "}
            <span
              style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400, color: "var(--primary)" }}
            >
              A MindMed já nasceu assim.
            </span>
          </h2>
          <p className="lede mt-6 max-w-[720px]">
            A Resolução CFM 2.454/2026 estabelece como a inteligência artificial
            pode ser usada na prática médica. Ela trata de responsabilidade,
            registro e transparência — e a MindMed foi construída em torno
            desses três pontos, não adaptada a eles depois.
          </p>
        </div>

        <div className="mt-9 md:mt-14 grid sm:grid-cols-2 gap-4 md:gap-5">
          {cards.map((c) => (
            <div
              key={c.code}
              className="rounded-2xl p-6 md:p-8"
              style={{ border: "1px solid var(--border)", background: "var(--surface)" }}
            >
              <div className="font-mono text-[11px] tracking-[0.14em] text-muted-foreground">
                {c.code}
              </div>
              <h3 className="h3 mt-3 text-ink">{c.title}</h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.65] text-muted-foreground">
                {c.body}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-[15px] text-ink-3 leading-[1.65] max-w-[720px]">
          Se um dia você precisar demonstrar como a IA foi usada em um
          atendimento, o registro está lá.
        </p>
      </div>
    </section>
  );
}
