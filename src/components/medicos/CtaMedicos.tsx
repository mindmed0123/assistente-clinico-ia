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
    <div
      className={`w-full flex flex-col ${
        align === "center" ? "items-center" : "items-stretch sm:items-start"
      }`}
    >
      <CtaButton
        path="/medicos/teste-gratis"
        plan={plan}
        className={`${className} w-full sm:w-auto min-h-[52px] text-[15px] px-6`}
        style={full ? { width: "100%" } : undefined}
      >
        {CTA_LABEL}
      </CtaButton>
      <p
        className={`mt-3 text-[12.5px] leading-[1.5] text-center sm:text-left ${
          align === "center" ? "sm:text-center" : ""
        }`}
        style={{
          color: microTone === "dark" ? "rgba(255,255,255,0.6)" : "var(--muted-foreground)",
        }}
      >
        {CTA_MICRO}
      </p>
    </div>
  );
}
