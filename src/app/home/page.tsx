import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/sections/Hero";
import Marquee from "@/components/home/sections/Marquee";
import Experience from "@/components/home/sections/Experience";
import Projects from "@/components/home/sections/Projects";
import About from "@/components/home/sections/About";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/ui/SEO";

export default function HomePage() {
  return (
    <div className="landing-page landing-bg font-sans antialiased selection:bg-primary selection:text-white relative text-text-primary min-h-screen overflow-clip">
      <SEO
        path="/"
        description="Experienced frontend developer with a focus on building engaging & accessible digital experiences — things that look good but are also built well under the hood."
        keywords="frontend developer, web developer, React, TypeScript, UI/UX, portfolio, Ngoc Quynh Pham, Phạm Thị Ngọc Quỳnh"
      />
      <Navbar />
      <Hero revealEnabled />
      <Marquee />
      <Experience revealEnabled />
      <Projects revealEnabled />
      <About revealEnabled />
      <section className="px-6 md:px-20 bg-white border-t border-black/[0.07]">
        <Footer full />
      </section>
    </div>
  );
}
