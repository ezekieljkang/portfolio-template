import Companies from "@/components/Companies";
import Footer from "@/components/Footer";
import FooterNavBar from "@/components/FooterNavBar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TestimonialSection from "@/components/TestimonialSection";

export default function Page() {
  return (
    <main className="max-w-screen-[1620px] mx-auto" >
      <div className="md:border border-black md:m-3">
        <Hero />
        <Companies />
        <Projects />
        <TestimonialSection />
        <Footer />
        <FooterNavBar />
      </div>
    </main>
  );
}
