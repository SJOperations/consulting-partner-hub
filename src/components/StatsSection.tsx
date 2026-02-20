import { motion } from 'framer-motion';
import { Clock, Shield, DollarSign, Calendar } from 'lucide-react';

const stats = [
  { icon: Calendar, value: '5+', label: 'Years in Ops', sublabel: 'Marketing, systems & scale' },
  { icon: Clock, value: '24hr', label: 'Response SLA', sublabel: 'Every message. No exceptions.' },
  { icon: Shield, value: '100%', label: 'Asset Ownership', sublabel: 'Everything we build is yours' },
  { icon: DollarSign, value: '$0', label: 'Upfront Cost', sublabel: 'We earn when you earn' },
];

const StatsSection = () => {
  return (
    <section className="relative py-6 bg-card overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="card-shimmer p-1"
        >
          <div className="rounded-2xl bg-gradient-to-r from-card/80 via-background/50 to-card/80 px-6 py-8 md:py-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`text-center py-4 lg:py-0 ${
                    index < stats.length - 1 ? 'lg:border-r lg:border-white/[0.06]' : ''
                  } ${index < 2 ? 'border-b lg:border-b-0 border-white/[0.06]' : ''}`}
                >
                  <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-accent/10 text-accent mb-3">
                    <stat.icon className="w-4 h-4" />
                  </div>
                  <div className="font-display text-3xl md:text-4xl font-bold text-foreground mb-0.5 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="font-display text-sm font-semibold text-foreground/90 mb-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-muted-foreground">
                    {stat.sublabel}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
