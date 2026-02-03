import { motion } from 'framer-motion';

const transformations = [
  {
    title: 'Stop shouting into the void',
    description: 'Transform marketing that feels scattered and ineffective into a clear system that consistently attracts the right customers to your business.',
  },
  {
    title: 'Become the trusted choice',
    description: 'Build your reputation as the go-to source of expertise and reliability, establishing genuine authority within your market.',
  },
  {
    title: 'Drive consistent results',
    description: 'Implement proven systems that turn random marketing activities into predictable growth, bringing you quality leads month after month.',
  },
  {
    title: 'Unite your teams',
    description: 'Align sales and marketing around shared goals and clear processes, creating seamless customer experiences that drive better results.',
  },
];

const TransformationSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="section-label">The Transformation</p>
          <h2 className="section-title text-foreground">
            Shift from frustrating marketing to lasting success
          </h2>
          <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
            With proven guidance and a clear system, you can transform how your business 
            approaches marketing, enabling you to bring in the customers your business needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {transformations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-8 rounded-lg border border-border hover:border-primary/30 transition-colors"
            >
              <h3 className="font-display text-xl font-medium text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
