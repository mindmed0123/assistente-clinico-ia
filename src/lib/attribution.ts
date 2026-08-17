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

/** Lê os parâmetros da URL e persiste (first-touch, 90 dias).
 *  Só grava quando há dado de campanha — gravar um registro vazio
 *  "queimaria" a janela de 90 dias e descartaria a atribuição de um
 *  clique de anúncio posterior. */
export function captureAttribution(): void {
  if (typeof window === "undefined") return;
  try {
    const params = new URLSearchParams(window.location.search);
    const found: Attribution = {};
    for (const key of KEYS) {
      const value = params.get(key);
      if (value) found[key] = value.slice(0, 200);
    }

    // Sem dado de campanha nesta visita: não escreve nada.
    if (Object.keys(found).length === 0) return;

    // First-touch: um registro válido existente nunca é sobrescrito.
    if (isFresh(getAttribution())) return;

    found.mm_lp = window.location.pathname;
    found.first_seen_at = new Date().toISOString();
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(found));
  } catch {
    /* storage bloqueado — segue sem atribuição */
  }
}
