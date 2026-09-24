import { useEffect, useState } from "react";

const VIGENCIA_CFM = new Date("2026-08-26T00:00:00-03:00");

const DEPOIS =
  "A Resolução CFM 2.454/2026 está em vigor desde 26 de agosto de 2026.";

function textoPara(agora: Date): string {
  const msDia = 24 * 60 * 60 * 1000;
  const diff = VIGENCIA_CFM.getTime() - agora.getTime();
  if (diff <= 0) {
    // mesmo dia da vigência?
    const fmt = new Intl.DateTimeFormat("pt-BR", {
      timeZone: "America/Sao_Paulo",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    if (fmt.format(agora) === fmt.format(VIGENCIA_CFM)) {
      return "A Resolução CFM 2.454/2026 entra em vigor hoje.";
    }
    return DEPOIS;
  }
  const dias = Math.ceil(diff / msDia);
  return dias === 1
    ? "Falta 1 dia para a Resolução CFM 2.454/2026 entrar em vigor."
    : `Faltam ${dias} dias para a Resolução CFM 2.454/2026 entrar em vigor.`;
}

/** Faixa fina com o prazo de vigência da Resolução CFM.
 *  O cálculo roda só no cliente para não divergir do SSR. */
export function ContagemCFM() {
  const [texto, setTexto] = useState(DEPOIS);

  useEffect(() => {
    setTexto(textoPara(new Date()));
  }, []);

  return (
    <div
      className="w-full"
      style={{
        background: "var(--primary-light)",
        borderTop: "1px solid var(--primary-mid)",
        borderBottom: "1px solid var(--primary-mid)",
      }}
    >
      <div className="container-inner py-3.5 md:py-4">
        <p
          className="font-mono text-[11.5px] md:text-[12.5px] tracking-[0.06em] uppercase text-center leading-[1.5]"
          style={{ color: "var(--primary)" }}
        >
          {texto}
        </p>
      </div>
    </div>
  );
}
