import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { PlayCircle } from 'lucide-react';
import heroImage from '@/assets/hero-consultant.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Teal overlay */}
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/80 mb-6"
          >
            Agency outcomes. In-house ownership.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-20 h-0.5 bg-primary-foreground/40 mb-8"
          />

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-primary-foreground leading-tight mb-8"
          >
            Build a trusted brand, supported by a marketing engine you'll actually own
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mb-10 font-body leading-relaxed"
          >
            I help business leaders and their teams build the internal capabilities to generate 
            endless customers and steady revenue growth. Not an agency. Not a freelancer. A partner 
            in building your marketing engine through hands-on support, strategic guidance, and 
            comprehensive training.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Button variant="accent" size="lg">
              Let's Work, Together
            </Button>
            <Button variant="outlineWhite" size="lg">
              Get Instant Price
            </Button>
          </motion.div>

          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="inline-flex items-center gap-2 mt-8 text-primary-foreground/80 hover:text-primary-foreground transition-colors font-medium text-sm"
          >
            <PlayCircle className="w-5 h-5" />
            Watch Podcast
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
