import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is a 'shadow operator' and how do you work with creators?",
    answer: "A shadow operator works behind the scenes to run your business operations while you stay front-facing. We handle your CRM, funnels, automations, content workflows, and reporting—everything that keeps your business running—so you can focus on creating content and serving clients. You stay the face; we stay invisible.",
  },
  {
    question: "What outcomes can I expect and what's the timeline?",
    answer: "Outcomes depend on where you're starting. Typically, clients see first wins (like a working funnel or automation) within 72 hours of kickoff. More substantial results—like increased qualified appointments or improved conversion rates—usually materialise over 30–90 days. We'll give you realistic benchmarks based on your specific situation during our fit call.",
  },
  {
    question: "Do you guarantee results? Why not?",
    answer: "No, we don't guarantee specific results—and you should be wary of anyone who does. Marketing outcomes depend on many variables: your offer, your audience, market conditions, and your own execution on the front end. What we do guarantee is our process, our expertise, and our commitment to your success. We'll show you benchmarks from similar engagements so you know what's realistic.",
  },
  {
    question: "How is success measured each week?",
    answer: "We track KPIs that matter for your specific business: qualified appointments per week, show rate, time-to-first sale, funnel conversion rate, email open/click rates, content output, and response times. You'll get a weekly report with these numbers plus our analysis and recommended actions. You'll also have dashboard access to see your metrics anytime.",
  },
  {
    question: "How much time will this require from me?",
    answer: "Very little. We're designed for minimal creator lift. Typically, you'll spend 1–2 hours per week: one strategy call (30–45 min) and occasional async input via Slack or email. We handle the implementation. Your job is to approve, give feedback, and keep creating.",
  },
  {
    question: "What tools do you work with and who owns the accounts?",
    answer: "We're tool-agnostic—we use whatever fits your workflow and budget. Common tools include Notion, ClickUp, Zapier, Make, HubSpot, HighLevel, Calendly, Stripe, and more. Critically: you own all accounts and assets. We work as authorised users on your systems. When we part ways, everything stays with you.",
  },
  {
    question: "How do you handle data security and GDPR?",
    answer: "We take security seriously. We follow a least-privilege access policy (we only access what we need), use secure password sharing, and can sign an NDA before any engagement. Our processes are GDPR-aware—we help you stay compliant with data collection, consent, and deletion requirements.",
  },
  {
    question: "What does onboarding look like and how fast can we start?",
    answer: "Onboarding takes about a week. After signing, we'll run a kickoff call to audit your current setup, gather access credentials, and align on priorities. We'll document everything in a shared workspace. Most clients see their first deliverable within 72 hours of kickoff.",
  },
  {
    question: "What are the contract terms and cancellation options?",
    answer: "We offer two models: a monthly operating agreement (pause or cancel with 30 days' notice) or a fixed-term sprint (30–90 days with defined milestones). No long-term lock-ins. We want you to stay because we're delivering value, not because you're trapped.",
  },
];

const FAQs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="section-label">FAQs</p>
            <h1 className="section-title mb-6">
              Questions answered
            </h1>
            <p className="section-subtitle mx-auto">
              Everything you need to know about working with SJOperations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-accent/30"
                >
                  <AccordionTrigger className="text-left font-display text-lg font-semibold text-foreground hover:text-accent hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
              Still have questions?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Book a fit call and we'll answer everything—no obligation.
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

export default FAQs;
