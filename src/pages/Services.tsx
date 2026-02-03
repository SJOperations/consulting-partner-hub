import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Package, 
  Layout, 
  Settings, 
  Calendar, 
  FileText, 
  Mail, 
  BarChart3, 
  TrendingUp,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const servicePillars = [
  {
    icon: Package,
    title: 'Offer & Packaging',
    description: 'Define your promise, structure pricing tiers, and validate with quick tests.',
    deliverables: ['Offer articulation', 'Pricing strategy', 'Value ladder design'],
  },
  {
    icon: Layout,
    title: 'Funnel & Pages',
    description: 'Landing pages, checkout flows, upsells, email capture, and compliance.',
    deliverables: ['Landing pages', 'Checkout integration', 'Lead magnets'],
  },
  {
    icon: Settings,
    title: 'CRM & Automations',
    description: 'Lead routing, tagging, nurturing sequences, pipeline management, and reminders.',
    deliverables: ['CRM setup', 'Lead tagging', 'Nurture sequences'],
  },
  {
    icon: Calendar,
    title: 'Appointment Setting',
    description: 'Calendar integration, qualification flows, scripts, and show-up systems.',
    deliverables: ['Calendar booking', 'Qualification forms', 'Reminder sequences'],
  },
  {
    icon: FileText,
    title: 'Content Operations',
    description: 'Content calendar, repurposing SOPs, VA briefing, and publishing workflows.',
    deliverables: ['Content calendar', 'SOPs & templates', 'VA briefings'],
  },
  {
    icon: Mail,
    title: 'Email & Lifecycle',
    description: 'Welcome sequences, nurture campaigns, sales emails, and win-back flows.',
    deliverables: ['Welcome series', 'Sales sequences', 'Re-engagement'],
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    description: 'KPI dashboards, weekly summaries, and monthly strategic reviews.',
    deliverables: ['Live dashboard', 'Weekly reports', 'Monthly strategy'],
  },
  {
    icon: TrendingUp,
    title: 'Optional Paid Growth',
    description: 'Retargeting and simple acquisition campaigns when appropriate.',
    deliverables: ['Retargeting setup', 'Audience building', 'Campaign management'],
  },
];

const tools = [
  'Notion', 'ClickUp', 'Airtable', 'Slack', 'Zapier', 'Make', 
  'HubSpot', 'HighLevel', 'Typeform', 'Calendly', 'Stripe', 
  'Whop', 'Google Analytics', 'Looker Studio'
];

const Services = () => {
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
            <p className="section-label">Our Services</p>
            <h1 className="section-title mb-6">
              We build, integrate, and operate the back end that turns attention into revenue
            </h1>
            <p className="section-subtitle">
              From offer design to revenue analytics—everything a personal brand needs 
              to scale without hiring a full operations team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Pillars */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicePillars.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="card-service"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 text-accent mb-4">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.deliverables.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables & Cadence */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="section-label">What You Get</p>
              <h2 className="font-display text-3xl font-semibold text-foreground mb-6">
                Deliverables & cadence
              </h2>
              <ul className="space-y-4">
                {[
                  'Weekly ops report with KPIs and action items',
                  'Live dashboard access—see your numbers anytime',
                  'Async comms via Slack or your preferred channel',
                  'One strategy call per week (30–45 min)',
                  'Full documentation of everything we build',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card p-8 rounded-lg border border-border"
            >
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Engagement Models
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Monthly Operating Agreement</h4>
                  <p className="text-muted-foreground text-sm">
                    Ongoing partnership with clear scope. Pause or cancel with 30 days' notice.
                  </p>
                </div>
                <div className="pt-4 border-t border-border">
                  <h4 className="font-semibold text-foreground mb-2">30–90 Day Sprint</h4>
                  <p className="text-muted-foreground text-sm">
                    Focused build phase with defined milestones. Option to extend into ongoing support.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Toolstack */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="section-label">Toolstack Transparency</p>
            <h2 className="font-display text-3xl font-semibold text-foreground mb-4">
              We work with what works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're tool-agnostic—we use whatever fits your workflow and budget. 
              Here's what we typically work with:
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                className="px-4 py-2 bg-card border border-border rounded text-sm text-muted-foreground"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="section-label">Security & Confidentiality</p>
            <h2 className="font-display text-3xl font-semibold text-foreground mb-6">
              Your data stays yours
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 text-left">
              {[
                { title: 'Access Control', desc: 'Least-privilege policy—we only access what we need.' },
                { title: 'NDA Available', desc: 'Mutual NDA upon request before any sensitive work.' },
                { title: 'GDPR-Aware', desc: 'Processes aligned with EU data protection requirements.' },
                { title: 'You Own Everything', desc: 'All accounts, assets, and IP remain in your control.' },
              ].map((item, i) => (
                <div key={i} className="bg-card p-6 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
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
            <h2 className="font-display text-3xl font-semibold text-foreground mb-6">
              Ready to offload your operations?
            </h2>
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

export default Services;
