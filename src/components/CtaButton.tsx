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
  const extraKey = JSON.stringify(extra ?? {});
  // O primeiro render (SSR + hidratação) não pode ler localStorage:
  // a atribuição é aplicada logo após a montagem.
  const [href, setHref] = useState<string | null>(null);

  useEffect(() => {
    setHref(buildAppUrl(path, query));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path, plan, extraKey]);

  return (
    <a
      href={href ?? `https://acesso.mindmed.online${path}`}
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
