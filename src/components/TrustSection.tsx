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
    <section className="relative py-24 bg-card overflow-hidden">
      {/* Smooth gradient transitions */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-background" />
      
      {/* Floating orb */}
      <div className="floating-orb w-[400px] h-[400px] bg-accent/[0.06] -top-20 -right-20" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="section-label">Why SJOperations</p>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">
            Operators, not consultants
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="card-glass p-6 text-center group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent mb-4 group-hover:bg-accent/20 transition-colors duration-500">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
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
