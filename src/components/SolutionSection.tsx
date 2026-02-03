import { motion } from 'framer-motion';
import { Button } from './ui/button';
import aboutPhoto from '@/assets/about-photo.jpg';

const SolutionSection = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">The Solution</p>
            <h2 className="section-title text-foreground mb-6">
              Expert marketing guidance to turn your brand into your customers' trusted choice
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Building trust creates reliable revenue growth. Whether you need hands-on marketing 
              support, strategic guidance, or comprehensive training for your team, I'll show you 
              how to build genuine customer trust and create sustainable growth.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Together, we'll develop marketing that consistently brings in quality leads, 
              supports your sales team, and turns prospects into loyal customers.
            </p>
            <Button variant="accent" size="lg">
              Let's Work Together
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img 
              src={aboutPhoto} 
              alt="Marketing consultant" 
              className="rounded-lg shadow-xl w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
