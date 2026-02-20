import { motion } from 'framer-motion';
import { Settings, Workflow, BarChart3, Clock } from 'lucide-react';

const values = [
  { 
    title: 'We Run the Whole Machine', 
    description: 'Offer, funnel, CRM, automations, analytics—we own the entire stack so you don\'t have to.',
    icon: Settings 
  },
  { 
    title: 'Engineered to Scale', 
    description: 'No duct tape. No band-aids. We build systems that compound—month after month.',
    icon: Workflow 
  },
  { 
    title: 'Receipts, Not Promises', 
    description: 'Weekly KPIs, live dashboards, full visibility. We prove the ROI—every single week.',
    icon: BarChart3 
  },
  { 
    title: 'Zero Homework for You', 
    description: 'We implement everything. You just approve. No meetings, no busy work, no hand-holding.',
    icon: Clock 
  },
];

const TrustSection = () => {
  return (
    <section className="relative py-28 bg-card overflow-hidden">
      {/* Smooth gradient transitions */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-background" />
      
      {/* Floating orb */}
      <div className="floating-orb w-[500px] h-[500px] bg-accent/[0.05] -top-32 -right-20" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <p className="section-label">Why We're Different</p>
          <h2 className="section-title">
            We don't advise. <span className="text-gradient">We execute.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="card-shimmer p-6 text-center group"
            >
              <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/10 text-accent mb-5 group-hover:bg-accent/20 group-hover:shadow-[0_0_30px_hsl(175_60%_45%_/_0.15)] transition-all duration-500">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
