import { SlideUp } from "../ui/Animations";
import { Card } from "../ui/Card";
import { Search, ShieldCheck, LineChart, Cpu, Network, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: <Cpu className="w-6 h-6 text-primary" />,
    title: "AI Opportunity Matching",
    description: "Our proprietary algorithm scores thousands of opportunities against your specific startup profile to find the perfect match."
  },
  {
    icon: <Search className="w-6 h-6 text-primary" />,
    title: "Investor Discovery",
    description: "Stop guessing. Find investors who have a history of funding startups exactly like yours at your current stage."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
    title: "Grant Intelligence",
    description: "Uncover non-dilutive funding tailored to your industry, technology, and location with automated eligibility checks."
  },
  {
    icon: <LineChart className="w-6 h-6 text-primary" />,
    title: "Startup Readiness Score",
    description: "Get an objective AI assessment of your pitch deck, financials, and traction before you start fundraising."
  },
  {
    icon: <Network className="w-6 h-6 text-primary" />,
    title: "Mentor Recommendations",
    description: "Connect with domain experts who have successfully navigated the exact challenges you are facing right now."
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-primary" />,
    title: "Execution Tracking",
    description: "Manage your entire opportunity pipeline, track responses, and automate follow-ups from a single dashboard."
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <SlideUp className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white">
            Intelligence at every step.
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl">
            Nexora provides a complete toolkit for founders to systematically discover, evaluate, and capture high-value opportunities.
          </p>
        </SlideUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <SlideUp key={index} delay={index * 0.1}>
              <Card className="h-full flex flex-col group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 border border-primary/20 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-text-secondary leading-relaxed flex-grow">{feature.description}</p>
              </Card>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  );
}
