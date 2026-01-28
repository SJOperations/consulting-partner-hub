import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { label: 'New Sign Ups', value: '750K', growth: '+13.1%' },
  { label: 'Impressions', value: '5.7B', growth: '+28.4%' },
  { label: 'Revenue', value: '$8.6M', growth: '+20.4%' },
  { label: 'Conversion Rate', value: '68.5%', growth: '+30.9%' },
  { label: 'Customers', value: '1.5M', growth: '+25.6%' },
  { label: 'Checkouts', value: '665K', growth: '+28.6%' },
];

const StatsMarquee = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-16 overflow-hidden border-y border-border">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7 }}
      >
        <h3 className="font-display text-2xl md:text-3xl font-medium text-center text-foreground mb-12">
          The Numbers Don't Lie.
        </h3>
        
        <div className="marquee-container">
          <div className="marquee-content">
            {[...stats, ...stats].map((stat, index) => (
              <div
                key={index}
                className="inline-flex flex-col items-center justify-center px-12 md:px-16"
              >
                <span className="text-3xl md:text-4xl font-display font-semibold text-foreground">
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </span>
                <span className="text-xs text-primary font-medium mt-1">
                  {stat.growth}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default StatsMarquee;
