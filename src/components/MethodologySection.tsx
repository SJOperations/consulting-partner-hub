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
    <section className="relative py-28 bg-background overflow-hidden">
      {/* Floating orbs */}
      <div className="floating-orb w-[300px] h-[300px] bg-accent/[0.05] top-20 -left-20" style={{ animationDelay: '5s' }} />
      <div className="floating-orb w-[200px] h-[200px] bg-teal-light/[0.04] bottom-10 right-10" style={{ animationDelay: '12s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <p className="section-label">Our Methodology</p>
          <h2 className="section-title mb-6">
            Diagnose. Design. Deploy. Optimise.
          </h2>
          <p className="section-subtitle mx-auto">
            A systematic approach to building your growth engine—no guesswork, no fluff.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-border to-transparent" />
              )}
              
              <div className="card-glass p-8 text-center h-full">
                {/* Step number */}
                <div className="absolute top-4 right-4 text-xs font-display font-bold text-accent/30">
                  0{index + 1}
                </div>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 text-accent mb-5 group-hover:bg-accent/20 group-hover:shadow-[0_0_30px_hsl(175_60%_45%_/_0.15)] transition-all duration-500">
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
