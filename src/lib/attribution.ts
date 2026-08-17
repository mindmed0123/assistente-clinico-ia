const STORAGE_KEY = "mm_attr";
const TTL_DAYS = 90;

const KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "fbclid",
  "gclid",
] as const;

export type Attribution = Partial<Record<(typeof KEYS)[number], string>> & {
  mm_lp?: string;
  first_seen_at?: string;
};

function isFresh(attr: Attribution): boolean {
  if (!attr.first_seen_at) return false;
  const ts = Date.parse(attr.first_seen_at);
  if (Number.isNaN(ts)) return false;
  return Date.now() - ts < TTL_DAYS * 24 * 60 * 60 * 1000;
}

/** Retorna a atribuição salva (ou objeto vazio). Nunca lança exceção. */
export function getAttribution(): Attribution {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as Attribution;
    if (!parsed || typeof parsed !== "object") return {};
    return isFresh(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

/** Lê os parâmetros da URL e persiste (first-touch, 90 dias). */
export function captureAttribution(): void {
  if (typeof window === "undefined") return;
  try {
    const existing = getAttribution();
    if (isFresh(existing)) return;

    const params = new URLSearchParams(window.location.search);
    const next: Attribution = {
      mm_lp: window.location.pathname,
      first_seen_at: new Date().toISOString(),
    };
    for (const key of KEYS) {
      const value = params.get(key);
      if (value) next[key] = value;
    }
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    /* storage bloqueado — segue sem atribuição */
  }
}
