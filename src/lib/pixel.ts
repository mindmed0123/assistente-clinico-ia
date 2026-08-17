declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

function makePageId(): string {
  try {
    if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
      return crypto.randomUUID();
    }
  } catch {
    /* noop */
  }
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

const PAGE_ID = makePageId();

const recent = new Map<string, number>();
const DEDUP_MS = 5000;

function shouldSkip(logicalKey: string): boolean {
  const now = Date.now();
  const last = recent.get(logicalKey);
  if (last && now - last < DEDUP_MS) return true;
  recent.set(logicalKey, now);
  return false;
}

/** Página de conversão carregada. */
export function trackViewContent(contentName: string): void {
  if (typeof window === "undefined") return;
  if (shouldSkip(`view_${contentName}`)) return;

  window.fbq?.(
    "track",
    "ViewContent",
    { content_name: contentName },
    { eventID: `view_${contentName}_${PAGE_ID}` },
  );
  window.gtag?.("event", "view_content", { content_name: contentName });
}

/** Clique no CTA — dispara ANTES de navegar para o app. */
export function trackInitiateCheckout(plan: string): void {
  if (typeof window === "undefined") return;
  if (shouldSkip(`checkout_${plan}`)) return;

  window.fbq?.(
    "track",
    "InitiateCheckout",
    { content_name: plan },
    { eventID: `checkout_${plan}_${PAGE_ID}` },
  );
  window.gtag?.("event", "begin_checkout", { content_name: plan });
}

export {};
