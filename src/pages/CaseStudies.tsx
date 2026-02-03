import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Users, TrendingUp } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    profile: 'Business Coach',
    niche: 'Executive coaching for tech leaders',
    audienceSize: '15K LinkedIn followers',
    constraint: 'Leads were falling through the cracks. No CRM, no follow-up system. Booked calls manually via DMs.',
    intervention: 'Installed CRM with lead scoring, built qualification funnel, automated appointment booking and reminders, created nurture sequence.',
    results: [
      'Qualified appointments: 3–5/week → 8–12/week',
      'Show rate: 55% → 82%',
      'Time to first sale after lead: 14 days → 6 days',
    ],
    timeline: '60 days',
    stack: ['HighLevel', 'Calendly', 'Zapier', 'Notion'],
  },
  {
    id: 2,
    profile: 'Course Creator',
    niche: 'Productivity for knowledge workers',
    audienceSize: '45K email list, 80K YouTube subscribers',
    constraint: 'Launching courses manually each quarter. No evergreen funnel. High refund rate due to poor onboarding.',
    intervention: 'Built evergreen webinar funnel, redesigned checkout with order bumps, created automated onboarding sequence, installed refund-prevention touchpoints.',
    results: [
      'Monthly revenue: £15K → £28K (range: £22K–£35K)',
      'Refund rate: 12% → 4%',
      'Customer support tickets: Down 40%',
    ],
    timeline: '90 days',
    stack: ['Kajabi', 'Stripe', 'ConvertKit', 'Loom'],
  },
  {
    id: 3,
    profile: 'Consultant',
    niche: 'Marketing strategy for SaaS startups',
    audienceSize: '8K newsletter subscribers',
    constraint: 'Inconsistent content output. No repurposing system. Spending 15+ hours/week on content that wasn\'t converting.',
    intervention: 'Created content SOP and calendar, hired and briefed VA, built repurposing workflow (1 long-form → 12 pieces), installed analytics tracking.',
    results: [
      'Content output: 2 posts/week → 12 pieces/week',
      'Time spent on content: 15 hrs → 4 hrs',
      'Inbound enquiries: +65% in 60 days',
    ],
    timeline: '45 days',
    stack: ['Notion', 'Airtable', 'Buffer', 'Descript'],
  },
];

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
              Real operators. Real outcomes.
            </h1>
            <p className="section-subtitle">
              Anonymised, outcomes-based stories from creators and founders we've worked with. 
              Results shown as ranges—no guarantees, just benchmarks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg overflow-hidden"
              >
                <div className="p-8 md:p-10">
                  {/* Header */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent rounded text-sm">
                      <Users className="w-4 h-4" />
                      {study.profile}
                    </span>
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-secondary text-muted-foreground rounded text-sm">
                      <Clock className="w-4 h-4" />
                      {study.timeline}
                    </span>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div>
                      <div className="mb-6">
                        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                          Profile
                        </h3>
                        <p className="text-foreground">{study.niche}</p>
                        <p className="text-muted-foreground text-sm mt-1">{study.audienceSize}</p>
                      </div>

                      <div className="mb-6">
                        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                          The Constraint
                        </h3>
                        <p className="text-muted-foreground">{study.constraint}</p>
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                          What We Built
                        </h3>
                        <p className="text-muted-foreground">{study.intervention}</p>
                      </div>
                    </div>

                    {/* Right Column - Results */}
                    <div className="bg-secondary/50 p-6 rounded-lg">
                      <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-4 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        Results
                      </h3>
                      <ul className="space-y-3">
                        {study.results.map((result, i) => (
                          <li key={i} className="text-foreground font-medium">
                            {result}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 pt-4 border-t border-border">
                        <h4 className="text-sm font-semibold text-muted-foreground mb-2">Stack Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {study.stack.map((tool, i) => (
                            <span key={i} className="px-2 py-1 bg-background border border-border rounded text-xs text-muted-foreground">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
              Ready to be our next case study?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Every engagement starts with a 15-minute fit call. No pressure, just clarity.
            </p>
            <Button asChild size="lg" className="group">
              <Link to="/contact">
                Book Your Fit Call
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
