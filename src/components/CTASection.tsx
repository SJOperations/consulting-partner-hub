import { motion } from 'framer-motion';
import { Button } from './ui/button';

const CTASection = () => {
  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-background/60 mb-4">
            Not an Agency
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6">
            Agencies trap you in dependency. I build your independence.
          </h2>
          <p className="text-lg text-background/80 leading-relaxed mb-6">
            Traditional agencies profit from your dependence, so the longer you need them, 
            the more they earn. Most will promise results while keeping the keys to your 
            marketing locked away.
          </p>
          <p className="text-lg text-background/80 leading-relaxed mb-8">
            I work differently. My job isn't to keep you on the hook; it's to build your 
            internal marketing capabilities so you can own your growth strategy completely.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-background/60 text-background hover:bg-background hover:text-foreground"
            >
              Compare Me
            </Button>
            <Button variant="accent" size="lg">
              Let's Work Together
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
