import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

const navLinks = [
  { name: 'Marketing', href: '#marketing', hasDropdown: true },
  { name: 'For Agencies', href: '#agencies', hasDropdown: true },
  { name: 'About', href: '#about' },
  { name: 'Speaking', href: '#speaking' },
  { name: 'Knowledge Hub', href: '#knowledge', hasDropdown: true },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Contact bar */}
      <div className="fixed top-0 right-0 z-50">
        <a 
          href="#contact" 
          className="bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-foreground/90 transition-colors inline-block"
        >
          Contact
        </a>
      </div>

      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-md border-b border-border' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center">
              <span className={`font-display text-3xl font-medium transition-colors ${
                isScrolled ? 'text-foreground' : 'text-primary-foreground'
              }`}>
                tom<br />wardman
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors flex items-center gap-1 ${
                    isScrolled 
                      ? 'text-foreground hover:text-primary' 
                      : 'text-primary-foreground/90 hover:text-primary-foreground'
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button 
                variant={isScrolled ? "default" : "outlineWhite"} 
                size="sm"
              >
                Get Instant Price
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className={`h-6 w-6 ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`} />
              ) : (
                <Menu className={`h-6 w-6 ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`} />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden py-4 border-t border-border bg-background"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                    {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                  </a>
                ))}
                <Button variant="default" size="sm" className="w-full mt-2">
                  Get Instant Price
                </Button>
              </div>
            </motion.div>
          )}
        </div>

        {/* Bottom border line on hero */}
        {!isScrolled && (
          <div className="container mx-auto px-6">
            <div className="h-px bg-primary-foreground/20" />
          </div>
        )}
      </motion.nav>
    </>
  );
};

export default Navbar;
