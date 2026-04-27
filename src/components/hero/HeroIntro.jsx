import { motion } from 'framer-motion';
import LinkButton from '../ui/LinkButton';
import profileImg from '../../assets/profile.jpeg';

const HeroIntro = ({ content }) => {
  return (
    <div className="flex-1 z-10 flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center gap-6 mb-6"
      >
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-primary/80 shadow-[0_0_30px_rgba(245,158,11,0.5)] flex-shrink-0 relative group">
          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <img
            src={profileImg}
            alt={content.name}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div>
          <p className="text-textMuted text-lg">{content.greeting}</p>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">{content.name}</h1>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-xl md:text-3xl font-medium text-textMuted mb-8">
          <span className="text-gradient">{content.roleHighlight}</span> {content.roleSuffix}
        </h2>
        <p className="text-base md:text-lg text-textMuted max-w-lg mb-10 leading-relaxed">{content.summary}</p>
      </motion.div>

      <div className="flex flex-col gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row flex-wrap gap-4"
        >
          {content.actions.map((action) => (
            <LinkButton key={action.href} href={action.href} variant={action.variant}>
              {action.label}
            </LinkButton>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row flex-wrap gap-4"
        >
          <LinkButton 
            href="/Subhamay_Kumar_Resume.pdf" 
            variant="resumeDownload" 
            download="Subhamay_Kumar_Resume.pdf"
          >
            Download CV
          </LinkButton>
          <LinkButton 
            href="/Subhamay_Kumar_Resume.pdf" 
            variant="resumeView" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            View CV
          </LinkButton>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroIntro;
