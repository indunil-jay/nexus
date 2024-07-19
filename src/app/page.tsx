import MainNav from "@/components/main-navbar";
import Benifits from "@/components/sections/benifit-section";
import Company from "@/components/sections/companies-section";
import Hero from "@/components/sections/hero-section";

export default function Home() {
  return (
    <>
      {" "}
      <MainNav />
      <main>
        <Hero />
        <Company />
        <Benifits />
      </main>
    </>
  );
}
