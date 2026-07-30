import { Button } from "../ui/Button";
import { FadeIn, SlideUp } from "../ui/Animations";
import { AnimatedNetwork } from "./AnimatedNetwork";
import { Sparkles, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Abstract Background Gradient */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div className="max-w-2xl">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-primary/30 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Startup Intelligence Platform</span>
            </div>
          </FadeIn>
          
          <SlideUp delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
              Build Smarter.<br />
              Raise Faster.<br />
              <span className="text-gradient">Find the Right Opportunities.</span>
            </h1>
          </SlideUp>
          
          <SlideUp delay={0.3}>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-10 max-w-xl">
              Nexora uses AI to intelligently match startups with investors, grants, incubators, mentors and opportunities based on startup readiness and growth stage.
            </p>
          </SlideUp>
          
          <FadeIn delay={0.4} className="flex flex-col sm:flex-row items-center gap-4">
            <Button size="lg" className="w-full sm:w-auto group">
              Get Started
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Book Demo
            </Button>
          </FadeIn>
          
          <FadeIn delay={0.6} className="mt-12 flex items-center gap-4 text-sm text-text-secondary">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-card flex items-center justify-center overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover opacity-80" />
                </div>
              ))}
            </div>
            <p>Join <span className="text-white font-medium">10,000+</span> founders growing with Nexora</p>
          </FadeIn>
        </div>

        {/* Right Content: Animated Network */}
        <div className="relative h-[400px] md:h-[600px] flex items-center justify-center">
          <AnimatedNetwork />
        </div>
      </div>
    </section>
  );
}
