import SkillCard from '../components/cards/SkillCard';
import Section from '../components/ui/Section';
import { skillsData } from '../data/portfolioContent';

const Skills = () => {
  return (
    <Section id="skills" eyebrow="My Expertise" title="Technical Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillsData.map((skillGroup, index) => (
          <SkillCard key={skillGroup.category} skillGroup={skillGroup} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default Skills;
