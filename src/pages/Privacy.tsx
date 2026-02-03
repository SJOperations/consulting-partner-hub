import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const Privacy = () => {
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
            <h1 className="section-title mb-8">Privacy Policy</h1>
            
            <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground">
              <p className="text-lg">
                Last updated: {new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
              </p>

              <section>
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">1. Who we are</h2>
                <p>
                  SJOperations ("we", "us", "our") is a business operations consultancy. 
                  This privacy policy explains how we collect, use, and protect your personal data 
                  when you use our website and services.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">2. Data we collect</h2>
                <p>We collect information you provide directly:</p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>Contact information (name, email address)</li>
                  <li>Business information (brand, niche, audience size, revenue)</li>
                  <li>Communications you send us</li>
                </ul>
                <p className="mt-4">We also collect automatically:</p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>Device and browser information</li>
                  <li>IP address and location data</li>
                  <li>Website usage data via cookies and analytics</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">3. How we use your data</h2>
                <p>We use your data to:</p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>Respond to enquiries and schedule calls</li>
                  <li>Provide our services and fulfil contracts</li>
                  <li>Send relevant updates about our services (with your consent)</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">4. Legal basis for processing (GDPR)</h2>
                <p>Under GDPR, we process your data based on:</p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li><strong>Consent</strong> — when you submit forms or accept cookies</li>
                  <li><strong>Contract</strong> — when necessary to provide our services</li>
                  <li><strong>Legitimate interests</strong> — to improve our services and communicate relevant updates</li>
                  <li><strong>Legal obligation</strong> — when required by law</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">5. Data sharing</h2>
                <p>
                  We do not sell your data. We may share it with:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>Service providers who help us operate (hosting, analytics, email)</li>
                  <li>Professional advisers (legal, accounting)</li>
                  <li>Authorities when legally required</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">6. Data retention</h2>
                <p>
                  We retain your data for as long as necessary to provide our services and comply with 
                  legal obligations. Typically, this means:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>Enquiry data: 2 years from last contact</li>
                  <li>Client data: 7 years after contract ends (for legal/tax purposes)</li>
                  <li>Analytics data: 26 months</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">7. Your rights</h2>
                <p>Under GDPR, you have the right to:</p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>Access your personal data</li>
                  <li>Rectify inaccurate data</li>
                  <li>Erase your data ("right to be forgotten")</li>
                  <li>Restrict processing</li>
                  <li>Data portability</li>
                  <li>Object to processing</li>
                  <li>Withdraw consent at any time</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, contact us at [EMAIL PLACEHOLDER].
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">8. Security</h2>
                <p>
                  We implement appropriate technical and organisational measures to protect your data, 
                  including encryption, access controls, and regular security reviews.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">9. International transfers</h2>
                <p>
                  Your data may be transferred outside the EEA. When this happens, we ensure appropriate 
                  safeguards are in place (e.g., Standard Contractual Clauses).
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">10. Contact</h2>
                <p>
                  For privacy-related enquiries, contact us at: [EMAIL PLACEHOLDER]
                </p>
                <p className="mt-2">
                  You also have the right to lodge a complaint with your local data protection authority 
                  (e.g., ICO in the UK, CNIL in France).
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

export default Privacy;
