import { SlideUp } from "../ui/Animations";
import { Card } from "../ui/Card";

const testimonials = [
  {
    quote: "Nexora completely changed our fundraising trajectory. We connected with a lead investor within two weeks of creating our profile.",
    author: "Sarah Jenkins",
    role: "CEO, Luminar AI",
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    quote: "As an investor, the signal-to-noise ratio on Nexora is incredible. I only see startups that fit my thesis and stage criteria perfectly.",
    author: "David Chen",
    role: "Partner, Horizon Ventures",
    avatar: "https://i.pravatar.cc/150?img=11"
  },
  {
    quote: "We secured a $250k non-dilutive grant that we didn't even know existed until Nexora's AI matched it to our technology profile.",
    author: "Elena Rodriguez",
    role: "Founder, BioTech Solutions",
    avatar: "https://i.pravatar.cc/150?img=5"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <SlideUp className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white">
            Success Stories
          </h2>
          <p className="text-lg text-text-secondary">
            Don't just take our word for it. Hear from founders and investors who are leveraging Nexora to accelerate growth.
          </p>
        </SlideUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <SlideUp key={index} delay={index * 0.1}>
              <Card className="h-full flex flex-col justify-between group">
                <div className="mb-8">
                  <svg className="w-8 h-8 text-primary/40 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-text-secondary text-lg leading-relaxed group-hover:text-white transition-colors">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="flex items-center gap-4 border-t border-border-subtle pt-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-full object-cover border border-border-subtle"
                  />
                  <div>
                    <h4 className="text-white font-medium">{testimonial.author}</h4>
                    <p className="text-sm text-text-secondary">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  );
}
