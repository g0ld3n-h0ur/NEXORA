import { FadeIn } from "../ui/Animations";

const companies = [
  "Linear", "Stripe", "Vercel", "Notion", "Ramp", "Retool"
];

export function TrustedBy() {
  return (
    <section className="py-12 border-y border-border-subtle bg-background overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      
      <div className="container mx-auto px-6 text-center">
        <FadeIn>
          <p className="text-sm font-medium text-text-secondary mb-8 tracking-widest uppercase">
            Trusted by fast-growing startups
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {companies.map((company, index) => (
              <div key={index} className="text-xl md:text-2xl font-bold tracking-tighter text-white transition-opacity duration-300 hover:opacity-100 opacity-60">
                {company}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
