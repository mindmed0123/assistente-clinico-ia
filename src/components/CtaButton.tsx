import type { CSSProperties, ReactNode } from "react";
import { buildAppUrl } from "@/lib/appLink";
import { trackInitiateCheckout } from "@/lib/pixel";

type CtaButtonProps = {
  path: string;
  plan?: string;
  extra?: Record<string, string>;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

/**
 * CTA centralizado: constrói o destino no app com atribuição
 * e dispara o evento de rastreamento antes de navegar.
 */
export function CtaButton({
  path,
  plan,
  extra,
  className,
  style,
  children,
}: CtaButtonProps) {
  const query = { ...(plan ? { plan } : {}), ...(extra ?? {}) };

  return (
    <a
      href={buildAppUrl(path, query)}
      className={className}
      style={style}
      onClick={(e) => {
        e.preventDefault();
        trackInitiateCheckout(plan ?? "platform_access");
        window.location.href = buildAppUrl(path, query);
      }}
    >
      {children}
    </a>
  );
}
