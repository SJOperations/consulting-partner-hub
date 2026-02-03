import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Zap, Target, BarChart3, Eye } from 'lucide-react';

const operatorCode = [
  { icon: Shield, title: 'Confidentiality', description: 'Your business stays your business. NDA on request.' },
  { icon: Eye, title: 'Clarity', description: 'No jargon, no fluff. You\'ll always know what we\'re doing and why.' },
  { icon: Zap, title: 'Speed', description: 'We move fast. First wins within 72 hours of kickoff.' },
  { icon: Target, title: 'Precision', description: 'Every action ties back to a measurable outcome.' },
  { icon: BarChart3, title: 'Reporting', description: 'Weekly numbers, monthly strategy. Full transparency.' },
];

const About = () => {
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
            <p className="section-label">About SJOperations</p>
            <h1 className="section-title mb-6">
              Turn creators into resilient businesses—without turning them into operators
            </h1>
            <p className="section-subtitle">
              We exist to give creators and founders the back-end infrastructure 
              they need to scale, without the overhead of building it themselves.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
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
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-secondary p-8 rounded-lg border border-border">
                <blockquote className="text-xl font-display text-foreground italic mb-4">
                  "You create. We compound."
                </blockquote>
                <p className="text-muted-foreground text-sm">
                  — The SJOperations philosophy
                </p>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-accent/10 rounded-lg -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Operator's Code */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 text-accent mb-4">
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

      {/* Proof of Competence */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="section-label">Proof of Competence</p>
            <h2 className="font-display text-3xl font-semibold text-foreground mb-4">
              What we've shipped
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're operators, not theorists. Here's what we've built across engagements:
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: '50+', label: 'Funnels shipped' },
              { value: '200+', label: 'Automations deployed' },
              { value: '100+', label: 'SOPs documented' },
              { value: '30+', label: 'Dashboards built' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-6 rounded-lg border border-border text-center"
              >
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="section-label">The Team</p>
            <h2 className="font-display text-3xl font-semibold text-foreground mb-6">
              Quiet operators. Loud results.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We're a small, focused team of operators with backgrounds in 
              marketing, automation, and business operations. We've worked 
              in-house at startups, led marketing at agencies, and built 
              systems for some of the fastest-growing personal brands.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We stay small intentionally. Every client gets senior-level 
              attention, not juniors learning on your dime.
            </p>
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
              Ready to meet the operators?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's see if we're the right fit for your growth.
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

export default About;
