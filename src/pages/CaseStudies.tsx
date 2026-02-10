import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import SEO from '@/components/SEO';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, Users, TrendingUp } from 'lucide-react';

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background noise-overlay">
      <Navbar />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-background" />
        <div className="floating-orb w-[400px] h-[400px] bg-accent/[0.06] top-[10%] right-[10%]" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <p className="section-label">Case Studies</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-[1.05] mb-6">
              Results in <span className="text-gradient">progress</span>
            </h1>
            <p className="section-subtitle">
              We are currently building out our first client engagements. 
              Check back soon for detailed, anonymised case studies with real outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="relative pb-20 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-card" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl mx-auto"
          >
            <div className="card-glass p-8 md:p-12">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                What our case studies will include
              </h2>
              
              <div className="space-y-6">
                {[
                  { icon: Users, title: 'Client Profile', desc: 'Creator type, niche, audience size, and starting point—anonymised to protect privacy.' },
                  { icon: FileText, title: 'The Constraint', desc: 'What was broken or missing—where revenue leaked or operations stalled.' },
                  { icon: TrendingUp, title: 'Results as Ranges', desc: 'Honest outcomes framed as ranges with context—no absolute guarantees, just benchmarks.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.06]">
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

      <CTASection />
      <Footer />
    </div>
  );
};

export default CaseStudies;
