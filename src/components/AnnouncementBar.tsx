import { motion } from 'framer-motion';

const AnnouncementBar = () => {
  return (
    <motion.div 
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-gold py-2.5 text-center"
    >
      <a 
        href="#apply" 
        className="text-sm font-medium text-primary-foreground hover:underline"
      >
        <span className="font-semibold">Next Elite Mastermind: Mar 1-3, 2026.</span>
        {' '}Dubai, United Arab Emirates.
      </a>
    </motion.div>
  );
};

export default AnnouncementBar;
