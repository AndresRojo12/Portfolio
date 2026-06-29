import { lazy, Suspense } from "react";
const Navbar = lazy(() => import("./components/layout/Navbar"));
import Hero from "./components/sections/Hero";
const Services = lazy(() => import("./components/sections/Services"));
const About = lazy(() => import("./components/sections/About"));
const Projects = lazy(() => import("./components/sections/Projects"));
const Experience = lazy(() => import("./components/sections/Experience"));
const Process = lazy(() => import("./components/sections/Process"));
const SectionDivider = lazy(() => import("./components/ui/SectionDivider"));
const Stack = lazy(() => import("./components/sections/Stack"));
const WhyMe = lazy(() => import("./components/sections/WhyMe"));
const BackgroundEffects = lazy(
  () => import("./components/layout/BackgroundEffects"),
);
const Footer = lazy(() => import("./components/sections/Footer"));
const SEO = lazy(() => import("./components/seo/SEO"));
const Contact = lazy(() => import("./components/sections/Contact"));

function App() {
  return (
    <>
      <SEO />
      <BackgroundEffects />
      <main className="bg-[#030712] min-h-screen text-white">
        <Suspense fallback={null}>
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
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;
