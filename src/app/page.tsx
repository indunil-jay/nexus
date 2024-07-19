import MainNav from "@/components/main-navbar";
import Benifits from "@/components/sections/benifit-section";
import Company from "@/components/sections/companies-section";
import FAQs from "@/components/sections/faq-section";
import Features from "@/components/sections/feature-section";
import Hero from "@/components/sections/hero-section";
import Pricing from "@/components/sections/pricing-section";
import Projects from "@/components/sections/project-section";

export default function Home() {
  return (
    <>
      {" "}
      <MainNav />
      <main>
        <Hero />
        <Company />
        <Benifits />
        <Features />
        <Projects />
        <Pricing />
        <FAQs />
      </main>
    </>
  );
}
