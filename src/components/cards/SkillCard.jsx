import { motion } from 'framer-motion';
import GlassPanel from '../ui/GlassPanel';

const SkillCard = ({ skillGroup, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <GlassPanel className="p-6 rounded-2xl">
        <h3 className="text-xl font-semibold text-white mb-6 border-b border-white/10 pb-4">
          {skillGroup.category}
        </h3>
        <div className="flex flex-wrap gap-3">
          {skillGroup.items.map((item) => (
            <span
              key={item}
              className="px-4 py-2 bg-[#0B0F19] border border-white/5 rounded-full text-textMuted text-sm hover:border-primary/50 hover:text-white transition-colors"
            >
              {item}
            </span>
          ))}
        </div>
      </GlassPanel>
    </motion.div>
  );
};

export default SkillCard;
