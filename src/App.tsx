import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { TrustedBy } from "./components/sections/TrustedBy";
import { ProblemSolution } from "./components/sections/ProblemSolution";
import { HowItWorks } from "./components/sections/HowItWorks";
import { Features } from "./components/sections/Features";
import { Benefits } from "./components/sections/Benefits";
import { Testimonials } from "./components/sections/Testimonials";
import { FAQ } from "./components/sections/FAQ";
import { CTA } from "./components/sections/CTA";

function App() {
  return (
    <div className="min-h-screen bg-background text-text-primary selection:bg-primary/30">
      <Navbar />
      
      <main>
        <Hero />
        <TrustedBy />
        <ProblemSolution />
        <HowItWorks />
        <Features />
        <Benefits />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
