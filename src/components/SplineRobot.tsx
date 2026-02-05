'use client'

import { SplineScene } from "@/components/ui/spline";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { motion } from "framer-motion";

export function SplineRobot() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="section-label">Powered by Innovation</p>
          <h2 className="section-title">Meet Your Operations Partner</h2>
        </motion.div>

        <Card className="w-full max-w-6xl mx-auto min-h-[500px] bg-card/80 backdrop-blur-sm relative overflow-hidden border-border">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="hsl(175 60% 45% / 0.3)"
          />
          
          <div className="flex flex-col md:flex-row h-full min-h-[500px]">
            {/* Left content */}
            <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                  Always-On <span className="text-gradient">Automation</span>
                </h3>
                
                <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-md">
                  While you sleep, our systems work. Automated workflows, smart CRM triggers, 
                  and growth engines running 24/7 to compound your efforts.
                </p>

                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20">
                    CRM Automation
                  </span>
                  <span className="px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20">
                    Funnel Systems
                  </span>
                  <span className="px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20">
                    Growth Engine
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Right content - 3D Robot */}
            <div className="flex-1 relative min-h-[300px] md:min-h-[500px]">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

export default SplineRobot;
