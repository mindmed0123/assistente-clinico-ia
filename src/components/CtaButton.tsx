import { useEffect, useState } from "react";
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
  // SSR/primeiro render sem atribuição (localStorage só existe no cliente).
  const [href, setHref] = useState(() => buildAppUrl(path, query));

  useEffect(() => {
    setHref(buildAppUrl(path, query));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path, plan, JSON.stringify(extra ?? {})]);

  return (
    <a
      href={href}
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
