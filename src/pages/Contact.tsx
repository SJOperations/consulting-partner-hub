import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
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

const FORMSPREE_FORM_ID = "mnjzenna";

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
    <div className="min-h-screen bg-background noise-overlay">
      <SEO title="Contact | SJOps" description="Book a 15-minute fit call with SJOperations. Tell us about your business and we'll identify how to help you scale." path="/contact" />
      <Navbar />
      
      {/* Hero */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="floating-orb w-[400px] h-[400px] bg-accent/[0.06] top-[10%] left-[60%]" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="section-label">Get Started</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-[1.05] mb-6">
              Book your <span className="text-gradient">fit call</span>
            </h1>
            <p className="section-subtitle mx-auto">
              Tell us about your business and we'll get back to you within 24 hours 
              to schedule a call. No obligation, no pressure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="relative pb-20 overflow-hidden">
        <div className="floating-orb w-[300px] h-[300px] bg-teal-light/[0.03] bottom-[10%] left-[5%]" style={{ animationDelay: '8s' }} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30, filter: 'blur(8px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
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
              initial={{ opacity: 0, x: 30, filter: 'blur(8px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-2"
            >
              <div className="card-glass p-8 sticky top-24">
                <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                  What to expect
                </h3>
                
                <div className="space-y-6">
                  {[
                    { icon: Clock, title: '15-minute call', desc: 'Quick, focused conversation about your challenges and goals.' },
                    { icon: Calendar, title: 'Response within 24h', desc: 'We\'ll reply with available times within one business day.' },
                    { icon: CheckCircle2, title: 'No obligation', desc: 'We\'ll give you honest advice even if we\'re not the right fit.' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                        <p className="text-muted-foreground text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/[0.06]">
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

                <div className="mt-6 pt-6 border-t border-white/[0.06]">
                  <h4 className="font-semibold text-foreground mb-2">Prefer email?</h4>
                  <a 
                    href="mailto:contact@sjoperations.com" 
                    className="text-accent hover:underline text-sm"
                  >
                    contact@sjoperations.com
                  </a>
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
