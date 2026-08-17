import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { trackViewContent } from "@/lib/pixel";
import { HeaderMedicos } from "@/components/medicos/HeaderMedicos";
import { HeroMedicos } from "@/components/medicos/HeroMedicos";
import { ProvaSocialMedicos } from "@/components/medicos/ProvaSocialMedicos";
import { VideoDemoMedicos } from "@/components/medicos/VideoDemoMedicos";
import { ComoFuncionaMedicos } from "@/components/medicos/ComoFuncionaMedicos";
import { Features } from "@/components/landing/Features";
import { SecurityMedicos } from "@/components/medicos/SecurityMedicos";
import { CustoMedicos } from "@/components/medicos/CustoMedicos";
import { PricingMedicos } from "@/components/medicos/PricingMedicos";
import { TrustBar } from "@/components/landing/TrustBar";
import { ParceriaSBACV } from "@/components/medicos/ParceriaSBACV";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTAMedicos } from "@/components/medicos/FinalCTAMedicos";
import { FooterMedicos } from "@/components/medicos/FooterMedicos";
import { StickyCtaMedicos } from "@/components/medicos/StickyCtaMedicos";

const TITLE = "Documentação clínica por IA para médicos | MindMed";
const DESC =
  "A MindMed transforma o áudio da sua consulta em anamnese, evolução e laudo estruturados. Você revisa e assina. 7 dias de teste, garantia de 30 dias.";
const OG_IMAGE = "https://mindmed.online/og-medicos.jpg";

export const Route = createFileRoute("/medicos")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "https://mindmed.online/medicos" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: "https://mindmed.online/medicos" }],
  }),
  component: MedicosPage,
});

function MedicosPage() {
  useEffect(() => {
    trackViewContent("landing_medicos");
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeaderMedicos />
      <HeroMedicos />
      <ProvaSocialMedicos />
      <VideoDemoMedicos />
      <ComoFuncionaMedicos />
      <Features />
      <SecurityMedicos />
      <CustoMedicos />
      <PricingMedicos />
      <TrustBar />
      <ParceriaSBACV />
      <FAQ />
      <FinalCTAMedicos />
      <FooterMedicos />
    </main>
  );
}
