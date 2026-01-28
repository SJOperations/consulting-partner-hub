import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="font-display text-2xl font-semibold text-foreground">
            Consulting<span className="text-primary">.</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <span className="text-border">|</span>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms & Conditions
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            ©{new Date().getFullYear()} Consulting. All Rights Reserved.
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-muted-foreground/60">
          This site is not a part of the Facebook website or Facebook Inc. Additionally, 
          This site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
