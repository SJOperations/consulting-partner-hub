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
    <div className="min-h-screen bg-background noise-overlay">
      <Navbar />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-card" />
        <div className="floating-orb w-[400px] h-[400px] bg-accent/[0.06] top-[10%] right-[10%]" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <p className="section-label">Our Services</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-[1.05] mb-6">
              We build, integrate, and operate the back end that turns attention into{' '}
              <span className="text-gradient">revenue</span>
            </h1>
            <p className="section-subtitle">
              From offer design to revenue analytics—everything a personal brand needs 
              to scale without hiring a full operations team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Pillars */}
      <section className="relative py-24 bg-card overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-background" />
        <div className="floating-orb w-[300px] h-[300px] bg-accent/[0.05] bottom-10 -left-20" style={{ animationDelay: '7s' }} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicePillars.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="card-glass p-6 group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent mb-4 group-hover:bg-accent/20 group-hover:shadow-[0_0_20px_hsl(175_60%_45%_/_0.15)] transition-all duration-500">
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
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
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
      <section className="relative py-24 bg-background overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-secondary" />
        <div className="floating-orb w-[350px] h-[350px] bg-teal-light/[0.04] top-20 right-10" style={{ animationDelay: '12s' }} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
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
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="card-glass p-8"
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
                <div className="pt-4 border-t border-white/[0.06]">
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
      <section className="relative py-24 bg-secondary overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-background" />
        <div className="floating-orb w-[250px] h-[250px] bg-accent/[0.04] -top-10 left-[20%]" style={{ animationDelay: '3s' }} />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
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
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="px-4 py-2 rounded border border-white/[0.06] text-sm text-muted-foreground hover:border-accent/30 hover:text-foreground transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, hsl(220 20% 12% / 0.8), hsl(220 20% 10% / 0.6))' }}
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
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
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="card-glass p-6"
                >
                  <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Services;
