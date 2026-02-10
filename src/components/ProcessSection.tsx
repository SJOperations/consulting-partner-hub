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
    <section className="relative py-28 bg-card overflow-hidden">
      {/* Accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/20 to-transparent" />
      
      {/* Floating orb */}
      <div className="floating-orb w-[500px] h-[500px] bg-accent/[0.04] -bottom-40 -right-40" style={{ animationDelay: '8s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
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
              initial={{ opacity: 0, x: -30, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="relative pl-12 pb-12 last:pb-0 group"
            >
              {/* Timeline line */}
              {index < steps.length - 1 && (
                <div className="absolute left-[11px] top-8 bottom-0 w-px bg-gradient-to-b from-accent/30 to-border" />
              )}
              {/* Timeline dot */}
              <div className="absolute left-0 top-1 w-6 h-6 rounded-full border-2 border-accent/40 bg-background group-hover:border-accent group-hover:shadow-[0_0_15px_hsl(175_60%_45%_/_0.3)] transition-all duration-500">
                <div className="absolute inset-1 rounded-full bg-accent/20 group-hover:bg-accent/40 transition-colors duration-500" />
              </div>

              <div className="flex items-start gap-6">
                <span className="text-accent font-display font-bold text-lg min-w-[2rem]">
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
          className="text-center mt-16"
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
