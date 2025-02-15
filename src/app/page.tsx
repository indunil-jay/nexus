import MainNav from "@/components/main-navbar";
import Benifits from "@/components/sections/benifit-section";
import Company from "@/components/sections/companies-section";
import ContactUs from "@/components/sections/contact-section";
import FAQs from "@/components/sections/faq-section";
import Features from "@/components/sections/feature-section";
import Footer from "@/components/sections/footer-section";
import Hero from "@/components/sections/hero-section";
import Pricing from "@/components/sections/pricing-section";
import Testimonials from "@/components/sections/testimonial-section";

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
        <Pricing />
        <FAQs />
        <Testimonials />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}
