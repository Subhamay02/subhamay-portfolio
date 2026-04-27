import PublicationCard from '../components/cards/PublicationCard';
import Section from '../components/ui/Section';
import { publications } from '../data/portfolioContent';

const Publications = () => {
  return (
    <Section
      id="publications"
      eyebrow="Research"
      title="Publications"
      className="py-24 bg-surface/50"
      contentClassName="max-w-7xl mx-auto px-6"
    >
      <div className="space-y-6">
        {publications.map((publication, index) => (
          <PublicationCard key={publication.title} publication={publication} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default Publications;
