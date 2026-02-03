import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <p className="section-label">Legal</p>
            <h1 className="section-title mb-8">Terms of Service</h1>
            
            <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground">
              <p className="text-lg">
                Last updated: {new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
              </p>

              <section>
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">1. Agreement to terms</h2>
                <p>
                  By accessing or using the SJOperations website and services, you agree to be bound 
                  by these Terms of Service. If you disagree with any part, you may not access our services.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">2. Services</h2>
                <p>
                  SJOperations provides business operations consulting, including but not limited to: 
                  offer design, funnel building, CRM setup, automation implementation, content operations, 
                  and analytics services. Specific deliverables are outlined in individual service agreements.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">3. No guarantees</h2>
                <p>
                  We do not guarantee specific business outcomes, revenue figures, or results. 
                  Marketing and business success depend on many factors beyond our control. 
                  We provide benchmarks and process-based expectations, not absolute guarantees.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">4. Client responsibilities</h2>
                <p>You agree to:</p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>Provide accurate and complete information</li>
                  <li>Grant necessary access to systems and accounts</li>
                  <li>Respond to requests in a timely manner</li>
                  <li>Make payments as agreed</li>
                  <li>Comply with all applicable laws</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">5. Intellectual property</h2>
                <p>
                  Work product created specifically for you (funnels, automations, SOPs, etc.) 
                  becomes your property upon full payment. Our proprietary methodologies, 
                  frameworks, and general know-how remain ours.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">6. Confidentiality</h2>
                <p>
                  We maintain strict confidentiality regarding your business information. 
                  We will not share your data, strategies, or results without your explicit 
                  written consent. NDAs are available upon request.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">7. Payment terms</h2>
                <p>
                  Payment terms are specified in individual service agreements. 
                  Unless otherwise stated, invoices are due within 14 days. 
                  Late payments may result in service suspension.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">8. Cancellation</h2>
                <p>
                  Monthly agreements: 30 days' written notice required.
                  Fixed-term projects: Governed by individual agreement terms.
                  Refunds: Prorated based on work completed, at our discretion.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">9. Limitation of liability</h2>
                <p>
                  To the maximum extent permitted by law, SJOperations shall not be liable 
                  for any indirect, incidental, special, consequential, or punitive damages, 
                  including loss of profits, data, or business opportunities.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">10. Governing law</h2>
                <p>
                  These terms are governed by the laws of England and Wales. 
                  Any disputes shall be subject to the exclusive jurisdiction of the courts 
                  of England and Wales.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">11. Changes to terms</h2>
                <p>
                  We may update these terms from time to time. We'll notify you of significant 
                  changes via email or website notice. Continued use after changes constitutes 
                  acceptance of the new terms.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">12. Contact</h2>
                <p>
                  For questions about these terms, contact us at: [EMAIL PLACEHOLDER]
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;
