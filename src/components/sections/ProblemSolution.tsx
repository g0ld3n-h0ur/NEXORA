import { SlideUp } from "../ui/Animations";
import { Card } from "../ui/Card";
import { AlertTriangle, Lightbulb } from "lucide-react";

export function ProblemSolution() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <SlideUp className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            The startup ecosystem is <span className="text-gradient">fragmented</span>
          </h2>
          <p className="text-lg text-text-secondary">
            Founders waste hundreds of hours searching for the right investors, applying for irrelevant grants, and networking blindly.
          </p>
        </SlideUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SlideUp delay={0.1}>
            <Card className="h-full border-red-500/10 bg-red-500/5 group">
              <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 mb-6 group-hover:scale-110 transition-transform">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">The Old Way</h3>
              <ul className="space-y-4 text-text-secondary">
                <li className="flex gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                  <p>Cold outreach to investors with a 1% response rate.</p>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                  <p>Missing out on hidden grants and non-dilutive funding.</p>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                  <p>Generic advice from mismatched mentors.</p>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                  <p>Scattergun approach to accelerator applications.</p>
                </li>
              </ul>
            </Card>
          </SlideUp>

          <SlideUp delay={0.2}>
            <Card className="h-full border-primary/20 bg-primary/5 group relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 blur-[80px] rounded-full pointer-events-none" />
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">The Nexora Way</h3>
              <ul className="space-y-4 text-text-secondary">
                <li className="flex gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <p>AI matches you with investors actively looking for your profile.</p>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <p>Automated grant discovery based on your specific industry.</p>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <p>Connect with mentors who have solved your exact problems.</p>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <p>Highly targeted opportunity pipeline tailored for growth.</p>
                </li>
              </ul>
            </Card>
          </SlideUp>
        </div>
      </div>
    </section>
  );
}
