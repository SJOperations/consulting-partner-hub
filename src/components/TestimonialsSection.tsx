import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Jean Hollaender',
    role: 'Founder of Liberty Webi',
    quote: 'Before Quantum, our biggest launch capped at $2.8M. After joining, we executed everything we found inside — and just closed a record-breaking $5.8M launch.',
    highlight: 'we just closed a record-breaking $5.8M launch.',
  },
  {
    name: 'Davis Pfaff',
    role: 'Co-Founder of Pfaff Brothers',
    quote: 'The team offers unparalleled transparency, sharing invaluable insights into personal branding and information products. Their masterclass is a game-changer for anyone serious about growth in this space.',
    highlight: 'Their masterclass is a game-changer',
  },
  {
    name: 'Alexander Ma',
    role: 'Founder of Wedding Filmmaker Mastery',
    quote: 'Iman helped me reframe my entire approach to business, inspiring me to think bigger beyond just coaching and focus on building my empire.',
    highlight: 'reframe my entire approach to business',
  },
  {
    name: 'Jan Srajer',
    role: 'Founder of Funded Mind',
    quote: 'The team helped me establish a solid foundation for my business, enabling me to surpass $70,000 in daily revenue three times in 2024.',
    highlight: '$70,000 in daily revenue',
  },
  {
    name: 'Fidel Guajardo',
    role: 'Founder of LevelUp REI',
    quote: 'Within the first month I was in Quantum, I made my investment back by just implementing a few of the strategies that I learnt inside.',
    highlight: 'made my investment back',
  },
  {
    name: 'Miles Longstreth',
    role: 'Founder of Flips4Miles',
    quote: "I absolutely love the access to the team, the information we've got about how to build a super profitable, lean info-business where you don't need to spend a ton of money on ads.",
    highlight: 'super profitable, lean info-business',
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div ref={ref} className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground"
          >
            What Our Clients Are Saying
          </motion.h2>
        </div>

        {/* Main Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="card-glass p-8 md:p-12 relative">
            <Quote className="absolute top-6 left-6 w-8 h-8 text-primary/30" />
            
            <div className="text-center">
              <motion.p
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-display italic"
              >
                "{testimonials[currentIndex].quote}"
              </motion.p>

              <motion.div
                key={`author-${currentIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-display font-semibold text-primary">
                    {testimonials[currentIndex].name.charAt(0)}
                  </span>
                </div>
                <h4 className="font-display text-lg font-medium text-foreground">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {testimonials[currentIndex].role}
                </p>
              </motion.div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex 
                        ? 'bg-primary w-6' 
                        : 'bg-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-center text-xs text-muted-foreground mt-8 max-w-3xl mx-auto"
        >
          All testimonials on this page are from real clients. These individuals shared their experiences voluntarily, 
          and their results are not typical. Your results may vary based on factors like your background, effort, 
          skill level, market conditions, and implementation of strategies.
        </motion.p>
      </div>
    </section>
  );
};

export default TestimonialsSection;
