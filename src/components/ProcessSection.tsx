import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Audit & Plan',
      description: 'Deep dive into your current setup. Identify revenue leaks, bottlenecks, and quick wins.',
    },
    {
      number: '02',
      title: 'Offer & Funnel',
      description: 'Define your promise, structure pricing tiers, build landing pages and checkout flows.',
    },
    {
      number: '03',
      title: 'CRM & Automations',
      description: 'Wire up lead routing, tagging, nurturing sequences, and pipeline management.',
    },
    {
      number: '04',
      title: 'Appointment Setting',
      description: 'Install calendar systems, qualification flows, and show-up optimisation.',
    },
    {
      number: '05',
      title: 'Reporting & Iteration',
      description: 'Weekly KPI dashboards, strategy calls, and continuous optimisation.',
    },
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="section-label">The Process</p>
          <h2 className="section-title mb-6">
            Five steps to a scalable back end
          </h2>
          <p className="section-subtitle mx-auto">
            We handle the build. You stay focused on creating and serving clients.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="process-step"
            >
              <div className="flex items-start gap-6">
                <span className="text-accent font-display font-bold text-lg">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button asChild size="lg" className="group">
            <Link to="/contact">
              Start Your Build
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
