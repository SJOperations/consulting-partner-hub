import { motion } from 'framer-motion';

const challenges = [
  "We're spending too much on marketing, but can't tell if it's working.",
  "Customer numbers have dropped, despite increased marketing efforts.",
  "Our sales team struggles to close deals because customers don't trust us yet.",
  "AI is changing how customers find us, but we don't know how to adapt.",
  "Our website looks good, but doesn't bring in enough quality leads.",
  "We keep trying different marketing tactics, but nothing sticks.",
  "Our marketing feels random. We need a clear plan that actually works.",
  "Competitors are using AI tools while we're still doing everything manually.",
];

const ProblemSection = () => {
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
          <p className="section-label">The Marketing Reality</p>
          <h2 className="section-title text-foreground mb-6">
            Growing your business is harder than it's ever been
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Today's buyers want to work with brands they trust, not just those that advertise the most.
            But the marketing landscape has shifted dramatically. AI, search, and social media have 
            changed how buyers find you.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center font-semibold text-foreground mb-12"
        >
          That's causing you to face these familiar challenges:
        </motion.p>

        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-muted p-6 rounded-lg border border-border"
            >
              <p className="text-foreground font-medium italic">"{challenge}"</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16 max-w-2xl mx-auto"
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            The old ways of marketing aren't cutting it anymore. Cold outreach gets ignored, 
            generic content fails to connect, and pushy sales tactics waste good opportunities.
          </p>
          <p className="text-lg font-semibold text-foreground mt-4">
            To break through, you must choose to build genuine trust with customers.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
