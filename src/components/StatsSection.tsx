import { motion } from 'framer-motion';
import { Clock, Shield, DollarSign, Calendar } from 'lucide-react';

const stats = [
  { icon: Calendar, value: '5+', label: 'Years in Ops', sublabel: 'Marketing, systems & scale' },
  { icon: Clock, value: '24hr', label: 'Response SLA', sublabel: 'Every message. No exceptions.' },
  { icon: Shield, value: '100%', label: 'Asset Ownership', sublabel: 'Everything we build is yours' },
  { icon: DollarSign, value: '$0', label: 'Upfront Cost', sublabel: 'You pay when you see results' },
];

const StatsSection = () => {
  return (
    <section className="relative py-16 bg-card overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 text-accent mb-3 group-hover:bg-accent/20 transition-colors duration-500">
                <stat.icon className="w-5 h-5" />
              </div>
              <div className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="font-display text-sm font-semibold text-foreground mb-0.5">
                {stat.label}
              </div>
              <div className="text-xs text-muted-foreground">
                {stat.sublabel}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
