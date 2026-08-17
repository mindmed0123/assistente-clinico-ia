import { getAttribution } from "./attribution";

const APP_BASE = "https://acesso.mindmed.online";

/**
 * Monta a URL de destino no app, carregando a atribuição na querystring.
 *
 * Por que na URL: mindmed.online e acesso.mindmed.online são domínios
 * diferentes. localStorage e os cookies _fbp/_fbc NÃO atravessam.
 */
export function buildAppUrl(path: string, extra?: Record<string, string>): string {
  const base = APP_BASE + (path.startsWith("/") ? path : `/${path}`);
  const attr = getAttribution();

  const parts: string[] = [];
  for (const [key, value] of Object.entries(attr)) {
    if (key === "first_seen_at" || !value) continue;
    parts.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
  }
  for (const [key, value] of Object.entries(extra ?? {})) {
    if (!value) continue;
    parts.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
  }

  return parts.length ? `${base}?${parts.join("&")}` : base;
}
