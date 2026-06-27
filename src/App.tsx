import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Process from "./components/sections/Process";
import SectionDivider from "./components/ui/SectionDivider";
import Stack from "./components/sections/Stack";
import WhyMe from "./components/sections/WhyMe";
import BackgroundEffects from "./components/layout/BackgroundEffects";
import Footer from "./components/sections/Footer";
import SEO from "./components/seo/SEO";
function App() {
  return (
    <main className="bg-[#030712] min-h-screen text-white">
      <SEO/>
      <BackgroundEffects />
      <Navbar />
      <Hero />
      <SectionDivider />
      <Services />
      <About />
      <SectionDivider />
      <Projects />
      <Experience />
      <SectionDivider />
      <Process />
      <Stack />
      <WhyMe />
      <Footer />
    </main>
  );
}

export default App;