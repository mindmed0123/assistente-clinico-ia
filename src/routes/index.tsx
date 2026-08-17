import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { trackViewContent } from "@/lib/pixel";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { TrustBar } from "@/components/landing/TrustBar";
import { SocialProof } from "@/components/landing/SocialProof";
import { Problem } from "@/components/landing/Problem";
import { MarketData } from "@/components/landing/MarketData";
import { Impact } from "@/components/landing/Impact";
import { Platform } from "@/components/landing/Platform";
import { Ecosystem } from "@/components/landing/Ecosystem";
import { Security } from "@/components/landing/Security";
import { Scale } from "@/components/landing/Scale";
import { UseCases } from "@/components/landing/UseCases";
import { Institutions } from "@/components/landing/Institutions";
import { Pricing } from "@/components/landing/Pricing";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MindMed — Infraestrutura de Inteligência Clínica" },
      {
        name: "description",
        content:
          "A infraestrutura de inteligência clínica para a medicina moderna. Documentação, decisão e governança em uma plataforma institucional, segura e auditável.",
      },
      { property: "og:title", content: "MindMed — Infraestrutura de Inteligência Clínica" },
      {
        property: "og:description",
        content:
          "Plataforma institucional para documentação, decisão clínica e governança de dados em saúde — projetada para operações de escala hospitalar.",
      },
      { property: "og:url", content: "https://mindmed.online/" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://mindmed.online/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "MindMed — Infraestrutura de Inteligência Clínica" },
      {
        name: "twitter:description",
        content:
          "Plataforma institucional para documentação, decisão clínica e governança de dados em saúde.",
      },
      { name: "twitter:image", content: "https://mindmed.online/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://mindmed.online/" }],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    trackViewContent("institucional");
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <SocialProof />
      <Impact />
      <Pricing />
      <TrustBar />
      <Problem />
      <MarketData />
      <Platform />
      <Ecosystem />
      <Security />
      <Scale />
      <UseCases />
      <Institutions />
      <FinalCTA />
      <Footer />
    </main>
  );
}
