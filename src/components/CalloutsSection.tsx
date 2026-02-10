import { motion } from 'framer-motion';
import { Shield, Zap, Lock, Eye } from 'lucide-react';

const callouts = [
  {
    icon: Lock,
    title: 'Confidentiality-first',
    description: 'NDA available. Your data, your business—never shared.',
  },
  {
    icon: Zap,
    title: 'Minimal lift required',
    description: 'We implement. You approve. No homework.',
  },
  {
    icon: Shield,
    title: 'You own everything',
    description: 'All accounts, assets, and systems belong to you.',
  },
  {
    icon: Eye,
    title: 'Full transparency',
    description: 'Weekly reports, dashboard access, no black boxes.',
  },
];

const CalloutsSection = () => {
  return (
    <section className="relative py-24 bg-background overflow-hidden">
      {/* Smooth gradient transition to CTA */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-card" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {callouts.map((callout, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="card-glass p-6 group"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 text-accent mb-4 group-hover:bg-accent/20 transition-colors duration-500">
                <callout.icon className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {callout.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {callout.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CalloutsSection;
