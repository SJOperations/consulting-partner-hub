import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Done-for-you',
    subtitle: '(execution)',
    description: "For founders who need momentum fast and don't yet have an in-house team. Hands-on marketing execution built transparently so your people can take over later.",
  },
  {
    title: 'Done-with-you',
    subtitle: '(leadership)',
    description: 'For growing businesses with a marketing presence that need stronger strategy. High-level direction and process improvement without hiring full-time leadership.',
  },
  {
    title: 'Done-by-you',
    subtitle: '(coaching)',
    description: 'For teams ready to run their own marketing engine with confidence. Coaching and frameworks that build lasting internal capability.',
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="section-label">Your Options</p>
          <h2 className="section-title text-foreground">
            Choose your path to building trust, and independence
          </h2>
          <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
            Every business starts from a different place. These three paths meet you where 
            you are, from hands-on execution to complete in-house mastery.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-8 rounded-lg border border-border hover:border-primary/30 transition-all hover:shadow-lg group cursor-pointer"
            >
              <h3 className="font-display text-2xl font-medium text-foreground mb-1">
                {service.title}
              </h3>
              <p className="text-primary font-medium mb-4">{service.subtitle}</p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider group-hover:gap-3 transition-all"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
