import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Crown, Users, Rocket, Zap } from 'lucide-react';

const programs = [
  {
    icon: Crown,
    title: 'Quantum (Advisory)',
    description: 'For high-level founders earning $20K+/mo who want to install the exact systems that scaled our own companies.',
    featured: true,
  },
  {
    icon: Users,
    title: 'Masterminds',
    description: 'Invite-only in-person gatherings with the most elite minds in the digital space.',
    featured: false,
  },
  {
    icon: Rocket,
    title: 'Monetise',
    description: 'For early-stage founders building and launching their first digital product business.',
    featured: false,
  },
  {
    icon: Zap,
    title: 'UpLevel',
    description: 'For founders seeking hands-on consulting support to build and launch a digital product business.',
    featured: false,
  },
];

const ProgramsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="programs" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div ref={ref} className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4"
          >
            Our Programs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Tailored solutions for every stage of your business journey
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 * (index + 1) }}
              className={`card-feature group cursor-pointer ${
                program.featured ? 'border-primary/50 relative overflow-hidden' : ''
              }`}
            >
              {program.featured && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gold" />
              )}
              
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                program.featured 
                  ? 'bg-primary/20 group-hover:bg-primary/30' 
                  : 'bg-muted group-hover:bg-muted/80'
              }`}>
                <program.icon className={`w-7 h-7 ${
                  program.featured ? 'text-primary' : 'text-muted-foreground'
                }`} />
              </div>

              <h3 className="font-display text-xl font-medium text-foreground mb-3">
                {program.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {program.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
