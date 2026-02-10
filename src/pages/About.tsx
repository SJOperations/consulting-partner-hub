import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import SEO from '@/components/SEO';
import { motion } from 'framer-motion';
import { Shield, Zap, Target, BarChart3, Eye } from 'lucide-react';

const operatorCode = [
  { icon: Shield, title: 'Confidentiality', description: 'Your business stays your business. NDA on request.' },
  { icon: Eye, title: 'Clarity', description: 'No jargon, no fluff. You\'ll always know what we\'re doing and why.' },
  { icon: Zap, title: 'Speed', description: 'We move fast and prioritise momentum over perfection.' },
  { icon: Target, title: 'Precision', description: 'Every action ties back to a measurable outcome.' },
  { icon: BarChart3, title: 'Reporting', description: 'Weekly numbers, monthly strategy. Full transparency.' },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background noise-overlay">
      <Navbar />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-card" />
        <div className="floating-orb w-[400px] h-[400px] bg-accent/[0.06] top-[15%] right-[5%]" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <p className="section-label">About SJOperations</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-[1.05] mb-6">
              Turn creators into resilient businesses—without turning them into{' '}
              <span className="text-gradient">operators</span>
            </h1>
            <p className="section-subtitle">
              We exist to give creators and founders the back-end infrastructure 
              they need to scale, without the overhead of building it themselves.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="relative py-24 bg-card overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-background" />
        <div className="floating-orb w-[300px] h-[300px] bg-teal-light/[0.04] bottom-10 left-[10%]" style={{ animationDelay: '6s' }} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="section-label">Our Mission</p>
              <h2 className="font-display text-3xl font-semibold text-foreground mb-6">
                Systems over heroics
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Most creators burn out because they're trying to do everything. 
                They're creating content, serving clients, AND running operations—all at once.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We believe in quiet execution. Compounding over spikes. 
                Building systems that work whether you're on or off.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our job is to take the operational weight off your shoulders 
                so you can focus on what only you can do: create and connect.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="card-glass p-8">
                <blockquote className="text-xl font-display text-foreground italic mb-4">
                  "You create. We compound."
                </blockquote>
                <p className="text-muted-foreground text-sm">
                  — The SJOperations philosophy
                </p>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-accent/10 rounded-xl -z-10 blur-sm" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Operator's Code */}
      <section className="relative py-24 bg-background overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-secondary" />
        <div className="floating-orb w-[350px] h-[350px] bg-accent/[0.05] top-20 -right-20" style={{ animationDelay: '10s' }} />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <p className="section-label">The Operator's Code</p>
            <h2 className="font-display text-3xl font-semibold text-foreground">
              How we work
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6">
            {operatorCode.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="card-glass p-6 text-center group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent mb-4 group-hover:bg-accent/20 group-hover:shadow-[0_0_20px_hsl(175_60%_45%_/_0.15)] transition-all duration-500">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="relative py-24 bg-secondary overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-background" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12"
          >
            <p className="section-label">What We Build</p>
            <h2 className="font-display text-3xl font-semibold text-foreground mb-4">
              The systems behind your growth
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're operators, not theorists. Here's the infrastructure we install for every client:
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Funnels & Pages', desc: 'Landing pages, checkout flows, lead magnets' },
              { title: 'Automations', desc: 'Email sequences, CRM workflows, lead routing' },
              { title: 'SOPs & Docs', desc: 'Documented processes your team can follow' },
              { title: 'Dashboards', desc: 'Real-time KPIs and performance tracking' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="card-glass p-6"
              >
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative py-24 bg-background overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-card" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="section-label">The Team</p>
            <h2 className="font-display text-3xl font-semibold text-foreground mb-6">
              Small team. Big ownership.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We're a focused operations team with experience in marketing, 
              automation, and business systems. We've worked with startups, 
              agencies, and growing personal brands.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We stay small intentionally. Every client gets direct access 
              to the people doing the work—no account managers, no handoffs.
            </p>
          </motion.div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default About;
