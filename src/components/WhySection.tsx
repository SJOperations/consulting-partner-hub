import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const WhySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-8"
          >
            Why We Built Consulting.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            Most of what's taught online today is noise - recycled tactics, surface-level courses, 
            and influencer-led programs. <span className="text-foreground font-medium">Consulting. exists to fix that.</span> We built 
            our own empire using the systems we now install for others. If you're already winning 
            but want to win faster, cleaner, and at scale, you're in the right place.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-16 pt-16 border-t border-border"
          >
            <h3 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-4">
              Where the Best Go to Get Even Better
            </h3>
            <p className="text-muted-foreground text-lg">
              Consulting. is the private consulting firm for business owners who are already winning - 
              and who want to go further and faster.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
