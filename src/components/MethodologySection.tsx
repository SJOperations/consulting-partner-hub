import { motion } from 'framer-motion';
import { Search, PenTool, Rocket, RefreshCw } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Diagnose',
    description: 'We audit your current setup, identify revenue leaks, and map your growth constraints.',
  },
  {
    icon: PenTool,
    title: 'Design',
    description: 'We architect your offer, funnel, and automation stack tailored to your audience.',
  },
  {
    icon: Rocket,
    title: 'Deploy',
    description: 'We build and launch everything—pages, emails, CRM, appointment systems—fast.',
  },
  {
    icon: RefreshCw,
    title: 'Optimise',
    description: 'We monitor KPIs weekly, iterate on what works, and compound your results.',
  },
];

const MethodologySection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="section-label">Our Methodology</p>
          <h2 className="section-title mb-6">
            Diagnose. Design. Deploy. Optimise.
          </h2>
          <p className="section-subtitle mx-auto">
            A systematic approach to building your growth engine—no guesswork, no fluff.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-border" />
              )}
              
              <div className="relative bg-card p-6 rounded-lg border border-border text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
                  <step.icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
