import { motion } from 'framer-motion';
import { Shield, Zap, Lock, Eye } from 'lucide-react';

const callouts = [
  {
    icon: Lock,
    title: 'Vault-level confidentiality',
    description: 'NDA on day one. Your strategy, your data, your IP—locked down and never shared. Period.',
  },
  {
    icon: Zap,
    title: 'You do nothing',
    description: 'We handle every detail. You just say yes or no. That\'s the entire job description for you.',
  },
  {
    icon: Shield,
    title: 'You own every asset',
    description: 'Every account, every funnel, every automation—it\'s all yours. We never hold your business hostage.',
  },
  {
    icon: Eye,
    title: 'Radical transparency',
    description: 'Live dashboards, weekly reports, zero black boxes. You see exactly what we see—always.',
  },
];

const CalloutsSection = () => {
  return (
    <section className="relative py-28 bg-background overflow-hidden">
      {/* Smooth gradient transition to CTA */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-card" />
      
      {/* Section header */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="section-label">Our Guarantees</p>
          <h2 className="section-title">
            Built on <span className="text-gradient">trust.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {callouts.map((callout, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="card-glass p-7 group flex gap-5 items-start"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent/20 group-hover:shadow-[0_0_25px_hsl(175_60%_45%_/_0.15)] transition-all duration-500">
                <callout.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1.5">
                  {callout.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {callout.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CalloutsSection;
