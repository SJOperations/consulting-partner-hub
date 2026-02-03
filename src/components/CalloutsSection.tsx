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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {callouts.map((callout, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-lg border border-border hover:border-accent/30 transition-all"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 text-accent mb-4">
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
