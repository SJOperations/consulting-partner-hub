import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="section-label">Ready to scale?</p>
          <h2 className="section-title mb-6">
            Let's build your back end
          </h2>
          <p className="section-subtitle mx-auto mb-10">
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

          <p className="text-sm text-muted-foreground mt-8">
            No commitment. No pressure. Just clarity.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
