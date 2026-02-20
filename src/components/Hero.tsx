import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SplineScene } from '@/components/ui/spline';
import { Spotlight } from '@/components/ui/spotlight';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-visible pt-16 pb-24">
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-card" />
      <div className="absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-b from-transparent to-card" />

      {/* Floating orbs — larger, more dramatic */}
      <div className="floating-orb w-[600px] h-[600px] bg-accent/[0.08] top-[5%] right-[5%]" />
      <div className="floating-orb w-[400px] h-[400px] bg-teal-light/[0.05] bottom-[15%] left-[0%]" style={{ animationDelay: '10s' }} />
      <div className="floating-orb w-[200px] h-[200px] bg-accent/[0.06] top-[60%] right-[30%]" style={{ animationDelay: '15s' }} />

      {/* Spotlight effect */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="hsl(175 60% 45% / 0.15)"
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-12 md:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Text content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/[0.06] mb-8 overflow-hidden"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-[pulse-glow_2s_ease-in-out_infinite]" />
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-accent whitespace-nowrap">
                The Operators Behind the Curtain
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30, filter: 'blur(12px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-[1.02] mb-8 tracking-tight"
            >
              You show up.
              <br />
              <span className="text-gradient">We make it print.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mb-12 leading-relaxed"
            >
              While you're closing deals and creating content, we're engineering the 
              entire back end that turns attention into revenue—on autopilot.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild size="lg" className="group text-base px-8 py-6 shadow-[0_0_30px_hsl(175_60%_45%_/_0.2)]">
                <Link to="/contact">
                  Make My Back End Bulletproof
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-base px-8 py-6">
                <Link to="/services">See the Arsenal</Link>
              </Button>
            </motion.div>

            {/* Industries */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-16 pt-8 border-t border-white/[0.06]"
            >
              <p className="text-sm text-muted-foreground mb-4">Built for industries that demand results</p>
              <div className="flex flex-wrap gap-3">
                {['Coaching', 'Consulting', 'SaaS', 'E-commerce', 'Personal Brands'].map((tag) => (
                  <span key={tag} className="text-xs font-medium text-muted-foreground/80 px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.03] hover:border-accent/20 hover:text-accent/70 transition-colors duration-300 cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right side - 3D Robot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px] -mb-10 md:-mb-20"
          >
            {/* Speech bubble */}
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-4 sm:top-6 md:top-10 right-2 sm:right-4 md:right-6 z-20"
            >
              <div className="relative border border-accent/25 rounded-2xl px-4 py-3 sm:px-5 sm:py-3.5 shadow-[0_0_25px_hsl(175_60%_45%_/_0.12)] max-w-[180px] sm:max-w-[200px]" style={{ background: 'linear-gradient(135deg, hsl(220 20% 14% / 0.9), hsl(220 20% 10% / 0.85))', backdropFilter: 'blur(16px)' }}>
                <p className="text-[11px] sm:text-xs font-semibold text-foreground leading-snug">
                  Hello, my name is SJ!
                </p>
                <p className="text-[10px] sm:text-[11px] text-muted-foreground leading-snug mt-0.5">
                  Interact with me! <span className="text-accent">👋</span>
                </p>
                {/* Tail */}
                <div className="absolute -bottom-2 right-6 sm:right-8 w-4 h-4 rotate-45 rounded-sm border-r border-b border-accent/25" style={{ background: 'hsl(220 20% 11% / 0.9)' }} />
              </div>
            </motion.div>

            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full scale-110 origin-top"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
