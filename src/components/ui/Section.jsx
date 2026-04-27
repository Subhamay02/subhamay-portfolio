import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const Section = ({
  id,
  eyebrow,
  title,
  children,
  className = 'py-24 max-w-7xl mx-auto px-6',
  contentClassName,
  titleClassName,
}) => {
  return (
    <section id={id} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className={contentClassName}
      >
        <SectionHeader eyebrow={eyebrow} title={title} titleClassName={titleClassName} />
        {children}
      </motion.div>
    </section>
  );
};

export default Section;
