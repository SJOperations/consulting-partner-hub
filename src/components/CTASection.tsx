import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="relative py-32 bg-card overflow-hidden">
      {/* Smooth gradient transition to footer */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-primary" />
      
      {/* Dramatic glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/[0.06] rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/[0.1] rounded-full blur-[80px]" style={{ animation: 'pulse-glow 4s ease-in-out infinite' }} />

      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="section-label">Ready to scale?</p>
          <h2 className="section-title mb-6">
            Let's build your back end
          </h2>
          <p className="section-subtitle mx-auto mb-12">
            Book a 15-minute fit call. We'll dig into your most pressing marketing 
            challenges and identify the right course of action—whether or not it's working with us.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="group w-full sm:w-auto">
              <Link to="/contact">
                Book a 15-Minute Fit Call
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-sm text-muted-foreground mt-10"
          >
            No commitment. No pressure. Just clarity.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
