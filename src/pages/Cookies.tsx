import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Cookies = () => {
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
            <h1 className="section-title mb-8">Cookie Policy</h1>
            
            <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground">
              <p className="text-lg">
                Last updated: {new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
              </p>

              <section>
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">What are cookies?</h2>
                <p>
                  Cookies are small text files stored on your device when you visit a website. 
                  They help websites remember your preferences and understand how you use the site.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">How we use cookies</h2>
                <p>We use cookies for:</p>
                
                <h3 className="font-semibold text-foreground mt-4 mb-2">Essential cookies</h3>
                <p>
                  Required for the website to function. These cannot be disabled.
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>Session management</li>
                  <li>Security features</li>
                  <li>Form functionality</li>
                </ul>

                <h3 className="font-semibold text-foreground mt-4 mb-2">Analytics cookies</h3>
                <p>
                  Help us understand how visitors interact with our website.
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>Google Analytics (page views, traffic sources, user behaviour)</li>
                  <li>Session duration and bounce rate</li>
                </ul>

                <h3 className="font-semibold text-foreground mt-4 mb-2">Marketing cookies</h3>
                <p>
                  Used to track visitors across websites for advertising purposes.
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>Conversion tracking</li>
                  <li>Retargeting (if applicable)</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">Third-party cookies</h2>
                <p>We may use services that set their own cookies:</p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li><strong>Google Analytics</strong> — website analytics</li>
                  <li><strong>Calendly</strong> — appointment scheduling (if embedded)</li>
                  <li><strong>YouTube/Vimeo</strong> — video embeds (if used)</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">Managing cookies</h2>
                <p>You can control cookies through:</p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li><strong>Browser settings</strong> — most browsers let you block or delete cookies</li>
                  <li><strong>Cookie consent banner</strong> — adjust preferences when you first visit</li>
                  <li><strong>Opt-out tools</strong> — Google provides opt-out browser add-ons</li>
                </ul>
                <p className="mt-4">
                  Note: Blocking certain cookies may affect website functionality.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">Cookie retention</h2>
                <p>Cookie lifespans vary:</p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li><strong>Session cookies</strong> — deleted when you close your browser</li>
                  <li><strong>Persistent cookies</strong> — remain for a set period (typically 1–24 months)</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">GDPR and consent</h2>
                <p>
                  In compliance with GDPR and ePrivacy regulations, we request your consent 
                  before setting non-essential cookies. You can withdraw consent at any time 
                  by clearing your browser cookies and revisiting the site.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">Updates to this policy</h2>
                <p>
                  We may update this cookie policy periodically. Check this page for the 
                  latest information on our cookie practices.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">Contact</h2>
                <p>
                  For questions about cookies, see our{' '}
                  <Link to="/privacy" className="text-accent hover:underline">Privacy Policy</Link>{' '}
                  or contact us at: [EMAIL PLACEHOLDER]
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

export default Cookies;
