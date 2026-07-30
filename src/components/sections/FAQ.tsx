import { useState } from "react";
import { SlideUp } from "../ui/Animations";
import { ChevronDown } from "lucide-react";
import { cn } from "../../utils/cn";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How does Nexora's AI matching work?",
    answer: "Our AI analyzes over 50 data points from your startup profile (stage, traction, sector, cap table) and cross-references them with the explicit criteria of thousands of investors, grants, and programs to find high-probability matches."
  },
  {
    question: "Is my startup data secure and private?",
    answer: "Absolutely. We employ enterprise-grade encryption for all data. You control exactly who sees your information. We never share your metrics with investors without your explicit consent for each specific opportunity."
  },
  {
    question: "Do you take equity or a percentage of funds raised?",
    answer: "No. Nexora operates on a transparent SaaS subscription model for founders. We never take equity, success fees, or broker fees on the capital you raise or the grants you win."
  },
  {
    question: "How is this different from traditional startup directories?",
    answer: "Traditional directories are passive lists that require you to do all the filtering and outreach. Nexora is an active intelligence engine that pushes highly relevant, pre-qualified opportunities to you, saving you hundreds of hours."
  },
  {
    question: "Can I connect my existing tools?",
    answer: "Yes. Nexora integrates seamlessly with platforms like Stripe, Quickbooks, and Carta to automatically update your traction metrics and readiness score without manual data entry."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-6 max-w-3xl">
        <SlideUp className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-text-secondary">
            Everything you need to know about the platform and how it works.
          </p>
        </SlideUp>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <SlideUp key={index} delay={index * 0.1}>
                <div 
                  className={cn(
                    "border border-border-subtle rounded-2xl bg-card overflow-hidden transition-colors duration-300",
                    isOpen ? "border-primary/50" : "hover:border-border-subtle"
                  )}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <span className="font-semibold text-lg text-white pr-8">{faq.question}</span>
                    <ChevronDown 
                      className={cn(
                        "w-5 h-5 text-text-secondary transition-transform duration-300 shrink-0",
                        isOpen ? "rotate-180 text-primary" : ""
                      )} 
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 text-text-secondary leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </SlideUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
