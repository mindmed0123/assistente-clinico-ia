import mindmedLogo from "@/assets/mindmed-logo.png.asset.json";
import { CtaButton } from "@/components/CtaButton";
import { CTA_LABEL } from "./CtaMedicos";

/** Cabeçalho mínimo: logo não clicável + um CTA. Sem menu de navegação. */
export function HeaderMedicos() {
  return (
    <header
      className="sticky top-0 z-50 h-[60px] flex items-center"
      style={{
        background: "rgba(255,255,255,0.88)",
        backdropFilter: "blur(18px) saturate(140%)",
        WebkitBackdropFilter: "blur(18px) saturate(140%)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="container-inner w-full flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 select-none">
          <img src={mindmedLogo.url} alt="MindMed" className="h-7 w-7 object-contain" />
          <span className="text-[15px] font-semibold tracking-tight text-ink">MindMed</span>
        </div>
        <CtaButton
          path="/medicos/teste-gratis"
          plan="mindmed_pro"
          className="btn-primary text-[13px] px-4 py-2.5"
        >
          <span className="hidden sm:inline">{CTA_LABEL}</span>
          <span className="sm:hidden">Testar 7 dias</span>
        </CtaButton>
      </div>
    </header>
  );
}
