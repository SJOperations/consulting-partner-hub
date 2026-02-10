import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative py-16 bg-gradient-to-b from-primary to-primary/80 border-t border-white/[0.03] overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-1">
              <span className="font-display text-xl font-semibold text-foreground tracking-tight">
                SJ<span className="text-accent">Ops</span>
              </span>
              <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                Behind-the-scenes operators for creators and founders. We build the back end so you can focus on the front end.
              </p>
              <a 
                href="mailto:contact@sjoperations.com" 
                className="text-accent hover:underline text-sm mt-4 inline-block"
              >
                contact@sjoperations.com
              </a>
            </div>

            <div>
              <h4 className="font-display font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/services" className="hover:text-accent transition-colors">Offer & Packaging</Link></li>
                <li><Link to="/services" className="hover:text-accent transition-colors">Funnel & Pages</Link></li>
                <li><Link to="/services" className="hover:text-accent transition-colors">CRM & Automations</Link></li>
                <li><Link to="/services" className="hover:text-accent transition-colors">Appointment Setting</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/about" className="hover:text-accent transition-colors">About</Link></li>
                <li><Link to="/case-studies" className="hover:text-accent transition-colors">Case Studies</Link></li>
                <li><Link to="/faqs" className="hover:text-accent transition-colors">FAQs</Link></li>
                <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-accent transition-colors">Terms of Service</Link></li>
                <li><Link to="/cookies" className="hover:text-accent transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} SJOperations. All rights reserved.
            </div>
            <div className="text-sm text-muted-foreground">
              Confidentiality-first. GDPR compliant.
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
