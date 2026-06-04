const pillars = [
  {
    code: "01",
    title: "Residência de dados no Brasil",
    body: "Toda a operação ocorre em infraestrutura nacional, sob jurisdição da LGPD, com replicação multi-região e plano de continuidade institucional.",
  },
  {
    code: "02",
    title: "Criptografia ponta a ponta",
    body: "AES-256 em repouso, TLS 1.3 em trânsito, gestão de chaves segregada e rotação periódica auditável.",
  },
  {
    code: "03",
    title: "Trilha de auditoria completa",
    body: "Registro imutável de cada acesso, transcrição, geração documental e consulta à camada de inteligência clínica.",
  },
  {
    code: "04",
    title: "Controle de acesso institucional",
    body: "Identidade federada, SSO corporativo, perfis por papel clínico e segregação rigorosa entre instituições contratantes.",
  },
  {
    code: "05",
    title: "Conformidade regulatória",
    body: "Aderência a LGPD, Resolução CFM 2.314/2022 e diretrizes ANS. Pronta para HIPAA e ISO 27001 em operações internacionais.",
  },
  {
    code: "06",
    title: "Descarte automático de mídia",
    body: "Áudios e mídias clínicas são descartados após o processamento. Nenhum arquivo bruto é retido fora da janela operacional.",
  },
];

const compliances = [
  "LGPD",
  "CFM 2.314/2022",
  "ISO 27001 (em adequação)",
  "HIPAA Ready",
  "ANS",
  "TLS 1.3 · AES-256",
];

export function Security() {
  return (
    <section
      id="governanca"
      className="py-[72px] md:py-[120px]"
      style={{ background: "var(--surface)" }}
    >
      <div className="container-inner">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 md:gap-16">
          <div>
            <div className="eyebrow">Segurança e governança</div>
            <h2 className="h2 mt-5 text-ink">
              Construída sob padrão institucional, desde o primeiro byte.
            </h2>
          </div>
          <p className="lede max-w-[560px] lg:pt-12">
            A governança de dados clínicos é tratada como requisito estrutural,
            não como camada complementar. Toda decisão de arquitetura é tomada
            com responsabilidade regulatória e auditabilidade no centro.
          </p>
        </div>

        <div className="mt-10 md:mt-16 bg-white border border-border rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <div
                key={p.code}
                className="p-9"
                style={{
                  borderBottom:
                    i < pillars.length - (pillars.length % 3 === 0 ? 3 : pillars.length % 3)
                      ? "1px solid var(--border)"
                      : "none",
                  borderRight:
                    (i + 1) % 3 !== 0 ? "1px solid var(--border)" : "none",
                }}
              >
                <div className="font-mono text-[11px] tracking-[0.14em] text-muted-foreground">
                  {p.code}
                </div>
                <h3 className="h3 mt-3 text-ink">{p.title}</h3>
                <p className="mt-3 text-[14.5px] leading-[1.65] text-muted-foreground">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-2.5">
          {compliances.map((c) => (
            <span
              key={c}
              className="font-mono text-[11px] tracking-[0.12em] uppercase px-3 py-1.5 rounded-md bg-white border border-border text-ink-3"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
