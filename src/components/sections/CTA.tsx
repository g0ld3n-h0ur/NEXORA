import { SlideUp } from "../ui/Animations";
import { Button } from "../ui/Button";

export function CTA() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/20 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        <SlideUp>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight text-white leading-tight">
            Stop Searching.<br />
            Start <span className="text-gradient">Building.</span>
          </h2>
          <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto">
            Join thousands of founders who are raising faster and growing smarter with Nexora's AI opportunity network.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto px-12 text-lg">
              Get Started for Free
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto px-12 text-lg">
              Talk to Sales
            </Button>
          </div>
          <p className="mt-8 text-sm text-text-secondary">
            No credit card required. Setup takes less than 5 minutes.
          </p>
        </SlideUp>
      </div>
    </section>
  );
}
