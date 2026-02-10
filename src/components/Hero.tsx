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
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Gradient overlay - smooth transition to next section */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-card" />
      <div className="absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-b from-transparent to-card" />

      {/* Floating orbs */}
      <div className="floating-orb w-[500px] h-[500px] bg-accent/[0.07] top-[10%] right-[10%]" />
      <div className="floating-orb w-[300px] h-[300px] bg-teal-light/[0.05] bottom-[20%] left-[5%]" style={{ animationDelay: '10s' }} />

      {/* Spotlight effect */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="hsl(175 60% 45% / 0.12)"
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-12 md:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Text content */}
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="section-label"
            >
              Your Silent Growth Team
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-foreground leading-[1.05] mb-6"
            >
              You create.
              <br />
              <span className="text-gradient">We compound.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed"
            >
              SJOperations installs and runs your offer, funnel, CRM, and growth engine 
              behind the scenes so you can focus on content and clients.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild size="lg" className="group">
                <Link to="/contact">
                  Book a 15-Minute Fit Call
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/services">See What We Build</Link>
              </Button>
            </motion.div>

            {/* Industries */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-14 pt-8 border-t border-white/[0.06]"
            >
              <p className="text-sm text-muted-foreground mb-4">We work with creators and founders in</p>
              <div className="flex flex-wrap gap-3">
                {['Coaching', 'Consulting', 'SaaS', 'E-commerce', 'Personal Brands'].map((tag) => (
                  <span key={tag} className="text-xs font-medium text-muted-foreground/70 px-3 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.02]">
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
