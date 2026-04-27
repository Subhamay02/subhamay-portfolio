import TimelineItem from '../components/cards/TimelineItem';
import Section from '../components/ui/Section';
import { achievements } from '../data/portfolioContent';

const Achievements = () => {
  return (
    <Section id="achievements" eyebrow="Milestones" title="Achievements">
      <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-12 pb-4">
        {achievements.map((achievement, index) => (
          <TimelineItem key={achievement.title} achievement={achievement} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default Achievements;
