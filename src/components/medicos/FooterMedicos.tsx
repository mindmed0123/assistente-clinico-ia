import mindmedLogo from "@/assets/mindmed-logo.png.asset.json";

export function FooterMedicos() {
  return (
    <footer className="bg-white border-t border-border py-10">
      <div className="container-inner">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-2.5">
              <img src={mindmedLogo.url} alt="MindMed" className="h-7 w-7 object-contain" />
              <span className="text-[15px] font-semibold tracking-tight text-ink">MindMed</span>
            </div>
            <div className="mt-3 font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground">
              mindmedcontato@gmail.com
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-muted-foreground">
            <a href="/termos" className="hover:text-ink transition-colors">
              Termos de uso
            </a>
            <a href="/privacidade" className="hover:text-ink transition-colors">
              Política de privacidade
            </a>
            <span>Resolução CFM 2.454/2026</span>
            <span>LGPD</span>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-[12px] text-muted-foreground">
          © {new Date().getFullYear()} MindMed. Documentação clínica — não decisão clínica.
        </div>
      </div>
    </footer>
  );
}
