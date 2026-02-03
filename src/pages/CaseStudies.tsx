import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, Users, TrendingUp } from 'lucide-react';

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <p className="section-label">Case Studies</p>
            <h1 className="section-title mb-6">
              Results in progress
            </h1>
            <p className="section-subtitle">
              We are currently building out our first client engagements. 
              Check back soon for detailed, anonymised case studies with real outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-card border border-border rounded-lg p-8 md:p-12">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                What our case studies will include
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Client Profile</h3>
                    <p className="text-muted-foreground text-sm">
                      Creator type, niche, audience size, and starting point—anonymised to protect privacy.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">The Constraint</h3>
                    <p className="text-muted-foreground text-sm">
                      What was broken or missing—where revenue leaked or operations stalled.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Results as Ranges</h3>
                    <p className="text-muted-foreground text-sm">
                      Honest outcomes framed as ranges with context—no absolute guarantees, just benchmarks.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-muted-foreground text-sm mb-4">
                  In the meantime, the best way to understand how we work is to have a conversation.
                </p>
                <Button asChild className="group">
                  <Link to="/contact">
                    Book a Fit Call
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl font-semibold text-foreground mb-4">
              Be one of our first case studies
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Early clients get our full attention. Book a call and let us show you what we can build together.
            </p>
            <Button asChild size="lg" className="group">
              <Link to="/contact">
                Book a 15-Minute Fit Call
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
