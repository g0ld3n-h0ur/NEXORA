import { SlideUp } from "../ui/Animations";
import { UserPlus, Brain, Target, Rocket } from "lucide-react";

const steps = [
  {
    icon: <UserPlus className="w-6 h-6" />,
    title: "Create Startup Profile",
    description: "Connect your existing data sources or answer a few quick questions to build your comprehensive startup identity.",
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "AI Understands Your Startup",
    description: "Our intelligence engine analyzes your stage, traction, market, and goals to determine your exact needs.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Find Personalized Opportunities",
    description: "Get highly curated matches for investors, grants, accelerators, and mentors that fit your current profile.",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Grow Faster",
    description: "Track your applications, manage investor relations, and execute on opportunities—all from one dashboard.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-card/30 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <SlideUp className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white">
            How Nexora Works
          </h2>
          <p className="text-lg text-text-secondary">
            A seamless, intelligent process designed to save founders time and maximize success probability.
          </p>
        </SlideUp>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-border-subtle" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative z-10">
            {steps.map((step, index) => (
              <SlideUp key={index} delay={index * 0.1} className="relative group">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-2xl glass flex items-center justify-center text-primary mb-6 relative overflow-hidden group-hover:-translate-y-2 transition-transform duration-300 shadow-lg">
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {step.icon}
                    <div className="absolute top-2 right-2 text-xs font-bold text-text-secondary opacity-50">
                      0{index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{step.description}</p>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
