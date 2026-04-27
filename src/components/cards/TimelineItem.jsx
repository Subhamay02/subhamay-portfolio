import { motion } from 'framer-motion';
import GlassPanel from '../ui/GlassPanel';

const TimelineItem = ({ achievement, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 md:pl-12"
    >
      <div className="absolute w-4 h-4 bg-primary rounded-full -left-[8px] top-1.5 shadow-[0_0_10px_rgba(245,158,11,0.8)]" />

      <GlassPanel className="p-6 rounded-2xl hover:bg-white/[0.02] transition-colors">
        <span className="text-primary font-bold text-sm mb-1 block">{achievement.year}</span>
        <h3 className="text-xl font-bold text-white mb-1">{achievement.title}</h3>
        <p className="text-gray-400 text-sm font-medium mb-3">{achievement.organization}</p>
        <p className="text-textMuted leading-relaxed">{achievement.description}</p>
      </GlassPanel>
    </motion.div>
  );
};

export default TimelineItem;
