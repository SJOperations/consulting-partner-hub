import { motion } from 'framer-motion';
import { Settings, Workflow, BarChart3, Clock } from 'lucide-react';

const values = [
  { 
    title: 'Full-Stack Operations', 
    description: 'From offer design to analytics—everything your back end needs',
    icon: Settings 
  },
  { 
    title: 'Systems, Not Band-Aids', 
    description: 'We build infrastructure that scales, not quick fixes that break',
    icon: Workflow 
  },
  { 
    title: 'Transparent Reporting', 
    description: 'Weekly KPIs and dashboards—you always know what is working',
    icon: BarChart3 
  },
  { 
    title: 'Minimal Lift Required', 
    description: 'We implement, you approve. No homework, no endless meetings',
    icon: Clock 
  },
];

const TrustSection = () => {
  return (
    <section className="relative py-20 bg-card border-b border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="section-label">Why SJOperations</p>
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
            Operators, not consultants
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary p-6 rounded-lg border border-border text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 text-accent mb-4">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
