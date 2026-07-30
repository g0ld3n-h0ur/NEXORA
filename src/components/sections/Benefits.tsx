import { useState } from "react";
import { SlideUp, FadeIn } from "../ui/Animations";
import { cn } from "../../utils/cn";

export function Benefits() {
  const [activeTab, setActiveTab] = useState<"founder" | "investor">("founder");

  return (
    <section id="benefits" className="py-24 bg-card/30 border-y border-border-subtle">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          <div className="w-full md:w-1/2">
            <SlideUp>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white">
                A better ecosystem <br />
                <span className="text-gradient">for everyone.</span>
              </h2>
              <p className="text-lg text-text-secondary mb-8">
                Whether you're building the future or funding it, Nexora removes the friction from discovery and connection.
              </p>
              
              <div className="flex bg-background p-1 rounded-lg w-fit mb-8 border border-border-subtle">
                <button
                  onClick={() => setActiveTab("founder")}
                  className={cn(
                    "px-6 py-2 rounded-md text-sm font-medium transition-all",
                    activeTab === "founder" ? "bg-card text-white shadow-sm border border-border-subtle" : "text-text-secondary hover:text-white"
                  )}
                >
                  Founder Journey
                </button>
                <button
                  onClick={() => setActiveTab("investor")}
                  className={cn(
                    "px-6 py-2 rounded-md text-sm font-medium transition-all",
                    activeTab === "investor" ? "bg-card text-white shadow-sm border border-border-subtle" : "text-text-secondary hover:text-white"
                  )}
                >
                  Investor Perspective
                </button>
              </div>
            </SlideUp>

            <FadeIn key={activeTab} duration={0.3}>
              {activeTab === "founder" ? (
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0 mt-1 font-bold">1</div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Save 100+ Hours</h4>
                      <p className="text-text-secondary">Stop manually searching for investors. Let our AI bring the right opportunities directly to you.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0 mt-1 font-bold">2</div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Increase Success Rate</h4>
                      <p className="text-text-secondary">Only apply to grants and accelerators where you meet the exact eligibility criteria.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0 mt-1 font-bold">3</div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Build Meaningful Relationships</h4>
                      <p className="text-text-secondary">Connect with mentors and investors who genuinely understand your space.</p>
                    </div>
                  </li>
                </ul>
              ) : (
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center text-success shrink-0 mt-1 font-bold">1</div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">High-Signal Deal Flow</h4>
                      <p className="text-text-secondary">Receive highly curated startups that match your exact thesis, stage, and sector preferences.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center text-success shrink-0 mt-1 font-bold">2</div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Verified Traction Data</h4>
                      <p className="text-text-secondary">Access standardized, verified metrics for fast initial screening without endless back-and-forth.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center text-success shrink-0 mt-1 font-bold">3</div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Portfolio Support</h4>
                      <p className="text-text-secondary">Seamlessly connect your portfolio companies to targeted grants, mentors, and follow-on capital.</p>
                    </div>
                  </li>
                </ul>
              )}
            </FadeIn>
          </div>

          <div className="w-full md:w-1/2">
            <FadeIn delay={0.2} className="relative aspect-square w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-background rounded-full blur-3xl opacity-50" />
              <div className="absolute inset-4 glass rounded-3xl border-border-subtle p-6 shadow-2xl flex flex-col gap-4 overflow-hidden">
                 {/* Mock UI Representation */}
                 <div className="w-full h-8 bg-white/5 rounded-md mb-4 flex items-center px-4 gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-500/50" />
                   <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                   <div className="w-3 h-3 rounded-full bg-success/50" />
                 </div>
                 <div className="flex gap-4">
                   <div className="w-12 h-12 rounded-full bg-primary/20 shrink-0" />
                   <div className="flex-grow space-y-2">
                     <div className="w-1/3 h-4 bg-white/10 rounded" />
                     <div className="w-2/3 h-3 bg-white/5 rounded" />
                   </div>
                 </div>
                 <div className="w-full h-[1px] bg-white/5 my-2" />
                 
                 <div className="space-y-3">
                   {[1, 2, 3].map(i => (
                     <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-md flex items-center justify-center text-xs font-bold ${activeTab === 'founder' ? 'bg-primary/20 text-primary' : 'bg-success/20 text-success'}`}>
                            {activeTab === 'founder' ? 'Match' : 'Deal'}
                          </div>
                          <div>
                            <div className="w-20 h-3 bg-white/10 rounded mb-1" />
                            <div className="w-32 h-2 bg-white/5 rounded" />
                          </div>
                        </div>
                        <div className="w-16 h-6 rounded-full bg-white/10" />
                     </div>
                   ))}
                 </div>
              </div>
            </FadeIn>
          </div>
          
        </div>
      </div>
    </section>
  );
}
