import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, Clock, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

// TODO: Replace with your Formspree form ID from https://formspree.io
const FORMSPREE_FORM_ID = "YOUR_FORM_ID";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        toast({
          title: "Application received!",
          description: "We'll be in touch within 24 hours to schedule your fit call.",
        });
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <p className="section-label">Get Started</p>
            <h1 className="section-title mb-6">
              Book your 15-minute fit call
            </h1>
            <p className="section-subtitle mx-auto">
              Tell us about your business and we'll get back to you within 24 hours 
              to schedule a call. No obligation, no pressure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your name *</Label>
                    <Input 
                      id="name" 
                      name="name"
                      placeholder="Jane Smith" 
                      required 
                      className="bg-card border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email address *</Label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email" 
                      placeholder="jane@example.com" 
                      required 
                      className="bg-card border-border"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="brand">Brand/business link *</Label>
                  <Input 
                    id="brand" 
                    name="brand"
                    placeholder="https://yourbrand.com or @handle" 
                    required 
                    className="bg-card border-border"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="niche">Your niche *</Label>
                    <Input 
                      id="niche" 
                      name="niche"
                      placeholder="e.g., Executive coaching" 
                      required 
                      className="bg-card border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="audience">Audience size</Label>
                    <Select name="audience">
                      <SelectTrigger className="bg-card border-border">
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-1k">0–1K</SelectItem>
                        <SelectItem value="1k-10k">1K–10K</SelectItem>
                        <SelectItem value="10k-50k">10K–50K</SelectItem>
                        <SelectItem value="50k-100k">50K–100K</SelectItem>
                        <SelectItem value="100k+">100K+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="revenue">Current monthly revenue</Label>
                    <Select name="revenue">
                      <SelectTrigger className="bg-card border-border">
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-5k">£0–£5K</SelectItem>
                        <SelectItem value="5k-10k">£5K–£10K</SelectItem>
                        <SelectItem value="10k-25k">£10K–£25K</SelectItem>
                        <SelectItem value="25k-50k">£25K–£50K</SelectItem>
                        <SelectItem value="50k+">£50K+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="offer">Main offer</Label>
                    <Input 
                      id="offer" 
                      name="offer"
                      placeholder="e.g., 1:1 coaching, course, community" 
                      className="bg-card border-border"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="stack">Current tech stack (optional)</Label>
                  <Input 
                    id="stack" 
                    name="stack"
                    placeholder="e.g., Kajabi, ConvertKit, Calendly" 
                    className="bg-card border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="constraint">Primary constraint or challenge *</Label>
                  <Textarea 
                    id="constraint" 
                    name="constraint"
                    placeholder="What's the main thing holding your business back right now?" 
                    required 
                    className="bg-card border-border min-h-[120px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="availability">Best times for a call (your timezone)</Label>
                  <Input 
                    id="availability" 
                    name="availability"
                    placeholder="e.g., Mon–Fri mornings GMT" 
                    className="bg-card border-border"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  By submitting, you agree to our{' '}
                  <a href="/privacy" className="text-accent hover:underline">Privacy Policy</a>.
                </p>
              </form>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-2"
            >
              <div className="bg-card border border-border rounded-lg p-8 sticky top-24">
                <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                  What to expect
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">15-minute call</h4>
                      <p className="text-muted-foreground text-sm">
                        Quick, focused conversation about your challenges and goals.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Response within 24h</h4>
                      <p className="text-muted-foreground text-sm">
                        We'll reply with available times within one business day.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">No obligation</h4>
                      <p className="text-muted-foreground text-sm">
                        We'll give you honest advice even if we're not the right fit.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <h4 className="font-semibold text-foreground mb-3">Prep checklist</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      Know your biggest operational bottleneck
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      Have rough revenue numbers ready
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      Be ready to share screen if helpful
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
