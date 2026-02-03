import { motion } from 'framer-motion';
import { Shield, Clock, Target, BarChart3 } from 'lucide-react';

const stats = [
  { value: '50+', label: 'Funnels Built', icon: Target },
  { value: '200+', label: 'Automations Deployed', icon: Shield },
  { value: '72h', label: 'Avg. Time to First Win', icon: Clock },
  { value: '15+', label: 'Years Combined Experience', icon: BarChart3 },
];

const TrustSection = () => {
  return (
    <section className="py-20 bg-card border-y border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="section-label">Proof of Competence</p>
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
            Operators, not consultants
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 text-accent mb-4">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
