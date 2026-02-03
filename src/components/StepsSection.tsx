import { motion } from 'framer-motion';
import { Button } from './ui/button';

const steps = [
  {
    number: '01',
    title: 'Book a chat',
    description: "We'll dig deep on your most pressing marketing challenges and identify the right course of action, whether or not it's working with me.",
  },
  {
    number: '02',
    title: 'Get your clear roadmap',
    description: "Based on your needs, we'll choose the right service level and create a tailored plan with clear expectations and success metrics.",
  },
  {
    number: '03',
    title: 'See reliable results',
    description: 'Watch your marketing transform into a system that consistently brings quality leads and builds lasting customer trust.',
  },
];

const StepsSection = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70 mb-4">
            How We'll Work Together
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            Three simple steps to a trusted brand
          </h2>
          <p className="text-lg text-primary-foreground/80 mt-6 leading-relaxed">
            No complex onboarding or lengthy commitments. Just a straightforward path to 
            marketing that works and brings you results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="text-center"
            >
              <div className="text-6xl font-display font-medium text-primary-foreground/30 mb-4">
                {step.number}
              </div>
              <h3 className="font-display text-2xl font-medium text-primary-foreground mb-4">
                {step.title}
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <Button variant="outlineWhite" size="lg">
            Let's Work Together
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default StepsSection;
