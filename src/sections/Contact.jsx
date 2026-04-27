import GitHubIcon from '../components/icons/GitHubIcon';
import LinkedInIcon from '../components/icons/LinkedInIcon';
import LinkButton from '../components/ui/LinkButton';
import Section from '../components/ui/Section';
import SocialIconLink from '../components/ui/SocialIconLink';
import { contactContent } from '../data/portfolioContent';

const socialIcons = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
};

const Contact = () => {
  return (
    <Section
      id="contact"
      eyebrow="Get In Touch"
      title="Let's Work Together"
      className="py-24 bg-surface/30"
      contentClassName="max-w-4xl mx-auto px-6 text-center"
      titleClassName="mb-6"
    >
      <p className="text-lg text-textMuted mb-10 max-w-2xl mx-auto">
        {contactContent.intro}
      </p>

      <LinkButton
        href={`mailto:${contactContent.email}`}
        className="px-10 py-4 font-bold shadow-primary/20 mb-12 transition-all transform hover:scale-105"
      >
        Say Hello
      </LinkButton>

      <div className="flex justify-center gap-6">
        {contactContent.socials.map((social) => {
          const Icon = socialIcons[social.icon];

          return (
            <SocialIconLink key={social.href} href={social.href} label={social.label}>
              <Icon />
            </SocialIconLink>
          );
        })}
      </div>
    </Section>
  );
};

export default Contact;
