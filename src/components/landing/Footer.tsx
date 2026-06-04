import mindmedLogo from "@/assets/mindmed-logo.png.asset.json";

const cols = [
  {
    title: "Plataforma",
    links: ["Arquitetura", "Ecossistema", "Governança", "Integrações"],
  },
  {
    title: "Soluções",
    links: ["Hospitais e redes", "Operadoras", "Clínicas", "Sociedades médicas"],
  },
  {
    title: "Institucional",
    links: ["Sobre", "Parcerias", "Imprensa", "Contato comercial"],
  },
  {
    title: "Conformidade",
    links: ["LGPD", "CFM 2.314/2022", "Política de privacidade", "Termos de uso"],
  },
];

export function Footer() {
  return (
    <footer className="bg-white border-t border-border pt-20 pb-10">
      <div className="container-inner">
        <div className="grid lg:grid-cols-[1.4fr_2.6fr] gap-10 md:gap-16">
          <div>
            <div className="flex items-center gap-2.5">
              <img src={mindmedLogo.url} alt="MindMed" className="h-7 w-7 object-contain" />
              <span className="text-[15px] font-semibold tracking-tight text-ink">
                MindMed
              </span>
            </div>
            <p className="mt-5 text-[14px] leading-[1.65] text-muted-foreground max-w-[320px]">
              Infraestrutura de inteligência clínica para o sistema de saúde
              brasileiro. Documentação, decisão e governança em uma camada
              única e auditável.
            </p>
            <div className="mt-6 font-mono text-[11px] tracking-[0.14em] uppercase text-muted-foreground">
              mindmedcontato@gmail.com
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {cols.map((c) => (
              <div key={c.title}>
                <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-foreground mb-4">
                  {c.title}
                </div>
                <ul className="space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-[14px] text-ink/80 hover:text-ink transition-colors"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 md:mt-20 pt-7 border-t border-border flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground">
          <div>© 2026 MindMed Tecnologia em Saúde Ltda.</div>
          <div className="flex gap-6">
            <span>CNPJ sob registro institucional</span>
            <span>Brasil · LGPD compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
