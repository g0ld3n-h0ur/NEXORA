import { SlideUp } from "../ui/Animations";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-background pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <SlideUp className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-xl">
                N
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Nexora</span>
            </a>
            <p className="text-text-secondary max-w-sm mb-6">
              Nexora uses AI to intelligently match startups with investors, grants, incubators, mentors, and opportunities based on startup readiness and growth stage.
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">Platform</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-text-secondary hover:text-white transition-colors">How it Works</a></li>
              <li><a href="#" className="text-text-secondary hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-text-secondary hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-text-secondary hover:text-white transition-colors">For Investors</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-text-secondary hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-text-secondary hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-text-secondary hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-text-secondary hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </SlideUp>

        <div className="pt-8 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-secondary text-sm">
            &copy; {currentYear} Nexora Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-text-secondary">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
