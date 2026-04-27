import { motion } from 'framer-motion';
import GlassPanel from '../ui/GlassPanel';
import TagList from '../ui/TagList';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="h-full"
    >
      <GlassPanel className="p-8 rounded-2xl flex flex-col h-full hover:border-primary/30 transition-colors duration-300 group">
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-textMuted leading-relaxed mb-8 flex-grow">{project.description}</p>
        <TagList tags={project.tags} />
      </GlassPanel>
    </motion.div>
  );
};

export default ProjectCard;
