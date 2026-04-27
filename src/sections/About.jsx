import GlassPanel from '../components/ui/GlassPanel';
import Section from '../components/ui/Section';

const About = () => {
  return (
    <Section id="about" eyebrow="Introduction" title="About Me" titleClassName="mb-10">
      <GlassPanel className="p-8 md:p-12 rounded-2xl">
        <p className="text-lg text-textMuted leading-relaxed mb-6">
          I am a detail-oriented BCA student with strong proficiency in Python, data analysis, SQL, and BI-driven problem-solving. I am skilled in transforming both academic and real-world data into actionable insights using advanced analytical methods and visualization techniques.
        </p>
        <p className="text-lg text-textMuted leading-relaxed">
          With hands-on experience in developing IoT-integrated solutions, I bring a practical approach to building smart, data-driven systems. I am eager to leverage my analytical, technical, and problem-solving capabilities to make an immediate impact in technology and business environments.
        </p>
      </GlassPanel>
    </Section>
  );
};

export default About;
