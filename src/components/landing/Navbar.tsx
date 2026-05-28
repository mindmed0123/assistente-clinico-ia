import { useEffect, useState } from "react";

const Logo = ({ dark = false }: { dark?: boolean }) => (
  <a href="#top" className="flex items-center gap-2.5">
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="8" fill="#2C70DD" />
      <path
        d="M8 23V9h2.5l5.5 8 5.5-8H24v14h-2.5v-9.5L16 21l-5.5-7.5V23H8z"
        fill="#fff"
      />
    </svg>
    <span
      className="text-[18px] font-extrabold tracking-tight"
      style={{ color: dark ? "#fff" : "#14181F" }}
    >
      MindMed
    </span>
  </a>
);

const links = [
  { href: "#funcionalidades", label: "Funcionalidades" },
  { href: "#funcionalidades", label: "Avicena IA" },
  { href: "#seguranca", label: "Segurança" },
  { href: "#integracoes", label: "Integrações" },
  { href: "#planos", label: "Planos" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 inset-x-0 z-50 h-[68px] flex items-center transition-shadow"
      style={{
        background: "rgba(255,255,255,0.90)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(44,112,221,0.08)",
        boxShadow: scrolled ? "0 4px 24px rgba(10,22,40,0.06)" : "none",
      }}
    >
      <div className="container-inner w-full flex items-center justify-between">
        <Logo />
        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[14px] font-medium text-foreground/75 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a
            href="https://acesso.mindmed.online"
            className="btn-ghost hidden sm:inline-flex text-[14px]"
          >
            Entrar
          </a>
          <a
            href="https://acesso.mindmed.online"
            className="btn-primary text-[14px] !py-2.5 !px-5"
          >
            Começar grátis
          </a>
        </div>
      </div>
    </nav>
  );
}
