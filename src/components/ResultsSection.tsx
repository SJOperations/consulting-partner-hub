import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Percent, FileText, Users, Play, Building, CalendarDays, Eye } from 'lucide-react';

const results = [
  {
    icon: TrendingUp,
    value: '$100M+',
    label: 'in Sales Generated',
    description: "Through our own internal brands - using the same frameworks we now license to clients.",
  },
  {
    icon: Percent,
    value: '70%+',
    label: 'Profit Margins',
    description: "Across digital product businesses we've operated, refined, and scaled.",
  },
  {
    icon: FileText,
    value: '50+',
    label: 'SOPs & Playbooks',
    description: "Operational IP built in-house, stress-tested across multiple ventures.",
  },
  {
    icon: Users,
    value: '25+',
    label: 'Clients Doing $1M+/Year',
    description: "We work with business owners already winning - and help them scale further.",
  },
  {
    icon: Play,
    value: '8M+',
    label: 'Followers Gained Organically',
    description: "Across YouTube, Instagram, and more - powered by our organic growth engine.",
  },
  {
    icon: Building,
    value: '50+',
    label: 'A-Player Team Members',
    description: "Global execution at scale, built through our own talent systems.",
  },
  {
    icon: CalendarDays,
    value: '3',
    label: 'Flagship Masterminds Hosted',
    description: "From Cape Town to London - designed for experience, information, and connections.",
  },
  {
    icon: Eye,
    value: '250M+',
    label: 'Monthly Views',
    description: "All organic. All in-house. Built without ad spend.",
  },
];

const ResultsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="results" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((result, index) => (
            <motion.div
              key={result.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.05 * index }}
              className="card-feature group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <result.icon className="w-6 h-6 text-primary" />
              </div>

              <div className="font-display text-3xl font-semibold text-foreground mb-1">
                {result.value}
              </div>
              
              <div className="text-sm font-medium text-foreground mb-2">
                {result.label}
              </div>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {result.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
