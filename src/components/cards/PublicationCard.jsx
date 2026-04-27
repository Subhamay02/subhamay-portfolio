import { motion } from 'framer-motion';
import ExternalLinkIcon from '../ui/ExternalLinkIcon';
import GlassPanel from '../ui/GlassPanel';

const PublicationCard = ({ publication, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <GlassPanel className="p-6 md:p-8 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 border-l-4 border-l-primary">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{publication.title}</h3>
          <p className="text-textMuted text-sm mb-3">
            <span className="font-semibold text-gray-300">{publication.journal}</span> - {publication.year}
          </p>
          <p className="text-textMuted max-w-3xl mb-4">{publication.description}</p>
          {publication.link && (
            <a
              href={publication.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-semibold text-primary hover:text-primaryDark transition-colors"
            >
              View Publication
              <ExternalLinkIcon />
            </a>
          )}
        </div>
      </GlassPanel>
    </motion.div>
  );
};

export default PublicationCard;
