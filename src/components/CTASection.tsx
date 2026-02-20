import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="relative py-36 bg-card overflow-hidden">
      {/* Smooth gradient transition to footer */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-primary" />
      
      {/* Dramatic layered glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-accent/[0.05] rounded-full blur-[150px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/[0.1] rounded-full blur-[100px]" style={{ animation: 'pulse-glow 4s ease-in-out infinite' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-accent/[0.15] rounded-full blur-[60px]" style={{ animation: 'pulse-glow 3s ease-in-out infinite 1s' }} />

      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50, filter: 'blur(12px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="section-label">Your move</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05] tracking-tight mb-6">
            Stop duct-taping. <br className="hidden sm:block" /><span className="text-gradient">Start compounding.</span>
          </h2>
          <p className="section-subtitle mx-auto mb-14">
            15 minutes. One call. We'll dissect your biggest bottleneck and hand you 
            a roadmap—whether you hire us or not. That's how confident we are.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="group w-full sm:w-auto text-base px-10 py-6 shadow-[0_0_40px_hsl(175_60%_45%_/_0.25)]">
              <Link to="/contact">
                Show Me How You Operate
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="w-full sm:w-auto text-base px-10 py-6">
              <Link to="/services">See the Full Arsenal</Link>
            </Button>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-sm text-muted-foreground mt-12"
          >
            No commitment. No fluff. Just a free blueprint from operators who've done this hundreds of times.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
