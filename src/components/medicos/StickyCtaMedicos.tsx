import { useEffect, useState } from "react";
import { CtaButton } from "@/components/CtaButton";
import { CTA_LABEL } from "./CtaMedicos";

/** Barra fixa de CTA — só no celular, aparece depois da primeira dobra. */
export function StickyCtaMedicos() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="md:hidden fixed inset-x-0 bottom-0 z-50 px-4 pt-3 transition-transform duration-300"
      style={{
        paddingBottom: "calc(12px + env(safe-area-inset-bottom))",
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(18px) saturate(140%)",
        WebkitBackdropFilter: "blur(18px) saturate(140%)",
        borderTop: "1px solid var(--border)",
        transform: visible ? "translateY(0)" : "translateY(110%)",
      }}
      aria-hidden={!visible}
    >
      <CtaButton
        path="/medicos/teste-gratis"
        plan="mindmed_pro"
        className="btn-primary w-full min-h-[52px] text-[15px]"
      >
        {CTA_LABEL}
      </CtaButton>
      <p className="mt-2 text-center text-[11.5px] leading-[1.4] text-muted-foreground">
        Nada é cobrado hoje · Cancele em dois cliques
      </p>
    </div>
  );
}
