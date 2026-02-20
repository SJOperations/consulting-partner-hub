import { motion } from 'framer-motion';
import { Search, PenTool, Rocket, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const phases = [
  {
    icon: Search,
    title: 'Diagnose',
    description: 'We tear apart your current setup, expose every revenue leak, and pinpoint exactly where money is being left on the table.',
  },
  {
    icon: PenTool,
    title: 'Design',
    description: 'We architect a custom growth engine—offer, funnel, CRM, automations—precision-built to convert your specific audience.',
  },
  {
    icon: Rocket,
    title: 'Deploy',
    description: 'We build and ship everything—fast. Pages, emails, CRM, booking systems, dashboards. You wake up to a finished machine.',
  },
  {
    icon: RefreshCw,
    title: 'Optimise',
    description: 'We obsess over the numbers. Weekly iterations, relentless testing, compounding gains. Your growth never plateaus.',
  },
];

const MethodologyProcessSection = () => {
  return (
    <section className="relative py-32 bg-background overflow-hidden">
      {/* Smooth gradient transitions */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-background" />
      
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
          <p className="section-label">Our Playbook</p>
          <h2 className="section-title mb-6">
            Four phases. <span className="text-gradient">Zero guesswork.</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Every engagement follows a battle-tested framework that turns chaos into a machine. We've done this hundreds of times.
          </p>
        </motion.div>

        {/* Horizontal timeline layout */}
        <div className="relative mb-20">
          {/* Connector line across all phases */}
          <div className="hidden md:block absolute top-[52px] left-[12%] right-[12%] h-px bg-gradient-to-r from-accent/30 via-accent/10 to-accent/30" />

          <div className="grid md:grid-cols-4 gap-8">
            {phases.map((phase, index) => (
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
                className="relative group text-center"
              >
                {/* Phase number + icon node */}
                <div className="relative mx-auto mb-6">
                  <div className="w-[104px] h-[104px] mx-auto rounded-3xl bg-gradient-to-br from-card to-background border border-white/[0.08] flex flex-col items-center justify-center group-hover:border-accent/30 group-hover:shadow-[0_0_40px_hsl(175_60%_45%_/_0.12)] transition-all duration-500">
                    <span className="text-[10px] font-display font-bold text-accent/40 uppercase tracking-widest mb-1">Phase</span>
                    <phase.icon className="w-7 h-7 text-accent" />
                  </div>
                  {/* Step number badge */}
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center">
                    <span className="text-[11px] font-display font-bold text-accent">
                      {index + 1}
                    </span>
                  </div>
                </div>

                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {phase.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-[260px] mx-auto">
                  {phase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <Button asChild size="lg" className="group shadow-[0_0_30px_hsl(175_60%_45%_/_0.15)]">
            <Link to="/contact">
              I'm Ready for Quiet Growth
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default MethodologyProcessSection;
