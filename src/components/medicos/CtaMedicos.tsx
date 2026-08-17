import { CtaButton } from "@/components/CtaButton";

export const CTA_LABEL = "Começar meus 7 dias de teste";
export const CTA_MICRO =
  "Nada é cobrado hoje · Garantia de 30 dias · Cancele em dois cliques";

type Props = {
  plan?: string;
  className?: string;
  align?: "left" | "center";
  microTone?: "light" | "dark";
  full?: boolean;
};

/** CTA único da /medicos — sempre via CtaButton (atribuição preservada). */
export function CtaMedicos({
  plan = "mindmed_pro",
  className = "btn-primary",
  align = "left",
  microTone = "light",
  full = false,
}: Props) {
  return (
    <div className={align === "center" ? "flex flex-col items-center" : "flex flex-col items-start"}>
      <CtaButton
        path="/medicos/teste-gratis"
        plan={plan}
        className={className}
        style={full ? { width: "100%" } : undefined}
      >
        {CTA_LABEL}
      </CtaButton>
      <p
        className={`mt-3 text-[12.5px] leading-[1.5] ${align === "center" ? "text-center" : ""}`}
        style={{
          color: microTone === "dark" ? "rgba(255,255,255,0.6)" : "var(--muted-foreground)",
        }}
      >
        {CTA_MICRO}
      </p>
    </div>
  );
}
